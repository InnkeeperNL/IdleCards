var current_upgrade = false;

var all_upgrades = {
	/*burn:{
		name: 			'Burn',
		description: 	'burn level',
		card_image: 	'burning_rune',
		type: 			'ability_level',
		subtypes:  		['burn'],
	},*/
	/*rarity_boost:{
		name: 			'Rarity boost',
		description: 	'Reduces the chance of summoning low rarity enemies.',
		card_image: 	'peasant',
		type: 			'reduce_common_rarity',
		subtypes:  		['any'],
		level_cost_scale: 	10,
		amount: 		1,
		amount_fixed: 	true,
		cost: 			{scraps:10,},
	},*/
	/*summon_level:{
		name: 			'Summon level',
		description: 	'Increases the maximum level of summoned enemies.',
		card_image: 	'fire_dragon',
		type: 			'summon_max_level',
		subtypes:  		['any'],
		level_cost_scale: 	10,
		amount: 		1,
		amount_fixed: 	true,
		cost: 			{scraps:20,},
	},*/
	/*summon_drop_chance:{
		name: 			'Drop chance',
		description: 	'Increases the drop chance by 5% per level.',
		card_image: 	'map',
		type: 			'summon_loot_rarity',
		subtypes:  		['any'],
		level_cost_scale: 	5,
		cost: 			{scraps:10,},
	},*/
	floating_chance:{
		name: 			'Floating chance',
		description: 	'Increases the chance a floating reward appears during combat.',
		needed_upgrades:{
			summon_rarity: 	3,
		},
		card_image: 	'scavanger',
		type: 			'floating_chance',
		subtypes:  		['any'],
		amount: 		0.05,
		level_cost_scale: 	3,
		cost: 			{scraps:25,},
		max_level: 		40,
	},
	floating_scraps:{
		name: 			'Floating scraps',
		description: 	'Increases the scraps gained when picking up floating scraps during combat. (base is 1)',
		needed_upgrades:{
			floating_chance: 	2,
		},
		card_image: 	'scraps_placeholder',
		type: 			'floating_scraps',
		subtypes:  		['any'],
		amount: 		1,
		level_cost_scale: 	3,
		cost: 			{scraps:100,},
		max_level: 		50,
	},
	game_speed:{
		name: 			'Max game speed',
		description: 	'Increases the maximum game speed when set to \'fast\' or \'fastest\' by 10%.',
		needed_upgrades:{
			summon_rarity: 	3,
		},
		card_image: 	'time_mage',
		type: 			'max_game_speed',
		subtypes:  		['any'],
		amount: 		0.2,
		level_cost_scale: 	3,
		cost: 			{scraps:25,},
		max_level: 		40,
	},
	l_rewards:{
		name: 			'Rewards',
		description: 	'Increases the rewards of newly summoned enemies, waves and completing quests by 10% each level.',
		card_image: 	'scout',
		type: 			'summon_reward',
		subtypes:  		['any'],
		level_cost_scale: 	10,
		cost: 			{shard:5,},
	},
	merchant_offers:{
		name: 			'Merchant offers',
		description: 	'Reduces the maximum scraps requested by merchants offering cards by 10%.<br>Only affects new offers.',
		needed_upgrades:{
			summon_rarity: 	10,
		},
		card_image: 	'chest',
		type: 			'merchant_sell',
		subtypes:  		['any'],
		amount: 		0.1,
		level_cost_scale: 	5,
		cost: 			{scraps:10,},
		max_level: 		100,
	},
	merchant_sales:{
		name: 			'Merchant sales',
		description: 	'Increases the maximum scraps offered by merchants who want to buy cards by 10%.<br>Only affects new offers.',
		needed_upgrades:{
			summon_rarity: 	10,
		},
		card_image: 	'mercenary',
		type: 			'merchant_buy',
		subtypes:  		['any'],
		amount: 		0.1,
		level_cost_scale: 	5,
		cost: 			{scraps:10,},
		max_level: 		100,
	},
	summon_rarity:{
		name: 			'Summon rarity',
		description: 	'Increases the maximum rarity of summoned enemies.<br/>This includes wave bosses.',
		card_image: 	'peasant',
		type: 			'summon_max_rarity',
		subtypes:  		['any'],
		level_cost_scale: 	10,
		amount: 		1,
		amount_fixed: 	true,
		cost: 			{scraps:2,},
	},
	summon_tries:{
		name: 			'Summon tries',
		description: 	'Increases the number of times you can try to defeat the same summoned enemy.',
		needed_upgrades:{
			l_rewards: 	10,
		},
		card_image: 	'archer',
		type: 			'summon_tries',
		subtypes:  		['any'],
		amount: 		1,
		amount_fixed: 	true,
		level_cost_type: 'next_level',
		cost: 			{shard:5,},
		max_level: 		9,
	},
	wave_access:{
		name: 			'Waves',
		description: 	'Unlocks wave battles.',
		card_image: 	'conscription',
		type: 			'wave_access',
		subtypes:  		['any'],
		amount: 		100,
		amount_fixed: 	true,
		cost: 			{scraps:100,},
		max_level: 		1,
		hide_if_maxed: 	true,
	},
	/*wave_min_power:{
		name: 			'Wave start',
		description: 	'Increases the power of the first wave.',
		needed_upgrades:{
			wave_access: 1,
		},
		card_image: 	'summon_imp',
		type: 			'wave_min_power',
		subtypes:  		['any'],
		level_cost_scale: 	2,
		amount: 		0.1,
		amount_fixed: 	true,
		cost: 			{scraps:5,},
		max_level: 		40,
	},*/
	wave_power_increase:{
		name: 			'Wave growth',
		description: 	'Reduces the growth of power per wave.',
		needed_upgrades:{
			wave_access: 1,
		},
		card_image: 	'fear',
		type: 			'wave_power_increase',
		subtypes:  		['any'],
		level_cost_scale: 	2,
		amount: 		0.025,
		amount_fixed: 	true,
		cost: 			{scraps:10,},
		max_level: 		40,
	},
	z_alchemist_access:{
		name: 			'Alchemist',
		description: 	'Unlocks the alchemist lab.',
		needed_upgrades:{
			wave_access: 1,
		},
		card_image: 	'alchemist',
		type: 			'alchemist_access',
		subtypes:  		['any'],
		amount: 		100,
		amount_fixed: 	true,
		cost: 			{shard: 10, scraps:100,},
		max_level: 		1,
		hide_if_maxed: 	true,
	},

	// ************************************************* POTIONS ************************************************
	
	zz_burglar_potion:{
		name: 			'burglar potion',
		description: 	'2% bonus chance battles reward cards and items in stead of scraps.',
		card_image: 	'burglar',
		upgrade_type: 	'potion',
		type: 			'summon_loot_rarity',
		subtypes:  		['any'],
		amount:  		0.02,
		level_cost_scale: 	2,
		cost:{
			flask: 		1,
			scraps:  	10,
		}
	},
	zz_mercenary_potion:{
		name: 			'mercenary potion',
		description: 	'2% increase to the maximum scraps offered by merchants.',
		card_image: 	'mercenary',
		upgrade_type: 	'potion',
		type: 			'merchant_buy',
		subtypes:  		['any'],
		amount:  		0.02,
		level_cost_scale: 	2,
		cost:{
			flask: 		1,
			scraps:  	10,
		}
	},
	zz_chest_potion:{
		name: 			'chest potion',
		description: 	'2% reduction to the maximum scraps requested by merchants.',
		card_image: 	'chest',
		upgrade_type: 	'potion',
		type: 			'merchant_sell',
		subtypes:  		['any'],
		amount:  		0.02,
		level_cost_scale: 	2,
		cost:{
			flask: 		1,
			scraps:  	10,
		}
	},
	zz_shard_potion:{
		name: 			'Shard potion',
		description: 	'2% bonus to rewards of newly summoned enemies, waves and completing quests.',
		card_image: 	'shard',
		upgrade_type: 	'potion',
		type: 			'summon_reward',
		subtypes:  		['any'],
		amount:  		0.02,
		level_cost_scale: 	2,
		cost:{
			flask: 		1,
			scraps:  	10,
		}
	},
	zz_scavenger_potion:{
		name: 			'Scavanger potion',
		description: 	'2% bonus to picked up floating scraps during combat.',
		card_image: 	'scavanger',
		upgrade_type: 	'potion',
		type: 			'floating_scraps',
		subtypes:  		['any'],
		amount:  		0.02,
		level_cost_scale: 	2,
		cost:{
			flask: 		1,
			scraps:  	10,
		}
	},
	zz_summon_potion:{
		name: 			'Summon potion',
		description: 	'2% bonus the maximum rarity of summoned enemies.',
		card_image: 	'summon_imp',
		upgrade_type: 	'potion',
		type: 			'summon_max_rarity',
		subtypes:  		['any'],
		amount:  		0.02,
		level_cost_scale: 	2,
		cost:{
			flask: 		1,
			scraps:  	10,
		}
	},
	/*z_summon_buffs:{
		name: 			'Summon buffs',
		description: 	'Increases the number of buffs you can use at the same time.',
		card_image: 	'spyglass',
		type: 			'summon_max_pre_buffs',
		subtypes:  		['any'],
		amount: 		1,
		amount_fixed: 	true,
		level_cost_scale: 1,
		cost: 			{spyglass:1,},
	},*/
	/*hero_abilities:{
		name: 			'Hero abilities',
		description: 	'Increases the level of your hero\'s abilities by 5% each upgrade.',
		card_image: 	'archmage',
		type: 			'ability_level',
		subtypes:  		['hero'],
		level_cost_scale: 	10,
		cost: 			{scraps:50,},
	},
	hero_health:{
		name: 			'Hero health',
		description: 	'Increases your hero\'s health by 5% each upgrade.',
		card_image: 	'princess',
		type: 			'health',
		subtypes:  		['hero'],
		level_cost_scale: 	10,
		cost: 			{scraps:50,},
	},
	hero_power:{
		name: 			'Hero power',
		description: 	'Increases your hero\'s power by 5% each upgrade.',
		card_image: 	'barbarian_sisters',
		type: 			'power',
		subtypes:  		['hero'],
		level_cost_scale: 	10,
		cost: 			{scraps:50,},
	},
	card_abilities:{
		name: 			'Card abilities',
		description: 	'Increases the level of abilities of your played cards by 5% each upgrade.',
		card_image: 	'bird_trainer',
		type: 			'ability_level',
		subtypes:  		['unit'],
		level_cost_scale: 	10,
		cost: 			{scraps:50,},
	},
	card_health:{
		name: 			'Card health',
		description: 	'Increases the health of your played cards by 5% each upgrade.',
		card_image: 	'blue_butterflies',
		type: 			'health',
		subtypes:  		['unit'],
		level_cost_scale: 	10,
		cost: 			{scraps:50,},
	},
	card_power:{
		name: 			'Card power',
		description: 	'Increases the power of your played cards by 5% each upgrade.',
		card_image: 	'innkeeper',
		type: 			'power',
		subtypes:  		['unit'],
		level_cost_scale: 	10,
		cost: 			{scraps:50,},
	},*/
};

$.each(all_upgrades, function(upgrade_id, upgrade_info){
	if(upgrade_info['card_image'] != undefined && all_available_cards[upgrade_info['card_image']] != undefined && upgrade_info['image'] == undefined)
	{
		upgrade_info['image'] = all_available_cards[upgrade_info['card_image']]['image'];
	}
	if(upgrade_info['upgrade_type'] == undefined)
	{
		upgrade_info['upgrade_type'] = 'main';
	}
	if(upgrade_info['amount'] == undefined)
	{
		upgrade_info['amount'] = 0.10;
	}
	if(upgrade_info['upgrade_type'] == 'main' && upgrade_info['cost'] == undefined)
	{
		upgrade_info['cost'] = {shard: 1};
	}
});

all_upgrades = sortObj(all_upgrades);

function toggle_show_max_upgrades(){
	var toggled = false;
	if(gamedata['show_max_upgrades'] == undefined){gamedata['show_max_upgrades'] = true;}
	if(gamedata['show_max_upgrades'] == true && toggled == false){gamedata['show_max_upgrades'] = false;toggled = true;}
	if(gamedata['show_max_upgrades'] == false && toggled == false){gamedata['show_max_upgrades'] = true;toggled = true;}
	saveToLocalStorage();
}

function show_upgrades(){
	if(gamedata['show_max_upgrades'] == undefined){gamedata['show_max_upgrades'] = true;}
	if(gamedata['show_max_upgrades'] == true){$('.show_max_upgrades_button').css('color','rgba(255,255,255,1)');}
	if(gamedata['show_max_upgrades'] == false){$('.show_max_upgrades_button').css('color','rgba(255,255,255,0.2)');}
	if(gamedata['upgrades'] == undefined){
		gamedata['upgrades'] = {};
		saveToLocalStorage();
	}

	all_upgrades = sortObj(all_upgrades);
	gamedata['upgrades'] = sortObj(gamedata['upgrades']);

	var parsed_upgrade_buttons = '';
	//parsed_upgrade_buttons += '<div class="upgrades_description">Upgrades are effective during endless waves battles.</div>'
	$.each(all_upgrades, function(upgrade_id, upgrade_info){
		var can_show = true;

		$.each(upgrade_info['needed_upgrades'], function(needed_id, needed_level){
			if(gamedata['upgrades'][needed_id] == undefined || gamedata['upgrades'][needed_id] < needed_level)
			{
				can_show = false;
			}
		});
		if(upgrade_info['hide_if_maxed'] != undefined && upgrade_info['hide_if_maxed'] == true && gamedata['upgrades'][upgrade_id] != undefined && gamedata['upgrades'][upgrade_id] >= upgrade_info['max_level'])
		{
			can_show = false;
		}
		if(gamedata['show_max_upgrades'] == false && gamedata['upgrades'][upgrade_id] != undefined && gamedata['upgrades'][upgrade_id] >= upgrade_info['max_level'])
		{
			can_show = false;
		}
		/*$.each(upgrade_info['cost'], function(cost_id, cost_amount){
			if(all_available_cards[cost_id] != undefined && gamedata['owned_cards'][cost_id] == undefined && cost_id != 'shard')
			{
				can_show = false;
			}
		});*/
		if(upgrade_info['upgrade_type'] != 'main'){can_show = false;}
		if(can_show == true)
		{

			var parsed_upgrade_button = parse_upgrade_button(upgrade_id);
			parsed_upgrade_buttons += parsed_upgrade_button;
		}
	});

	$('.upgrades_container').html(parsed_upgrade_buttons);
}

function parse_upgrade_button(upgrade_id){
	var parsed_upgrade_button = '';
	if(all_upgrades[upgrade_id] != undefined)
	{
		var upgrade_info = all_upgrades[upgrade_id];
		var effective_level = 0;
		if(gamedata['upgrades'][upgrade_id] != undefined){effective_level = gamedata['upgrades'][upgrade_id];}
		var can_upgrade = 100;
		if(upgrade_info['max_level'] == undefined || upgrade_info['max_level'] > effective_level)
		{
			can_upgrade = check_can_upgrade_upgrade(upgrade_id, true);
		}
		var upgrade_availabe = '';
		if(can_upgrade < 100)
		{
			upgrade_availabe = 'hero_unavailable';
		}
		parsed_upgrade_button += '<div class="menu_button third single_area ' + upgrade_availabe + '" onclick="current_upgrade=\'' + upgrade_id + '\';set_upgrades_back_button(\'upgrades\')" data-target-content="single_upgrade">';
		parsed_upgrade_button += 	'<div class="bg" style="background-image:url(images/' + upgrade_info['image'] + ')"></div>';
		parsed_upgrade_button += 	'<span>' + capitalizeFirstLetter(upgrade_info['name']) + '</span>';
		if(upgrade_info['max_level'] == undefined || upgrade_info['max_level'] > effective_level)
		{
			if(upgrade_info['max_level'] == undefined)
			{
				parsed_upgrade_button += '<span class="max_level">' + effective_level + '</span>';
			}
			else
			{
				parsed_upgrade_button += '<span class="max_level">' + effective_level + '/' + upgrade_info['max_level'] + '</span>';
			}
			
			parsed_upgrade_button += '<div class="upgrade_percent" style="width:' + (100 - can_upgrade) + '%"></div>';
		}
		else
		{
			parsed_upgrade_button += '<span class="max_level">MAX</span>';
			parsed_upgrade_button += '<div class="upgrade_percent" style="width:100%"></div>';
		}
		parsed_upgrade_button += '</div>';
	}
	return parsed_upgrade_button;
};

function parse_potion_button(upgrade_id, potion_known){
	var parsed_upgrade_button = '';
	if(all_upgrades[upgrade_id] != undefined && (potion_known == undefined || potion_known == true))
	{
		var can_upgrade = check_can_upgrade_upgrade(upgrade_id);
		var upgrade_info = all_upgrades[upgrade_id];
		var upgrade_availabe = '';
		if(can_upgrade == false)
		{
			upgrade_availabe = 'hero_unavailable';
		}
		parsed_upgrade_button += '<div class="potion_button ' + upgrade_availabe + '" onclick="current_upgrade=\'' + upgrade_id + '\';set_upgrades_back_button(\'single_building\');show_content(\'single_upgrade\')">';
		parsed_upgrade_button += 	'<div class="bg potion_content" style="background-image:url(images/' + upgrade_info['image'] + ')"></div>';
		parsed_upgrade_button += 	'<div class="bg potion_overlay" style="background-image:url(images/mason-jar.svg)"></div>';
		//parsed_upgrade_button += 	'<span>' + capitalizeFirstLetter(upgrade_info['name']) + '</span>';
		if(gamedata['upgrades'][upgrade_id] != undefined)
		{
			parsed_upgrade_button += '<span class="max_level">' + gamedata['upgrades'][upgrade_id] + '</span>';
		}
		parsed_upgrade_button += '</div>';
	}
	else
	{
		parsed_upgrade_button += '<div class="potion_button hero_unavailable">';
		parsed_upgrade_button += 	'<div class="bg potion_overlay" style="background-image:url(images/mason-jar.svg)"></div>';
		parsed_upgrade_button += '<span class="max_level">?</span>';
		parsed_upgrade_button += '</div>';
	}
	return parsed_upgrade_button;
};

function set_upgrades_back_button(target){
	$('.upgrades_back_button').attr('data-target-content',target);
}

function check_can_upgrade_upgrade(upgrade_id, return_cost_percent){
	var upgrade_info = all_upgrades[upgrade_id];
	var can_upgrade = true;
	var total_cost = 0;
	var have_cost = 0;
	$.each(upgrade_info['cost'], function(cost_id, cost_amount){
		var actual_cost = cost_amount;
		if(gamedata['upgrades'][upgrade_id] != undefined)
		{
			actual_cost = calculate_upgrade_upgrade_cost(gamedata['upgrades'][upgrade_id], actual_cost, upgrade_info);
		}
		var cost_value = 1;
		if(all_available_cards[cost_id] != undefined)
		{
			cost_value = all_available_cards[cost_id]['value'];
		}
		total_cost += cost_value * actual_cost;
	});

	$.each(upgrade_info['cost'], function(cost_id, cost_amount){
		var owned_amount = 0;
		var actual_cost = cost_amount;
		if(gamedata['upgrades'][upgrade_id] != undefined)
		{
			actual_cost = calculate_upgrade_upgrade_cost(gamedata['upgrades'][upgrade_id], actual_cost, upgrade_info);
		}
		if(gamedata['owned_cards'][cost_id] != undefined && gamedata['owned_cards'][cost_id] > 0){owned_amount = gamedata['owned_cards'][cost_id];}
		if(cost_id == 'scraps'){owned_amount = gamedata['scraps'];}
		var cost_value = 1;
		if(all_available_cards[cost_id] != undefined)
		{
			cost_value = all_available_cards[cost_id]['value'];
		}
		if(owned_amount < actual_cost)
		{
			can_upgrade = false;
			have_cost += owned_amount * cost_value;
		}
		else
		{
			have_cost += cost_value * actual_cost;
		}
	});
	if(return_cost_percent != undefined && return_cost_percent == true)
	{
		return (have_cost / total_cost) * 100;
	}
	return can_upgrade;
}

function show_single_upgrade(){
	if(all_upgrades[current_upgrade] != undefined)
	{
		var upgrade_info = all_upgrades[current_upgrade];
		var parsed_upgrade = '';
		var can_upgrade = true;
		if(upgrade_info['cost'] == undefined){can_upgrade = false;}
		var effective_level = 0;
		if(gamedata['upgrades'][current_upgrade] != undefined){effective_level = gamedata['upgrades'][current_upgrade];}
		parsed_upgrade += capitalizeFirstLetter(upgrade_info['name']) + '<br/>';
		parsed_upgrade += 'level ' + effective_level + '<br/>';
		/*if(upgrade_info['amount_fixed'] == undefined || upgrade_info['amount_fixed'] == false)
		{
			if(effective_level > 0)
			{
				var total_factor = get_upgrade_effect(effective_level, upgrade_info['amount']);
				parsed_upgrade += 'Effect: +' + (Math.round((total_factor - 1) * 10000) / 100) + '% ' + upgrade_info['description'] + '<br/>';
			}
			else
			{
				parsed_upgrade += 'Effect: +0% ' + upgrade_info['description'] + '<br/>';
			}
		}
		else
		{
			var total_factor = get_upgrade_effect(effective_level, upgrade_info['amount']);
			parsed_upgrade += 'Effect: +' + (Math.round((total_factor - 1) * 100) / 100) + ' ' + upgrade_info['description'] + '<br/>';
		}*/
		parsed_upgrade += 'Effect: ' + upgrade_info['description'] + '<br/><br/>';
		if(upgrade_info['max_level'] == undefined || upgrade_info['max_level'] > effective_level)
		{
			$.each(upgrade_info['cost'], function(cost_id, cost_amount){
				var owned_amount = 0;
				var actual_cost = cost_amount;
				if(gamedata['upgrades'][current_upgrade] != undefined)
				{
					actual_cost = calculate_upgrade_upgrade_cost(gamedata['upgrades'][current_upgrade], actual_cost, upgrade_info);
				}
				else
				{
					actual_cost = Math.ceil(actual_cost);
				}
				if(gamedata['owned_cards'][cost_id] != undefined && gamedata['owned_cards'][cost_id] > 0){owned_amount = gamedata['owned_cards'][cost_id];}
				if(cost_id == 'scraps'){owned_amount = gamedata['scraps'];}
				var cost_name = 'Scraps';
				if(all_available_cards[cost_id] != undefined){cost_name = capitalizeFirstLetter(all_available_cards[cost_id]['name']);}
				if(owned_amount < actual_cost)
				{
					can_upgrade = false;
					parsed_upgrade += cost_name + ': <span style="color:red">' + nFormatter(owned_amount,3) + ' / ' + nFormatter(actual_cost,3) + '<br/></span>';
				}
				else
				{
					parsed_upgrade += cost_name + ': <span>' + nFormatter(owned_amount,3) + ' / ' + nFormatter(actual_cost,3) + '<br/></span>';
				}
			});
			if(can_upgrade == true)
			{
				parsed_upgrade += 	'<br/><div class="production_upgrade_button" onclick="upgrade_current_upgrade()">UPGRADE</div>';
			}
		}
		else
		{
			parsed_upgrade += '<span style="color:green">Maxed</span>';
		}
		$('.single_upgrade_container').html(parsed_upgrade);
	}
	else
	{
		show_content('upgrades');
	}
}

function get_upgrade_effect(level, amount){
	var total_factor = 1 + ((Math.sqrt(level / 10) * 10) * amount);
	var total_factor = 1 + (level * amount);
	return total_factor;
}

function upgrade_current_upgrade(){
	if(all_upgrades[current_upgrade] != undefined)
	{
		var upgrade_info = all_upgrades[current_upgrade];
		var can_upgrade = true;
		$.each(upgrade_info['cost'], function(cost_id, cost_amount){
			var owned_amount = 0;
			var actual_cost = cost_amount + 0;
			if(gamedata['upgrades'][current_upgrade] != undefined)
			{
				actual_cost = calculate_upgrade_upgrade_cost(gamedata['upgrades'][current_upgrade], actual_cost, upgrade_info);
			}
			else
			{
				actual_cost = Math.ceil(actual_cost);
			}
			if(gamedata['owned_cards'][cost_id] != undefined && gamedata['owned_cards'][cost_id] > 0){owned_amount = gamedata['owned_cards'][cost_id];}
			if(cost_id == 'scraps'){owned_amount = gamedata['scraps'];}
			if(owned_amount < actual_cost)
			{
				can_upgrade = false;
			}
		});
		if(can_upgrade == true)
		{
			$.each(upgrade_info['cost'], function(cost_id, cost_amount){
				var owned_amount = 0;
				var actual_cost = cost_amount + 0;
				if(gamedata['upgrades'][current_upgrade] != undefined)
				{
					actual_cost = calculate_upgrade_upgrade_cost(gamedata['upgrades'][current_upgrade], actual_cost, upgrade_info);
				}
				else
				{
					actual_cost = Math.ceil(actual_cost);
				}
				if(gamedata['owned_cards'][cost_id] != undefined && gamedata['owned_cards'][cost_id] > 0)
				{
					gamedata['owned_cards'][cost_id] -= actual_cost;
				}
				if(cost_id == 'scraps')
				{
					gamedata['scraps'] -= actual_cost;
				}
			});
			if(gamedata['upgrades'][current_upgrade] == undefined){gamedata['upgrades'][current_upgrade] = 0;}
			gamedata['upgrades'][current_upgrade] += 1;
			saveToLocalStorage();
		}
	}
	show_content('single_upgrade');
}

var upgrade_scales = {
	// higher is slower
	main: 		3,
	passive: 	5,
	potion: 	10,
}

function calculate_upgrade_upgrade_cost(level, cost, upgrade_info){
	var upgrade_type = upgrade_info['upgrade_type'];
	var scale = 5;
	if(upgrade_type != undefined && upgrade_scales[upgrade_type] != undefined)
	{
		scale = upgrade_scales[upgrade_type];
	}
	if(upgrade_info['level_cost_scale'] != undefined)
	{
		scale = upgrade_info['level_cost_scale'];
		return Math.ceil(cost * (1 + sqr(level / scale)));
	}
	if(upgrade_info['level_cost_type'] != undefined && upgrade_info['level_cost_type'] == 'next_level')
	{
		return cost * (level + 1);
	}
	else
	{
		return cost;
	}
	return Math.ceil(cost * (1 + sqr(level / scale)));
}

function get_upgrade_factor(type, subtypes, forced){
	if(gamedata['upgrades'] == undefined){
		gamedata['upgrades'] = {};
		saveToLocalStorage();
	}
	var total_upgrade_factor = 1;
	/*$.each(gamedata['upgrades'], function(upgrade_id, upgrade_level){
		if(all_upgrades[upgrade_id] != undefined)
		{
			var upgrade_info = all_upgrades[upgrade_id];
			if(upgrade_info['type'] == type && match_array_values(upgrade_info['subtypes'], subtypes))
			{
				$.each(subtypes, function(useless_key, single_subtype){
					if(match_array_values(upgrade_info['subtypes'], single_subtype))
					{
						var single_factor = get_upgrade_effect(upgrade_level, upgrade_info['amount']);
						total_upgrade_factor *= single_factor;
					}
				});
			}
		}
	});*/
	if((endless_waves != undefined && endless_waves == true) || current_battle_type == 'summoned' || (forced != undefined && forced == true))
	{
		$.each(all_upgrades, function(upgrade_id, upgrade_info){
			if(gamedata['upgrades'][upgrade_id] != undefined)
			{
				
				var upgrade_level = gamedata['upgrades'][upgrade_id];
				if(upgrade_info['type'] == type && (match_array_values(upgrade_info['subtypes'], subtypes) || match_array_values(upgrade_info['subtypes'], 'any')))
				{
					/*$.each(subtypes, function(useless_key, single_subtype){
						console.log(single_subtype);
						if(match_array_values(upgrade_info['subtypes'], single_subtype) || match_array_values('any', single_subtype))
						{*/
							if(upgrade_info['amount_fixed'] == undefined || upgrade_info['amount_fixed'] == false)
							{
								var single_factor = get_upgrade_effect(upgrade_level, upgrade_info['amount']);
								total_upgrade_factor *= single_factor;
							}
							else
							{
								total_upgrade_factor += upgrade_level * upgrade_info['amount'];
							}
						/*}
					});*/
				}
			}
			else
			{
				if(upgrade_info['upgrade_type'] == 'passive')
				{
					if(upgrade_info['type'] == type && (match_array_values(upgrade_info['subtypes'], subtypes) || match_array_values(upgrade_info['subtypes'], 'any')))
					{
						var effective_bonus_amount = false;
						$.each(upgrade_info['cost'], function(cost_id, cost_amount){
							var owned_amount = 0;
							var actual_cost = cost_amount;
							if(gamedata['owned_cards'][cost_id] != undefined && gamedata['owned_cards'][cost_id] > 0){owned_amount = gamedata['owned_cards'][cost_id];}
							if(cost_id == 'scraps'){owned_amount = gamedata['scraps'];}
							var max_bonus = Math.floor(owned_amount / actual_cost);
							if(effective_bonus_amount === false || max_bonus < effective_bonus_amount)
							{
								effective_bonus_amount = max_bonus;
							}
						});
						var effective_bonus = 1 + (effective_bonus_amount * upgrade_info['amount']);
						total_upgrade_factor *= effective_bonus;
					}
				}
			}
		});
	}
	return total_upgrade_factor;
}

function get_random_upgrade(upgrade_type){
	var possible_upgrades = {};
	$.each(all_upgrades, function(upgrade_id, upgrade_info){
		if(upgrade_info['upgrade_type'] == upgrade_type)
		{
			possible_upgrades[upgrade_id] = true;
		}
	});

	return get_random_key_from_object(possible_upgrades);
}