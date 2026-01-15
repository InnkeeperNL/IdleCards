
var test_mode = true;

var global_speed_factor = 1;

// SHOP
var base_counter_cost = 			500; 	// cost of first extra counter
var base_sell_speed = 				1 / global_speed_factor;		// speed of sales -- speed 1 = 1s per value. Higher is slower
var base_sell_value_speed_factor =	2;		// effect of value on sale speed. Higher is slower
var trade_speed_upgrade_effect = 	1.75; 	// effect of upgrading trade speed. Higher is more effect
var trade_speed_per_prestige = 		2; 		// effect of prestige on trade speed

// LOCATIONS
var unlock_location_threshold = 	10000; 	// first new location unlocked at this * 10

// ACTIONS
var active_work_effect = 			25; 	// level of player
var prestige_work_level_bonus = 	0.5; 		// effect of prestige on work level
var base_upgrade_cost = 			2;		// cost of first upgrade in coins
var upgrade_cost_increase =			2.5; 		// cost increase per level
var upgrade_multi_per = 			10; 			// increase upgrade cost by level / X
var base_action_speed = 			10 / global_speed_factor; 		// speed of actions. Seconds to produce 1 recource.
var base_crafting_speed = 			1; 		// speed of crafting. Seconds to produce 1 recource.
var base_skill_bonus = 				-1; 		// bonus production for all actions
var passive_level_effect = 			1; 		// effect of upgrading actions. -- 1 = base level. Higher is less effect

var global_crafting_factor = 			100 / global_speed_factor;	
var global_crafting_factor_correction = 1;

// UNLOCKING ACTIONS
var unlock_action_tier_cost = 500; 							// cost of unlocking -- higher is higher
var tier_factor = 5; 										// increase of unlock cost per tier -- higher is higher

// AP EFFECT
var achievement_min = 1000;
var ap_effect = 25;

// ACTION TIERS
// 0: first unlock
// 1: first production
// 2: first loop (gatherers etc)
// 3: secondary production
// 4: secondary loop
// 5: high production
// 6: high loop