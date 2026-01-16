var base_level_cost = 100;
var level_xp_cost_factor = 4;

var time_tick = 100;
var time_tick_reduction = time_tick / 1000;
var player_time_tick_reduction = time_tick / 1000;

var mana_regen_factor = 0.25;

var master_volume = 0;

var minimum_enemy_level = 0.5;
var bonus_per_level = 0.35;


function get_level_factor(level){

	var level_factor = 1;

	if(level > 1)
	{
		level_factor = 1 + ((level - 1) * bonus_per_level);
	}

	return level_factor;
}