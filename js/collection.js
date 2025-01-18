var current_collection_page = 1;

function show_collection(){

	$('.tinkering_container').html('');

	var tinkering_list = '';
	var cards_displayed = 0;

	var collected = 0;
	var known_recipes = 0;
	var collectable = 0;
	var recipe_count = 0;

	$.each(all_available_cards, function(card_id, card_info){

		if(check_filters(card_id) == false && card_info['type'] != 'currency' && card_info['type'] != 'consumable' && card_info['type'] != 'cardback' && namechanges[card_id] == undefined && card_info['pick_chance'] > 0)
		{
			collectable ++;
			cards_displayed ++;
			if(gamedata['owned_cards'][card_id] != undefined)
			{
				collected ++;
			}
			if(card_info['recipe'] != undefined)
			{
				recipe_count ++;
			}
			if(card_info['recipe'] != undefined && gamedata['known_recipes'][card_id] != undefined)
			{
				known_recipes ++;
			}
			if(cards_displayed > (current_collection_page * 12) - 12 && cards_displayed <= current_collection_page * 12)
			{
				var parsed_card = parse_card(card_id);
				var unowned_class = '';
				if(gamedata['known_recipes'] != undefined && gamedata['known_recipes'][card_id] == undefined && all_available_cards[card_id]['recipe'] != undefined){unowned_class = 'unowned_summon';}
				if(gamedata['owned_cards'][card_id] != undefined)
				{
					tinkering_list += '<div class="collection_card_container ' + unowned_class + '" onclick="show_card_details(\'' + card_id + '\')">' + parsed_card + '</div>';
				}
				else
				{
					tinkering_list += '<div class="collection_card_container not_in_collection  ' + unowned_class + '">' + parsed_card + '</div>';
				}
			}
		}

	});

	if(cards_displayed > 12)
	{
		$('#content_collection .page_selection').show();
		if(current_collection_page == 1){$('.page_selection .previous_page').addClass('no_page');}else{$('.page_selection .previous_page').removeClass('no_page');}
		if(cards_displayed / 12 <= current_collection_page){$('.page_selection .next_page').addClass('no_page');}else{$('.page_selection .next_page').removeClass('no_page');}
		if(cards_displayed == 0){$('.page_selection .page_number').addClass('no_page')}else{$('.page_selection .page_number').removeClass('no_page');}
		$('.page_selection .page_number').html(current_collection_page + ' / ' + Math.ceil(cards_displayed / 12));
	}
	else
	{
		$('#content_collection .page_selection').hide();
	}

	if(cards_displayed > 0 && Math.ceil(cards_displayed / 12) < current_collection_page)
	{
		current_collection_page = 1;
		show_collection();
	}
	else
	{
		if(tinkering_list != '')
		{
			$('.tinkering_container').html('<div class="tinkering_list">' + tinkering_list + '</div>');
		}
	}
	var percent_collected = Math.floor(collected / collectable * 100);
	var percent_recipes_collected = Math.floor(known_recipes / recipe_count * 100);
	if(collected == 0){percent_collected = 0;}
	if(known_recipes == 0){percent_recipes_collected = 0;}
	$('.collection_count').html('Cards: ' + percent_collected + '%');
	$('.collection_recipe_count').html('Recipes: ' + percent_recipes_collected + '%');
};

function set_collection_page(amount){
	current_collection_page += amount;
	if(current_collection_page < 1){current_collection_page = 1;}
	show_collection();
};

all_icons = {
	air:{},
	broken:{},
	power:{},
	lightning:{},
	bomb:{},
	healing:{},
	bolster:{},
	wither:{},
	strike:{},
	arrow:{},
	hoof:{},
	fireray:{},
	stun:{},
	fire:{},
	meteor:{},
	burn:{},
	teleport:{},
	poison:{},
	curse:{},
	doom:{},
	bless:{},
	frost:{},
	lull:{},
	magic:{},
	armor:{},
	water:{},
	dodge:{},
	shield:{},
	fly:{},
	parry:{},
	resurrect:{},
	repair:{},
	energize:{},
	dice:{},
	dice_g:{},
	go_again:{},
	cleanse:{},
	voodoo:{},
	drain:{},
	book:{},
	hasten:{},
	slow:{},
	discard:{},
	death:{},
	magic_shield:{},
	eye:{},
	spikes:{},
	money:{},
	stone:{},
	fluffyswirl:{},
	music:{},
	wound:{},
}

function show_icons(){
	var all_parsed_icons = '';
	$.each(all_icons, function(icon_id, icon_info){
		all_parsed_icons += '<div class="icon icon_' + icon_id + '"></div>';
	});
	$('.icons_container').html(all_parsed_icons);
}