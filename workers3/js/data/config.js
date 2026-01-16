var test_mode = true;

var all_upgrades = {
	/*power: 		true,
	speed: 		true,*/
	endurance: 	true,
}

var level_cost = 			1;
var level_cost_increase_factor =  	0.2;
var level_cost_increase_fixed  =	2;
var base_next_customer =	20;
var customer_time_per_value = 2; // higher is less time
var base_next_worker = 		25;
var worker_cost_factor = 	4;
var next_customer = 		0;
var seconds_per_value = 	3;
var worker_power_effect = 	100;
var worker_speed_effect = 	50; // higher is less effect
var loot_bonus_effect = 	.05;
var declines_gained_per_sale = 	1;
var min_declines = 				10;
var suggest_cost = 				10;
var base_location_upgrade_cost = 	20;
var location_cost_factor =			4;

var power_based_on = 'endurance';
var speed_based_on = 'endurance';