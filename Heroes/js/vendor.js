var vendor_amount = 'single';

$('.vendor_amount').click(function(){
	if(vendor_amount == 'single')
	{
		vendor_amount = 'all';
	}
	else
	{
		vendor_amount = 'single';
	}
	$('.vendor_amount').html(vendor_amount);
});

function show_vendor(){

	if(typeof(gamedata['inventory']['coins']) == 'undefined')
	{
		gamedata['inventory']['coins'] = 0;
	}

	$('.vendor_amount').html(vendor_amount);

	$('.vendor_list').html('');
	$('.owned_coin').html(gamedata['inventory']['coins']);
	$('.vendor_list').append('<h2>Items</h2>');
	$.each(gamedata['inventory'], function(key, amount) {
		if(amount > 0 && key != 'coins'){
			//$('.vendor_list').append('<div class="item ' + available_items[key]['subtype'] + ' quality_' + available_items[key]['quality'] + ' selling_item" onmouseover="show_item_details(\'' + key + '\')" onclick="vendor_this(\'item\',\'' + key + '\')" style="background-image:url(images/items/' + available_items[key]['image'] + ')">' + amount + '</div>');
			$('.vendor_list').append('<div class="item ' + available_items[key]['subtype'] + ' quality_' + available_items[key]['quality'] + ' selling_item" onmouseover="show_item_details(\'' + key + '\')" style="background-image:url(images/items/' + available_items[key]['image'] + ')">' + amount + '</div>');
		}
	});
	$('.vendor_list').append('<h2>Gear</h2>');
	$.each(gamedata['gear'], function(key, gear) {
		if(gear['level'] > 0 && gear['active'] == false){
			$('.vendor_list').append('<div class="item quality_' + available_gear[gear['gear_id']]['quality'] + ' selling_item" onmouseover="show_owned_gear_details(\'' + key + '\')" style="background-image:url(images/gear/' + available_gear[gear['gear_id']]['image'] + ')">' + gear['level'] + '</div>');
		}
	});
};

function vendor_this(type, id){
	var amount = 1;
	if(type == 'item')
	{
		if(gamedata['inventory'][id] > 0)
		{
			if(vendor_amount == 'all')
			{
				amount = gamedata['inventory'][id];
			}
			gamedata['inventory'][id] -= amount;
			gain_item('coins',available_items[id]['value'] * amount);
		}
	}
	if(type == 'gear')
	{
		if(typeof(gamedata['gear'][id]) != 'undefined')
		{
			if(vendor_amount == 'all')
			{
				var total_earned = 0;
				gear_id = gamedata['gear'][id]['gear_id'];
				$.each(gamedata['gear'], function(current_id, gear){
					if(gear['gear_id'] == gear_id && gear['active'] == false)
					{
						total_earned += available_gear[gear_id]['value'];
						delete gamedata['gear'][current_id];
					}
				});
				gain_item('coins',total_earned);
			}
			else
			{
				gain_item('coins',available_gear[gamedata['gear'][id]['gear_id']]['value']);
				delete gamedata['gear'][id];
			}
			
		}
	}
	saveToLocalStorage();
	show_vendor();
}

$('.sell_trash').click(function(){
	var former_vendor_amount = vendor_amount + '';
	vendor_amount = 'all';
	$.each(gamedata['inventory'], function(item_id, amount){
		if(typeof(available_items[item_id]) != 'undefined' && available_items[item_id]['quality'] == 1)
		{
			vendor_this('item', item_id);
		}
	});
	vendor_amount = former_vendor_amount;
	$('.vendor_amount').html(vendor_amount);
})