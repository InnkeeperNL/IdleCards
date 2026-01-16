function get_max_energy(){
	var max_energy = max_energy_base;
	max_energy = Math.ceil(get_building_bonus('max_energy', max_energy));
	return max_energy;
}

function gain_energy(amount){
	var gained_amount = (amount);
	var max_energy = get_max_energy();
	if(gamedata['energy'] == undefined){gamedata['energy'] = 0;}
	gamedata['energy'] += gained_amount;
	if(gamedata['energy'] > max_energy)
	{
		gamedata['energy'] = max_energy;
	}
	update_energy();
}

function update_energy(){
	var max_energy = get_max_energy();
	class_html('current_energy',  Math.floor(gamedata['energy']));
	class_html('max_energy', Math.floor(max_energy));
	var energy_percent = (gamedata['energy'] / max_energy) * 100;
	class_style('energy_bar','width',energy_percent + '%');
}

function check_energy_gain(){
	if(gamedata['last_energy_tick'] == undefined){gamedata['last_energy_tick'] = nowint();}
	var seconds_passed = Math.floor((nowint() - gamedata['last_energy_tick']) / 1000);
	var energy_per_tick = get_building_bonus('energy_per_tick',energy_per_tick_base);
	gain_energy(seconds_passed * energy_per_tick);
	gamedata['last_energy_tick'] += seconds_passed * 1000;
}

function calc_energy_per_value(value){
	return Math.ceil(/*Math.sqrt*/(energy_per_value * value));
}

function get_max_expeditions(){
	var max_expeditions = max_expeditions_base;
	max_expeditions = Math.ceil(get_building_bonus('max_expeditions', max_expeditions));
	return max_expeditions;
}

function gain_expeditions(amount){
	var gained_amount = (amount);
	var max_expeditions = get_max_expeditions();
	if(gamedata['expeditions'] == undefined){gamedata['expeditions'] = max_expeditions;}
	gamedata['expeditions'] += gained_amount;
	if(gamedata['expeditions'] > max_expeditions)
	{
		gamedata['expeditions'] = max_expeditions;
	}
	update_expeditions();
}

function update_expeditions(){
	var max_expeditions = get_max_expeditions();
	if(gamedata['expeditions'] == undefined){gamedata['expeditions'] = max_expeditions;}
	class_html('current_expeditions',  Math.floor(gamedata['expeditions']));
	class_html('max_expeditions', Math.floor(max_expeditions));
	var expeditions_percent = (gamedata['expeditions'] / max_expeditions) * 100;
	class_style('expeditions_bar','width',expeditions_percent + '%');
}

function check_expeditions_gain(){
	if(gamedata['last_expeditions_tick'] == undefined){gamedata['last_expeditions_tick'] = nowint();}
	var seconds_passed = Math.floor((nowint() - gamedata['last_expeditions_tick']) / 1000);
	var expeditions_per_tick = get_building_bonus('expeditions_per_tick',expeditions_per_tick_base);
	gain_expeditions(seconds_passed * expeditions_per_tick);
	gamedata['last_expeditions_tick'] += seconds_passed * 1000;
}

