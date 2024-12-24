var current_merchant_page = 1;
var selling_card_id = '';
var sell_amount = 1;
var selling_price = 1;
var listings_page = 1;
var showing_mine = false;
var buy_sell = 'buy';
var current_lowest_price = 0;
var your_offer = '';
var global_listings = {};
var current_listing_id = false;

function show_merchant(){
	selling_price = 1;
	sell_amount = 1;
	cards_per_page = 12;
	$('#content_merchant .tinkering_list').html('<span class="no_tinker">No cards fit your<br/>current filters.</span>');

	gamedata['owned_cards'] = sortObj(gamedata['owned_cards']);
	$('#content_merchant .tinkering_list').html('');
	var current_card_number = 0;

	$.each(gamedata['owned_cards'], function(card_id, owned_amount){
		var effective_owned_amount = owned_amount + 0;
		
		if((effective_owned_amount > 0 || buy_sell == 'buy') && check_filters(card_id) == false && all_available_cards[card_id]['non_tradable'] == undefined)
		{
			current_card_number ++;
			if(current_card_number / cards_per_page > current_merchant_page -1 && current_card_number / cards_per_page <= current_merchant_page)
			{
				var parsed_card = parse_card(card_id, effective_owned_amount);
				$('#content_merchant .tinkering_list').append('<div onclick="current_lowest_price=0;selling_price=' + all_available_cards[card_id]['value'] + ';show_sell_card_content(\'' + card_id + '\')">' + parsed_card + '</div>');
			}
		}
	});
	if(current_merchant_page == 1){$('.page_selection .previous_page').addClass('no_page');}else{$('.page_selection .previous_page').removeClass('no_page');}
	if(current_card_number / cards_per_page <= current_merchant_page){$('.page_selection .next_page').addClass('no_page');}else{$('.page_selection .next_page').removeClass('no_page');}
	if(Math.ceil(current_card_number / 12) < current_merchant_page && current_card_number > 0)
	{
		current_merchant_page = 1;
		show_merchant();
	}
	if(current_card_number == 0)
	{
		$('#content_merchant .tinkering_list').html('<span class="no_tinker">No cards fit your<br/>current filters.</span>');
	}
	if(current_card_number == 0){$('.page_selection .page_number').addClass('no_page')}else{$('.page_selection .page_number').removeClass('no_page');}
	$('.page_selection .page_number').html(current_merchant_page + ' / ' + Math.ceil(current_card_number / cards_per_page));

}

function set_merchant_page(amount){
	current_merchant_page += amount;
	if(current_merchant_page < 1){current_merchant_page = 1;}
	show_merchant();
}

function set_market_page(amount){
	listings_page += amount;
	if(listings_page < 1){listings_page = 1;}
	if(showing_mine == false)
	{
		show_market();
	}
	else
	{
		show_my_market();
	}
}



function show_sell_card_content(card_id){
	selling_card_id = card_id;
	if(buy_sell == 'sell')
	{
		show_content('sell_card');
	}
	else
	{
		show_content('buy_card');
	}
}

function show_buy_card(){
	show_sell_card();
}

function show_sell_card(){
	if(selling_card_id == '' || all_available_cards[selling_card_id] == undefined || (gamedata['owned_cards'][selling_card_id] < 1 && buy_sell == 'sell') || all_available_cards[selling_card_id]['non_tradable'] != undefined)
	{
		show_content('merchant');
	}
	else
	{
		if(sell_amount < 1)
		{
			sell_amount = 1;
		}
		if(sell_amount > gamedata['owned_cards'][selling_card_id] && buy_sell == 'sell')
		{
			sell_amount = gamedata['owned_cards'][selling_card_id];
		}

		var parsed_card = parse_card(selling_card_id, gamedata['owned_cards'][selling_card_id]);
		if(buy_sell == 'sell')
		{
			$('.sell_card_container').html('Selling:<br/><div onclick="show_card_details(\'' + selling_card_id + '\')"' + parsed_card);
		}
		else
		{
			$('.sell_card_container').html('Buying:<br/><div onclick="show_card_details(\'' + selling_card_id + '\')"' + parsed_card);
		}

		$('.sell_card_amount_container .sell_amount').html(numberWithCommas(sell_amount));

		var merchant_price = Math.floor(sell_amount * all_available_cards[selling_card_id]['value'] / 2);
		//var merchant_price = sell_amount + 0;
		if(merchant_price == 0)
		{
			$('.merchant_offer').html('The merchant does not want this.<br/>Maybe offer more cards?');
			$('.sell_to_merchant_button').addClass('hidden');
		}
		else
		{
			$('.sell_to_merchant_button').removeClass('hidden');
			if(merchant_price == 1)
			{
				$('.merchant_offer').html('The merchant offers you 1 scrap for this.');
			}
			else
			{
				$('.merchant_offer').html('The merchant offers you ' + numberWithCommas(merchant_price) + ' scraps for this.');
			}
			
		}

		if(selling_price < (all_available_cards[selling_card_id]['value']) / 2)
		{
			selling_price = Math.floor((all_available_cards[selling_card_id]['value']) / 2)
		}

		if(selling_price > (all_available_cards[selling_card_id]['value']) * 40)
		{
			selling_price = Math.floor((all_available_cards[selling_card_id]['value']) * 40)
		}
		if(selling_price < 1)
		{
			selling_price = 1;
		}

		$('.price_amount').html(numberWithCommas(selling_price));
		if(buy_sell == 'sell')
		{
			get_lowest_price(selling_card_id);
		}
		else
		{
			get_highest_price(selling_card_id);
		}
	}
}

function adjust_sell_amount(amount){
	var price_each = selling_price / sell_amount;
	sell_amount += amount;
	//selling_price = Math.floor(price_each * sell_amount);
	show_sell_card();
}

function adjust_selling_price(amount){
	if(amount > 0 && selling_price >= 20)
	{
		amount = 5;
	}
	if(amount > 0 && selling_price >= 50)
	{
		amount = 10;
	}
	if(amount > 0 && selling_price >= 100)
	{
		amount = 20;
	}
	if(amount > 0 && selling_price >= 500)
	{
		amount = 50;
	}
	if(amount > 0 && selling_price >= 1000)
	{
		amount = 100;
	}
	selling_price += amount;
	if(selling_price < 1)
	{
		selling_price = 1;
	}
	if(selling_price > 1000)
	{
		selling_price = Math.floor(selling_price / 100) * 100;
	}
	if(selling_price > 500 && selling_price < 1000)
	{
		selling_price = Math.floor(selling_price / 50) * 50;
	}
	if(selling_price > 100 && selling_price < 500)
	{
		selling_price = Math.floor(selling_price / 20) * 20;
	}
	if(selling_price > 50 && selling_price < 100)
	{
		selling_price = Math.floor(selling_price / 10) * 10;
	}
	if(selling_price > 20 && selling_price < 50)
	{
		selling_price = Math.floor(selling_price / 5) * 5;
	}
	if(buy_sell != 'sell' && selling_price > gamedata['scraps'])
	{
		selling_price = gamedata['scraps'];
	}
	show_sell_card();
}

function take_merchant_offer(){
	if(sell_amount > 0 && sell_amount <= gamedata['owned_cards'][selling_card_id])
	{
		var merchant_price = Math.floor(sell_amount * all_available_cards[selling_card_id]['value'] / 2);
		//var merchant_price = sell_amount + 0;
		gamedata['owned_cards'][selling_card_id] -= sell_amount;
		gain_scraps(merchant_price);
		show_available_cards(false);
	}
	check_quests('sell_to_merchant');
	sell_amount = 1;
	show_content('merchant');
}

function place_offer(){
	if(sell_amount > 0 && sell_amount <= gamedata['owned_cards'][selling_card_id])
	{
		gamedata['owned_cards'][selling_card_id] -= sell_amount;	
		saveToLocalStorage();
		show_available_cards(false);
		$.post("ajax.php",
		{
			data: 			'place_offer',
			current_id: 	gamedata['account_id'],
			card_id: 		selling_card_id,
			card_amount: 	sell_amount,
			price: 			selling_price
		},
		function(result){
			console.log(result);
			show_content('merchant');
		});
	}
	else
	{
		sell_amount = 1;
		show_content('merchant');
	}
}

function place_buy_offer(){
	if(sell_amount > 0 && gamedata['scraps'] >= (selling_price * sell_amount))
	{
		gamedata['scraps'] -= (selling_price * sell_amount);	
		saveToLocalStorage();
		show_available_cards(false);
		$.post("ajax.php",
		{
			data: 			'place_buy_offer',
			current_id: 	gamedata['account_id'],
			card_id: 		selling_card_id,
			card_amount: 	sell_amount,
			price: 			selling_price
		},
		function(result){
			console.log(result);
			show_content('merchant');
		});
	}
	else
	{
		sell_amount = 1;
		show_content('merchant');
	}
}



function show_market(){
	$('.market_list').html('');
	showing_mine = false;
	if(buy_sell == 'buy')
	{
		$('.market_view_slider').addClass('buying');
		$('.select_buy').addClass('active');
		$('.select_sell').removeClass('active');
		$.post("ajax.php",
		{
			data: 			'get_market',
			current_id: 	gamedata['account_id'],
		},
		function(result){
			parse_current_market(JSON.parse(result));
		});
	}
	else
	{
		$('.market_view_slider').removeClass('buying');
		$('.select_sell').addClass('active');
		$('.select_buy').removeClass('active');
		showing_mine = false;
		$.post("ajax.php",
		{
			data: 			'get_market_offers',
			current_id: 	gamedata['account_id'],
		},
		function(result){
			parse_current_market(JSON.parse(result));
		});
	}
}

function show_my_market(){
	$('.market_list').html('');
	//listings_page = 1;
	showing_mine = true;
	if(buy_sell == 'buy')
	{
		$('.market_view_slider').addClass('buying');
		$('.select_buy').addClass('active');
		$('.select_sell').removeClass('active');		
	}
	else
	{
		$('.market_view_slider').removeClass('buying');
		$('.select_sell').addClass('active');
		$('.select_buy').removeClass('active');
	}
	$.post("ajax.php",
	{
		data: 			'get_your_market',
		current_id: 	gamedata['account_id'],
	},
	function(result){
		parse_current_market(JSON.parse(result), true);
	});
}

function get_lowest_price(card_id){
	if(current_lowest_price == 0)
	{
		$('.current_market_price').html('');
		$.post("ajax.php",
		{
			data: 			'get_lowest_price',
			card_id: 		card_id
		},
		function(result){
			//console.log(JSON.parse(result));
			var lowest_price = (JSON.parse(result));
			your_offer = '';

			if(count_object(lowest_price) > 0 && lowest_price['user_id'] != undefined && lowest_price['user_id'] == gamedata['account_id'])
			{
				your_offer = ' (yours)';
			}
			
			if(lowest_price != null && lowest_price['price'] != undefined)
			{
				current_lowest_price = lowest_price['price'];
				$('.current_market_price').html('Lowest price on the market for this is ' + numberWithCommas(lowest_price['price']) + ' each' + your_offer);
			}
			else
			{
				current_lowest_price = null;
				$('.current_market_price').html('There are no offers for this on the market');
			}
		});
	}
	else
	{
		if(current_lowest_price != null && current_lowest_price != undefined)
		{
			$('.current_market_price').html('Lowest price on the market for this is ' + numberWithCommas(current_lowest_price) + ' each' + your_offer);
		}
		else
		{
			$('.current_market_price').html('There are no offers for this on the market');
		}
	}
}

function get_highest_price(card_id){
	if(current_lowest_price == 0)
	{
		$('.current_market_price').html('');
		$.post("ajax.php",
		{
			data: 			'get_highest_price',
			card_id: 		card_id
		},
		function(result){
			//console.log(JSON.parse(result));
			var lowest_price = (JSON.parse(result));
			your_offer = '';
			if(count_object(lowest_price) > 0 && lowest_price['user_id'] != undefined && lowest_price['user_id'] == gamedata['account_id'])
			{
				your_offer = ' (yours)';
			}
			
			if(lowest_price != null && lowest_price['price'] != undefined)
			{
				current_lowest_price = lowest_price['price'];
				$('.current_market_price').html('Highest price on the market for this is ' + numberWithCommas(lowest_price['price']) + ' each' + your_offer);
			}
			else
			{
				current_lowest_price = null;
				$('.current_market_price').html('There are no requests for this on the market');
			}
		});
	}
	else
	{
		if(current_lowest_price != null && current_lowest_price != undefined)
		{
			$('.current_market_price').html('Highest price on the market for this is ' + numberWithCommas(current_lowest_price) + ' each' + your_offer);
		}
		else
		{
			$('.current_market_price').html('There are no requests for this on the market');
		}
	}
}

function buy_listing(listing_id){
	$('.market_list').html('');
	$.post("ajax.php",
	{
		data: 			'buy_listing',
		listing_id: 	listing_id
	},
	function(result){
		//console.log(JSON.parse(result));
		complete_buy_listing(JSON.parse(result));
	});
}

function sell_listing(listing_id){
	$('.market_list').html('');
	$.post("ajax.php",
	{
		data: 			'sell_listing',
		listing_id: 	listing_id
	},
	function(result){
		//console.log(JSON.parse(result));
		complete_sell_listing(JSON.parse(result));
	});
}

function complete_buy_listing(listing){
	check_quests('complete_buy_listing');
	gamedata['scraps'] -= listing['price'];
	//for (var i = listing['card_amount'] - 1; i >= 0; i--) {
		gain_card(listing['card_id']);
	//};
	//show_card_details(listing['card_id'], undefined, listing['card_amount']);
	show_market();
}

function complete_sell_listing(listing){
	check_quests('complete_sell_listing');
	gamedata['owned_cards'][listing['card_id']] -= 1;
	gamedata['scraps'] += parseInt(listing['price']);
	saveToLocalStorage();
	show_market();
}

function cancel_listing(listing_id){
	$('.market_list').html('');
	$.post("ajax.php",
	{
		data: 			'claim_listing',
		listing_id: 	listing_id
	},
	function(result){
		var canceled_listing = JSON.parse(result);
		
		$.post("ajax.php",
		{
			data: 			'delete_listing',
			listing_id: 	listing_id
		},
		function(result){
			complete_cancel_listing(canceled_listing);
		});
	});
}

function cancel_buy_listing(listing_id){
	$('.market_list').html('');
	$.post("ajax.php",
	{
		data: 			'claim_listing',
		listing_id: 	listing_id
	},
	function(result){
		var canceled_listing = JSON.parse(result);
		$.post("ajax.php",
		{
			data: 			'delete_listing',
			listing_id: 	listing_id
		},
		function(result){
			complete_cancel_buy_listing(canceled_listing);
		});
	});
}

function complete_cancel_listing(listing){
	var canceled_amount = listing['card_amount'] - listing['sold'];
	for (var i = canceled_amount - 1; i >= 0; i--) {
		gain_card(listing['card_id']);
	};
	show_card_details(listing['card_id'], undefined, canceled_amount);
	if(showing_mine == false)
	{
		show_market();
	}
	else
	{
		show_my_market();
	}
	//show_my_market();
}

function complete_cancel_buy_listing(listing){
	var canceled_amount = listing['card_amount'] - listing['sold'];
	gain_scraps(listing['price'] * canceled_amount);
	if(showing_mine == false)
	{
		show_market();
	}
	else
	{
		show_my_market();
	}
	//show_my_market();
}

function claim_listing(listing_id){
	$('.market_list').html('');
	$.post("ajax.php",
	{
		data: 			'claim_listing',
		listing_id: 	listing_id
	},
	function(result){
		complete_claim_listing(JSON.parse(result));
	});
}

function claim_buy_listing(listing_id){
	$('.market_list').html('');
	$.post("ajax.php",
	{
		data: 			'claim_listing',
		listing_id: 	listing_id
	},
	function(result){
		complete_claim_buy_listing(JSON.parse(result));
	});
}

function complete_claim_listing(listing){
	gain_scraps(listing['price'] * listing['sold']);
	if(showing_mine == false)
	{
		show_market();
	}
	else
	{
		show_my_market();
	}
	//show_my_market();
}

function complete_claim_buy_listing(listing){
	
	for (var i = listing['sold'] - 1; i >= 0; i--) {
		gain_card(listing['card_id']);
	};
	show_card_details(listing['card_id'], undefined, listing['sold']);
	if(showing_mine == false)
	{
		show_market();
	}
	else
	{
		show_my_market();
	}
	//show_my_market();
}

function parse_current_market(all_listings, mine){
	$('#content_market .page_selection').addClass('hidden');
	$('#content_my_market .page_selection').addClass('hidden');
	if(current_listing_id == false)
	{
		$('#content_market .menu_button').removeClass('hidden');
		$('#content_market .market_view').removeClass('hidden');
		$('#content_market .select_filters').removeClass('hidden');
		$('.market_list').removeClass('showing_single');
	}
	else
	{
		$('#content_market .menu_button').addClass('hidden');
		$('#content_market .market_view').addClass('hidden');
		$('#content_market .select_filters').addClass('hidden');
		$('.market_list').addClass('showing_single');
	}
	if(gamedata['scraps'] == 1)
	{
		$('.scrap_count').html(gamedata['scraps'] + ' scrap');
	}
	else
	{
		$('.scrap_count').html(gamedata['scraps'] + ' scraps');
	}
	$('.market_list').html('');
	var parsed_listing = '';
	if(current_listing_id == false)
	{
		global_listings = all_listings;
	}
	/*parsed_listing = '<div class="listing no_hover">';
	parsed_listing += '<div class="listing_name">Card</div>';
	parsed_listing += '<div class="listing_amount">Amount</div>';
	parsed_listing += '<div class="listing_cost">Price</div>';
	parsed_listing += '<div class="listing_average_cost">Average price</div>';
	parsed_listing += '<div class="seller">Seller</div>';
	parsed_listing += '<div class="owned_scraps">Scraps:<br/>' + gamedata['scraps'] + '</div>';
	parsed_listing += '</div>';*/
	$('.market_list').append(parsed_listing);
	var total_showing = 0;
	var max_page = 6;
	
	$.each(all_listings, function(listing_id, listing){
		if((current_listing_id == false || current_listing_id == listing['id']) && all_available_cards[listing['card_id']] != undefined && check_filters(listing['card_id']) == false && ((listing['card_amount'] - listing['sold']) > 0 || mine == true) && ((mine != true /*&& listing['user_id'] != gamedata['account_id']*/) || (listing['user_id'] == gamedata['account_id'] && mine == true)))
		{
			//console.log(listing['card_id']);
			total_showing++;
			if((total_showing <= (listings_page * max_page) && total_showing > (listings_page -1) * max_page) || current_listing_id != false)
			{
				var parsed_listing = '';
				var parsed_card = parse_card(listing['card_id']);
				var owned_amount = 0;
				if(gamedata['owned_cards'][listing['card_id']] != undefined && gamedata['owned_cards'][listing['card_id']] > 0)
				{
					owned_amount = gamedata['owned_cards'][listing['card_id']];
				}
				parsed_listing += '<div class="single_market_card"><div onclick="show_card_details(\'' + listing['card_id'] + '\')">' + parsed_card + '</div>';
				
				if(listing['user_id'] != gamedata['account_id'] && listing['card_amount'] - listing['sold'] > 0)
				{
					if(listing['buy_sell'] == 'sell')
					{
						parsed_listing += 	'<div class="market_description"><span class="selling">In stock: ' + (listing['card_amount'] - listing['sold']) + '</span><br/>Price: ' + numberWithCommas(listing['price']) + '<br/>Owned: ' + owned_amount + '</div>';
						if(gamedata['scraps'] >= listing['price'])
						{
							if(current_listing_id == false)
							{
								parsed_listing += 	'<div class="market_buy_button" onclick="current_listing_id=' + listing['id'] + ';parse_current_market(global_listings)">VIEW</div>';
							}
							else
							{
								parsed_listing += 	'<div class="market_buy_button" onclick="buy_listing(' + listing['id'] + ')">BUY</div>';
							}
						}
						if(current_listing_id != false)
						{
							parsed_listing += 	'<div class="market_cancel_button" onclick="current_listing_id=false;show_market()">CLOSE</div>';
						}
					}
					if(listing['buy_sell'] == 'buy')
					{
						parsed_listing += 	'<div class="market_description"><span class="buying">Requested: ' + (listing['card_amount'] - listing['sold']) + '</span><br/>Pays: ' + numberWithCommas(listing['price']) + '<br/>Owned: ' + owned_amount + '</div>';
						if(owned_amount >= 1)
						{
							if(current_listing_id == false)
							{
								parsed_listing += 	'<div class="market_sell_button" onclick="current_listing_id=' + listing['id'] + ';parse_current_market(global_listings)">VIEW</div>';
							}
							else
							{
								parsed_listing += 	'<div class="market_sell_button" onclick="sell_listing(' + listing['id'] + ')">SELL</div>';
								
							}
						}
						if(current_listing_id != false)
						{
							parsed_listing += 	'<div class="market_cancel_button" onclick="current_listing_id=false;show_market()">CLOSE</div>';
						}
					}
				}
				if(listing['user_id'] == gamedata['account_id'])
				{
					if(listing['buy_sell'] == 'sell')
					{
						parsed_listing += 	'<div class="market_description"><span class="selling">SELLING</span><br/>Price: ' + numberWithCommas(listing['price']);
						if(listing['sold'] > 0)
						{
							parsed_listing += 	'<br/>Sold: ' + listing['sold'];
						}
						else
						{
							parsed_listing += 	'<br/>Offering: ' + listing['card_amount'];
						}
						parsed_listing += 	'</div>';
						if(listing['sold'] > 0)
						{
							parsed_listing += 	'<div class="market_buy_button" onclick="claim_listing(' + listing['id'] + ')">CLAIM</div>';
						}
						else
						{
							parsed_listing += 	'<div class="market_cancel_button" onclick="cancel_listing(' + listing['id'] + ')">CANCEL</div>';
						}
					}
					if(listing['buy_sell'] == 'buy')
					{
						parsed_listing += 	'<div class="market_description"><span class="buying">BUYING</span><br/>Price: ' + numberWithCommas(listing['price']);
						if(listing['sold'] > 0)
						{
							parsed_listing += 	'<br/>Bought: ' + listing['sold'];
						}
						else
						{
							parsed_listing += 	'<br/>Requesting: ' + listing['card_amount'];
						}
						parsed_listing += 	'</div>';
						if(listing['sold'] > 0)
						{
							parsed_listing += 	'<div class="market_buy_button" onclick="claim_buy_listing(' + listing['id'] + ')">CLAIM</div>';
						}
						else
						{
							parsed_listing += 	'<div class="market_cancel_button" onclick="cancel_buy_listing(' + listing['id'] + ')">CANCEL</div>';
						}
					}
				}
				parsed_listing += '</div>';
				/*var parsed_listing = '<div class="listing">';
				if(listing['sold'] == 0 || listing['sold'] == 1)
				{
					parsed_listing += '<div class="listing_name" onclick="show_card_details(\'' + listing['card_id'] + '\')"><span class="selling">Selling:</span> ' + capitalizeFirstLetter(all_available_cards[listing['card_id']]['name']) + ' <div class="mg"></div></div>';
				}
				if(listing['sold'] == -1 || listing['sold'] == 2)
				{
					parsed_listing += '<div class="listing_name" onclick="show_card_details(\'' + listing['card_id'] + '\')"><span class="buying">Buying:</span> ' + capitalizeFirstLetter(all_available_cards[listing['card_id']]['name']) + ' <div class="mg"></div></div>';
				}
				parsed_listing += '<div class="listing_amount">' + listing['card_amount'] + '</div>';
				parsed_listing += '<div class="listing_cost">' + numberWithCommas(listing['price']) + '</div>';
				parsed_listing += '<div class="listing_average_cost">' + Math.floor(listing['price'] / listing['card_amount'] * 10) / 10 + '</div>';
				parsed_listing += '<div class="seller">' + listing['name'] + '</div>';
				if(listing['price'] <= gamedata['scraps'] && listing['user_id'] != gamedata['account_id'] && listing['sold'] == 0)
				{
					parsed_listing += '<div class="buy_market_listing_button" onclick="buy_listing(' + listing['id'] + ')">BUY</div>';
				}
				if(gamedata['owned_cards'][listing['card_id']] != undefined && gamedata['owned_cards'][listing['card_id']] >= listing['card_amount'] && listing['user_id'] != gamedata['account_id'] && listing['sold'] == -1)
				{
					parsed_listing += '<div class="buy_market_listing_button" onclick="sell_listing(' + listing['id'] + ')">SELL</div>';
				}
				if(listing['user_id'] == gamedata['account_id'])
				{
					if(listing['sold'] == 0)
					{
						parsed_listing += '<div class="buy_market_listing_button cancel_button" onclick="cancel_listing(' + listing['id'] + ')">CANCEL</div>';
					}
					if(listing['sold'] == 1)
					{
						parsed_listing += '<div class="buy_market_listing_button" onclick="claim_listing(' + listing['id'] + ')">CLAIM</div>';
					}
					if(listing['sold'] == -1)
					{
						parsed_listing += '<div class="buy_market_listing_button cancel_button" onclick="cancel_buy_listing(' + listing['id'] + ')">CANCEL</div>';
					}
					if(listing['sold'] == 2)
					{
						parsed_listing += '<div class="buy_market_listing_button" onclick="claim_buy_listing(' + listing['id'] + ')">CLAIM</div>';
					}
				}
				
				parsed_listing += '</div>';*/
				$('.market_list').append(parsed_listing);
			}
		}
	});

	if(total_showing == 0)
	{
		var parsed_listing = '<div class="listing no_hover"><span class="no_results">No results found</span>';
		if(current_listing_id != false)
		{
			parsed_listing += '<br/><br/><div class="market_cancel_button" onclick="current_listing_id=false;show_market()">CLOSE</div>';
		}
		parsed_listing += '</div>';
		$('.market_list').append(parsed_listing);
	}
	
	if(total_showing > 1)
	{
		$('#content_market .page_selection').removeClass('hidden');
		$('#content_my_market .page_selection').removeClass('hidden');
		if(listings_page == 1){$('.page_selection .previous_page').addClass('no_page');}else{$('.page_selection .previous_page').removeClass('no_page');}
		if(total_showing / max_page <= listings_page){$('.page_selection .next_page').addClass('no_page');}else{$('.page_selection .next_page').removeClass('no_page');}
		if(Math.ceil(total_showing / max_page) < listings_page)
		{
			listings_page = 1;
			if(showing_mine == false)
			{
				parse_current_market(all_listings);
			}
			else
			{
				parse_current_market(all_listings, true);
			}
		}
		$('.page_selection .page_number').html(listings_page + ' / ' + Math.ceil(total_showing / max_page));
	}
};

function check_filters(card_id, hero_version){
	var filters = {};
	filters['ability'] = '';
	if($('.ability_filter').val() != '')
	{
		filters['ability'] = $('.ability_filter').val();
	}
	filters['name'] = '';
	if($('.name_filter').val() != '')
	{
		filters['name'] = $('.name_filter').val();
	}
	if($('.min_cost_filter').val() != ''){filters['min_cost'] = parseInt($('.min_cost_filter').val());}
	if($('.max_cost_filter').val() != ''){filters['max_cost'] = parseInt($('.max_cost_filter').val());}
	if($('.min_value_filter').val() != ''){filters['min_value'] = parseInt($('.min_value_filter').val());}
	if($('.max_value_filter').val() != ''){filters['max_value'] = parseInt($('.max_value_filter').val());}

	var card_filtered = false;
	if(filters['name'] != '')
	{
		var name_matched = false;
		if(all_available_cards[card_id]['name'].indexOf(filters['name']) != -1){
			name_matched = true;
		}
		$.each(all_available_cards[card_id]['subtypes'], function(subtype_key, subtype_name){
			if(subtype_name.indexOf(filters['name']) != -1){
				name_matched = true;
			}
		});
		if(name_matched == false)
		{
			card_filtered = true;
		}
	}
	if(filters['ability'] != '')
	{
		var ability_matched = false;

		var abilities_to_filter = all_available_cards[card_id]['abilities'];
		if(hero_version != undefined && hero_version == true && all_available_cards[card_id]['hero_version'] != undefined && all_available_cards[card_id]['hero_version']['abilities'] != undefined)
		{
			abilities_to_filter = all_available_cards[card_id]['hero_version']['abilities'];
		}

		$.each(abilities_to_filter, function(ability_key, ability_level){
			if(typeof(ability_level) == 'object')
			{
				var temp_ability_name = all_abilities[ability_key]['name'] + ' ' + ability_level['level'];
			}
			else
			{
				if(all_abilities[ability_key] != undefined)
				{
					var temp_ability_name = all_abilities[ability_key]['name'] + ' ' + ability_level;
				}
				else
				{
					var temp_ability_name = '';
					console.log(ability_key);
				}
			}
			
			if(temp_ability_name.indexOf(filters['ability']) != -1){
				ability_matched = true;
			}
			if(all_abilities[ability_key]['description'].indexOf(filters['ability']) != -1){
				ability_matched = true;
			}
		});

		if(ability_matched == false)
		{
			card_filtered = true;
		}
		
	}
	if(filters['min_cost'] != undefined && all_available_cards[card_id]['time'] < filters['min_cost']){card_filtered = true;}
	if(filters['max_cost'] != undefined && all_available_cards[card_id]['time'] > filters['max_cost']){card_filtered = true;}
	if(filters['min_value'] != undefined && all_available_cards[card_id]['value'] < filters['min_value']){card_filtered = true;}
	if(filters['max_value'] != undefined && all_available_cards[card_id]['value'] > filters['max_value']){card_filtered = true;}
	if($('.' + all_available_cards[card_id]['type'] + '_type_filter').prop("checked") == false)
	{
		card_filtered = true;
	}

	if(namechanges[card_id] != undefined)
	{
		card_filtered = true;
	}
	
	$.each(all_available_cards[card_id]['color'], function(useless_key, color){
		if(color != undefined && $('.' + color + '_color_filter').prop("checked") == false)
		{
			card_filtered = true;
		}
	});

	return card_filtered;
}

function toggle_market_view_mode(){
	if(buy_sell == 'sell')
	{
		buy_sell = 'buy';
	}
	else
	{
		buy_sell = 'sell';
	}
	show_market();
}


function toggle_my_market_view_mode(){
	if(buy_sell == 'sell')
	{
		buy_sell = 'buy';
	}
	else
	{
		buy_sell = 'sell';
	}
	show_my_market();
}