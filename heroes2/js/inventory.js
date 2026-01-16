var current_inventory_page = 1;

var inventory_filters = {
	regular: 		true,
	consumable: 	false,
	unit: 			false,
	gear: 			false,
	/*recipe: 		true,*/
	is_ability: 	false,
};

function show_inventory_filters(){
	var parsed_filters = '';
	$.each(inventory_filters, function(filter_id, filter_value){
		var disabled = '';
		if(filter_value == false){disabled = 'danger';}
		parsed_filters += '<div class="square_button filter_button_' + filter_id + ' ' + disabled + '" onclick="toggle_filter(\'' + filter_id + '\')"></div>';
	});
	$('.inventory_filters_container').html(parsed_filters);
}

function toggle_filter(filter_id){
	if(inventory_filters[filter_id] != undefined)
	{
		$.each(inventory_filters, function(temp_filter_id, filter_setting){
			if(temp_filter_id == filter_id)
			{
				inventory_filters[temp_filter_id] = true;
			}
			else
			{
				inventory_filters[temp_filter_id] = false;
			}
		});
		/*if(inventory_filters[filter_id] == false)
		{
			inventory_filters[filter_id] = true;
		}
		else
		{
			inventory_filters[filter_id] = false;
		}*/
	}
	show_inventory();
}

function show_inventory(){
	$('.inventory_container').html('');
	show_inventory_filters();
	if(gamedata['inventory'] == undefined){gamedata['inventory'] = {};}
	if(current_inventory_page < 1){current_inventory_page = 1;}

	gamedata['inventory'] = sortObj(gamedata['inventory']);

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

		$.each(all_items, function(item_id, item_info){
			var can_show_item = true;
			/*if(gamedata['inventory'][item_id] < 1 && item_info['recipe'] != undefined)
			{
				can_show_item = false;
			}
			if(gamedata['inventory'][item_id] < 1 && item_info['type'] != undefined && item_info['type'] == 'quest')
			{
				can_show_item = false;
			}*/
			if(gamedata['inventory'][item_id] == undefined || (gamedata['inventory'][item_id] < 1 && item_info['unit'] == undefined && item_info['gear'] == undefined))
			{
				can_show_item = false;
			}

			var filter_type_matched = false;
			$.each(inventory_filters, function(filter_id, filter_value){
				if(filter_id != 'regular' && item_info[filter_id] != undefined)
				{
					filter_type_matched = true;
					if(filter_value == false)
					{
						can_show_item = false;
					}
				}
			});
			if(filter_type_matched == false && inventory_filters['regular'] == false)
			{
				can_show_item = false;
			}

			if(gamedata['inventory'][item_id] < 100 && item_info['recipe'] != undefined)
			{
				can_show_item = false;
			}
			
			if(can_show_item == true && gamedata['inventory'][item_id] > 0)
			{
				inventory_shown++;
				if(inventory_shown > visible_inventory * (current_inventory_page -1) && inventory_shown <= visible_inventory * (current_inventory_page))
				{
					var this_locked = undefined;
					var parsed_item = parse_item(item_id,undefined,undefined,this_locked);
					$('.inventory_container').append('<span onclick="view_item(\'' + item_id + '\')">' + parsed_item + '</span>');
				}
			}
		});
	}
	else
	{
		$('.inventory_container').html('<div class="no_inventory_text">Get items first</div>');
	}

	var max_inventory_page = Math.ceil(inventory_shown / visible_inventory);

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

function adjust_inventory_page(amount){
	current_inventory_page += amount;
	if(current_inventory_page < 1)
	{
		current_inventory_page = 1;
	}
	show_inventory();
}

var viewing_item = '';
function view_item(item_id){
	viewing_item = item_id;
	show_content('item_details');
}