var all_customers = {
	
	
}

$.each(available_workers, function(worker_id, worker_info){
	if(all_customers[worker_id] == undefined)
	{
		all_customers[worker_id] = {
			name: 			worker_info['name'],
			image: 			worker_info['image'],
			buys:{},
			sells:{},
			buys_types: 	worker_info['buys_types'],			
		}
	}
	if(available_workers[worker_id]['action_subtypes'] == undefined)
	{
		available_workers[worker_id]['action_subtypes'] = {all:true};
	}
	$.each(worker_info['actions'], function(action_id, action_info){
		$.each(available_actions[action_id]['subtypes'], function(subtype_key, subtype){
			var subtype_id = subtype.replaceAll(' ', '_');
			available_workers[worker_id]['action_subtypes'][subtype_id] = true;
		});
	});
	available_workers[worker_id]['action_subtypes'] = sortObj(available_workers[worker_id]['action_subtypes']);
});

$.each(all_customers, function(customer_id, customer_info){

	if(all_customers[customer_id]['needs_locations'] == undefined)
	{
		all_customers[customer_id]['needs_locations'] = {};
	}

	$.each(all_customers[customer_id]['needs_locations'], function(location_id, location_level){
		if(available_locations[location_id] != undefined)
		{
			if(available_locations[location_id]['unlock_customers'] == undefined){available_locations[location_id]['unlock_customers'] = {};}
			available_locations[location_id]['unlock_customers'][customer_id] = location_level;
		}
	});

	$.each(all_customers[customer_id]['sells'], function(cost_id, item_amount){
		var selling_amount = Math.ceil(100 / Math.sqrt(available_items[cost_id]['value']));
		all_customers[customer_id]['sells'][cost_id] = selling_amount;
	});

	$.each(available_items, function(item_id, item_info){
		if(match_array_values(customer_info['buys_types'], item_info['types']))
		{
			all_customers[customer_id]['buys'][item_id] = Math.ceil(10 / item_info['value']);
		}
	});
	if(available_workers[customer_id] != undefined)
	{
		$.each(available_workers[customer_id]['training_cost'], function(cost_id, cost_amount){
			if(all_customers[customer_id]['buys'][cost_id] == undefined)
			{
				all_customers[customer_id]['buys'][cost_id] = Math.ceil(10 / available_items[cost_id]['value']);
			}
		});
		$.each(available_workers[customer_id]['actions'], function(action_id, useless_1){
			$.each(available_actions[action_id]['cost'], function(cost_id, cost_amount){
				if(all_customers[customer_id]['buys'][cost_id] == undefined)
				{
					all_customers[customer_id]['buys'][cost_id] = Math.ceil(10 / available_items[cost_id]['value']);
				}
			});
		});
		$.each(available_workers[customer_id]['actions'], function(action_id, useless_1){
			$.each(available_actions[action_id]['loot'], function(cost_id, cost_amount){
				if(all_customers[customer_id]['buys'][cost_id] == undefined && all_customers[customer_id]['sells'][cost_id] == undefined)
				{
					var selling_amount = Math.ceil(100 / Math.sqrt(available_items[cost_id]['value']));
					all_customers[customer_id]['sells'][cost_id] = selling_amount;
				}
			});
			$.each(available_actions[action_id]['bonus_loot'], function(bonus_loot_id, bonus_loot_info){
				$.each(bonus_loot_info['loot'], function(cost_id, cost_amount){
					if(all_customers[customer_id]['buys'][cost_id] == undefined && all_customers[customer_id]['sells'][cost_id] == undefined)
					{
						var selling_amount = Math.ceil(100 / Math.sqrt(available_items[cost_id]['value']));
						all_customers[customer_id]['sells'][cost_id] = selling_amount;
					}
				});
			});
		});
		if(available_workers[customer_id]['needs_locations'] != undefined && count_object(all_customers[customer_id]['needs_locations']) == 0)
		{
			$.each(available_workers[customer_id]['needs_locations'], function(location_id, location_level){
				if(available_locations[location_id] != undefined)
				{
					if(available_locations[location_id]['unlock_workers'] == undefined){available_locations[location_id]['unlock_workers'] = {};}
					available_locations[location_id]['unlock_workers'][customer_id] = location_level;
				}
			});
			all_customers[customer_id]['needs_locations'] = true_copyobject(available_workers[customer_id]['needs_locations']);
		}
	}



	var total_value = 0;
	var total_buying = 0;
	$.each(customer_info['sells'], function(item_id, item_amount){
		total_value += available_items[item_id]['value'] * item_amount;
		total_buying ++;
	});
	all_customers[customer_id]['average_sale'] = total_value / total_buying;
});

$.each(available_items, function(item_id, item_info){
		var being_bought = false;
		$.each(all_customers, function(customer_id, customer_info){
			if(customer_info['buys'][item_id] != undefined)
			{
				being_bought = true;
			}
		});
		if(being_bought == false)
		{
			console.log('nobody buys ' + item_id);
		}
	});