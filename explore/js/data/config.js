var gamedata = {};
var gamename = "explore";
var test_mode = true;
var homepage = 'town';
var inventory_base_size = 10;
var max_storage_base = 10;

var max_energy_base = 10;
var energy_per_tick_base = 0.1;

var max_expeditions_base = 5;
var expeditions_per_tick_base = 1 / 60;


// ITEMS
var energy_per_value 		= 1;
var effects_per_value 		= {
	max_energy: 	0.25,
	max_inventory: 	0.25,

	max_storage: 	0.25,

	farming: 		2,
	gathering: 		2,
	hunting: 		2,
	mining: 		2,
	woodcutting: 	2,
}

// ACTIONS
var value_per_energy 		= 1.5;

// BUILDINGS
var building_cost_factor = 1;
