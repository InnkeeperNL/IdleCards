var current_inventory_page = 1;

function show_inventory(){
	$('.inventory_container').html('');
	if(gamedata['inventory'] == undefined){gamedata['inventory'] = {};}
	if(current_inventory_page < 1){current_inventory_page = 1;}

	gamedata['inventory'] = sortObj(gamedata['inventory']);

	var max_locks = get_max_locks();
	if(max_locks > 0)
	{
		$('.locks_container').html('Locks: ' + (max_locks - count_object(gamedata['locked_items'])) + ' / ' + max_locks);
	}
	else
	{
		$('.locks_container').html('');
	}

	$.each(gamedata['inventory_filters'], function(filter_id, filter_value){
		if(filter_value == false)
		{
			$('.inventory_filters_container ' + '.' + filter_id + '_button').addClass('danger');
		}
		else
		{
			$('.inventory_filters_container ' + '.' + filter_id + '_button').removeClass('danger');
		}
	});

	var inventory_window_width = $('.inventory_container').width();
	var inventory_window_height = $('.inventory_container').height();

	/*var item_width = inventory_window_width * 0.25;
	if(inventory_window_width * 0.23 < 85)
	{
		item_width = 85 + (inventory_window_width * 0.02);
	}
	if(inventory_window_width * 0.23 > 100)
	{
		item_width = 100 + (inventory_window_width * 0.02);
	}*/

	var item_width = 105;

	/*var inventory_h = 4;
	if(inventory_window_width > 555)
	{
		inventory_h = Math.floor(inventory_window_width / item_width);
	}
	if(inventory_window_width > 780)
	{
		inventory_h = Math.floor(inventory_window_width / 105);
	}*/

	var inventory_h = Math.floor(inventory_window_width / item_width);

	var inventory_v = Math.floor(inventory_window_height / 108);

	var visible_inventory = inventory_h * inventory_v;
	if(visible_inventory < 1){visible_inventory = 1;}
	var inventory_shown = 0;
	if(gamedata['inventory'] != undefined)
	{
		//gamedata['inventory'] = sortObj(gamedata['inventory']);

		$.each(available_items, function(item_id, item_info){
			var can_show_item = true;
			if(gamedata['inventory_filters']['producable'] != undefined && gamedata['inventory_filters']['producable'] == false && item_info['in_recipe'] != undefined)
			{
				can_show_item = false;
			}
			if(gamedata['inventory_filters']['have_0'] != undefined && gamedata['inventory_filters']['have_0'] == false && gamedata['inventory'][item_id] < 1)
			{
				can_show_item = false;
			}
			if(gamedata['inventory_filters']['locked'] != undefined && gamedata['inventory_filters']['locked'] == false && gamedata['locked_items'][item_id] != undefined)
			{
				can_show_item = false;
			}
			if(gamedata['inventory_filters']['sellable'] != undefined && gamedata['inventory_filters']['sellable'] == false && item_info['in_recipe'] == undefined)
			{
				can_show_item = false;
			}
			
			
			if(can_show_item == true && (gamedata['inventory'][item_id] > 0 || gamedata['locked_items'][item_id] != undefined || gamedata['produced'][item_id] != undefined))
			{
				inventory_shown++;
				if(inventory_shown > visible_inventory * (current_inventory_page -1) && inventory_shown <= visible_inventory * (current_inventory_page))
				{
					var this_locked = undefined;
					if(gamedata['locked_items'][item_id] != undefined){this_locked = 'locked';}
					var parsed_item = parse_item(item_id,undefined,undefined,this_locked);
					$('.inventory_container').append('<span onclick="toggle_locked_item(\'' + item_id + '\')">' + parsed_item + '</span>');
				}
			}
		});
	}
	else
	{
		$('.inventory_container').html('<div class="no_workers_text">Get items first</div>');
	}

	var max_inventory_page = Math.ceil(inventory_shown / visible_inventory);
	if(max_inventory_page < 1)
	{
		max_inventory_page = 1;
	}

	if(inventory_shown > visible_inventory * current_inventory_page)
	{
		$('.page_further').html('>');
	}
	else
	{
		$('.page_further').html('');
	}

	if(current_inventory_page == 1)
	{
		$('.page_back').html('');
	}
	else
	{
		$('.page_back').html('<');
	}

	$('.page_number').html(current_inventory_page + ' / ' + max_inventory_page);

	if(current_inventory_page > max_inventory_page && current_inventory_page != 1){
		current_inventory_page  = max_inventory_page;
		show_inventory();
	}
}

function toggle_filter(filter_id){
	if(gamedata['inventory_filters'][filter_id] == undefined || gamedata['inventory_filters'][filter_id] == true)
	{
		gamedata['inventory_filters'][filter_id] = false;
	}
	else
	{
		gamedata['inventory_filters'][filter_id] = true;
	}
	show_inventory();
}

function toggle_locked_item(item_id){
	if(gamedata['locked_items'][item_id] == undefined && count_object(gamedata['locked_items']) < get_max_locks())
	{
		gamedata['locked_items'][item_id] = true;
	}
	else
	{
		delete gamedata['locked_items'][item_id];
	}
	saveToLocalStorage();
	show_inventory();
}

function get_max_locks(){
	return Math.floor(count_object(gamedata['produced']) /4);
}

function adjust_inventory_page(amount){
	current_inventory_page += amount;
	if(current_inventory_page < 1)
	{
		current_inventory_page = 1;
	}
	show_inventory();
}