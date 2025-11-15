var current_card_backs_page = 1;
var card_backs_per_page = 12;

function show_card_backs(){

	$('.tinkering_container').html('');

	if(gamedata['show_hand_colors'] == undefined || gamedata['show_hand_colors'] == true)
	{
		$('.show_hand_colors_button').html('COLOR VISIBLE');
	}
	else
	{
		$('.show_hand_colors_button').html('COLOR INVISIBLE');
	}

	if(gamedata['owned_card_backs'] == undefined)
	{
		gamedata['owned_card_backs'] = {};
	}

	var tinkering_list = '';
	var cards_displayed = 0;

	var collected = 0;
	var collectable = 0;

	$.each(all_card_backs, function(card_back_id, card_image){

		if(gamedata['owned_card_backs'][card_back_id] != undefined)
		{
			collectable ++;
			cards_displayed ++;
			if(cards_displayed > (current_card_backs_page * card_backs_per_page) - card_backs_per_page && cards_displayed <= current_card_backs_page * card_backs_per_page)
			{
				var linked_card = false;
				if(all_available_cards[card_back_id.replace('card_back_','')] != undefined)
				{
					linked_card = all_available_cards[card_back_id.replace('card_back_','')];
				}
				var card_image_position = '';
				if(linked_card != false && linked_card['image_position'] != undefined)
				{
					card_image_position = ';background-position:' + linked_card['image_position'];
				}
				var parsed_card = '<div class="pickable_card_back" style="background-image:url(images/' + card_image + ')' + card_image_position + '"></div>';
				var card_back_active = '';
				if(gamedata['hand_card_back'] != undefined && gamedata['hand_card_back'] == card_image)
				{
					card_back_active = '<div class="card_back_active">ACTIVE</div>';
				}
				if(gamedata['owned_card_backs'][card_back_id] != undefined)
				{
					tinkering_list += '<span class="card_back_container" onclick="set_card_back(\'' + card_back_id + '\')">' + parsed_card + card_back_active + '</span>';
				}
				else
				{
					tinkering_list += '<div class="not_in_collection">' + parsed_card + '</div>';
				}
			}
		}

	});

	if(cards_displayed > card_backs_per_page)
	{
		$('#content_card_backs .page_selection').show();
		if(current_card_backs_page == 1){$('.page_selection .previous_page').addClass('no_page');}else{$('.page_selection .previous_page').removeClass('no_page');}
		if(cards_displayed / card_backs_per_page <= current_card_backs_page){$('.page_selection .next_page').addClass('no_page');}else{$('.page_selection .next_page').removeClass('no_page');}
		if(cards_displayed == 0){$('.page_selection .page_number').addClass('no_page')}else{$('.page_selection .page_number').removeClass('no_page');}
		$('.page_selection .page_number').html(current_card_backs_page + ' / ' + Math.ceil(cards_displayed / card_backs_per_page));
	}
	else
	{
		$('#content_card_backs .page_selection').hide();
	}

	if(cards_displayed > 0 && Math.ceil(cards_displayed / card_backs_per_page) < current_card_backs_page)
	{
		current_card_backs_page = 1;
		show_card_backs();
	}
	else
	{
		var percent_collected = 0;
		if(cards_displayed > 0){percent_collected = Math.floor((cards_displayed / count_object(all_card_backs)) * 100);}
		if(tinkering_list != '')
		{
			$('.tinkering_container').html('<div class="tinkering_list">' + tinkering_list + '</div><div class="collection_recipe_count">Collected: ' + percent_collected + '%</div>');
		}
	}

};

function set_card_back_page(amount){
	current_card_backs_page += amount;
	if(current_card_backs_page < 1){current_card_backs_page = 1;}
	show_card_backs();
};

function set_card_back(card_back_id){
	gamedata['hand_card_back'] = all_card_backs[card_back_id];
	saveToLocalStorage();
	show_card_backs();
}

function clear_card_back(){
	gamedata['hand_card_back'] = '';
	saveToLocalStorage();
	show_card_backs();
}

function toggle_show_hand_colors(){
	if(gamedata['show_hand_colors'] == undefined || gamedata['show_hand_colors'] == true)
	{
		gamedata['show_hand_colors'] = false;
	}
	else
	{
		gamedata['show_hand_colors'] = true;
	}
	if(gamedata['show_hand_colors'] == undefined || gamedata['show_hand_colors'] == true)
	{
		$('.show_hand_colors_button').html('COLOR VISIBLE');
	}
	else
	{
		$('.show_hand_colors_button').html('COLOR INVISIBLE');
	}
}

function toggle_all_cardbacks(){
	$.each(all_card_backs, function(card_back_id, card_image){
		if(gamedata['owned_card_backs'][card_back_id] != undefined)
		{
			delete gamedata['owned_card_backs'][card_back_id];
		}
		else
		{
			gamedata['owned_card_backs'][card_back_id] = true;
		}
	});
}