var gamedata = {};
var gamename = "rows4a";

var game_speeds = {
		slow: 		0.75,
		medium: 	0.5,
		fast: 		0.25,
		fastest: 	0.1
	}

var current_game_speed = 'medium';

function loadLocalStorage(){
	if (typeof(localStorage.rows4a) !== "undefined") {
	    //console.log('Save game found');
	    var tempgamedata = localStorage.getItem(gamename);
	    //console.log(tempgamedata);
	    gamedata = JSON.parse(tempgamedata);
	    //console.log(gamedata);
	} else {
	    //console.log('Sorry! No save game');  

	    //saveToLocalStorage();
	}
	//console.log(gamedata);

	if(gamedata['save_count'] == undefined){
		gamedata['save_count'] = 0;
		//saveToLocalStorage();
	}

    if(gamedata['scraps'] == undefined){
		gamedata['scraps'] = 0;
		//saveToLocalStorage();
	}

	if(gamedata['achievements'] == undefined){
		gamedata['achievements'] = {};
		//saveToLocalStorage();
	}

	if(gamedata['battles_started'] == undefined){
		gamedata['battles_started'] = 0;
		//saveToLocalStorage();
	}

	if(gamedata['battles_won'] == undefined){
		gamedata['battles_won'] = 0;
		//saveToLocalStorage();
	}

	if(gamedata['battles_lost'] == undefined){
		gamedata['battles_lost'] = 0;
		//saveToLocalStorage();
	}
	
	if(gamedata['battles_tied'] == undefined){
		gamedata['battles_tied'] = 0;
		//saveToLocalStorage();
	}

	if(gamedata['game_speed'] != undefined)
	{
		current_game_speed = gamedata['game_speed'];
		set_game_speed(false);
	}

	if(gamedata['owned_card_backs'] == undefined)
	{
		gamedata['owned_card_backs'] = {};
	}

	if(gamedata['owned_cards'] == undefined || count_object(gamedata['owned_cards']) == 0)
	{
		gamedata['owned_cards'] = {};
		gamedata['decks'] = {};
		/*$.each(all_available_cards, function(card_id, card){
			gamedata['owned_cards'][card_id] = 10;
		});*/
		/*var chosen_cards = construct_random_deck(30, 'peasant', true);

		$.each(chosen_cards, function(useless_key, deck_card_info){
			if(gamedata['owned_cards'][deck_card_info['card_id']] == undefined)
			{
				gamedata['owned_cards'][deck_card_info['card_id']] = 1;
			}
			else
			{
				gamedata['owned_cards'][deck_card_info['card_id']]++;
			}
			if(gamedata['decks'][0][deck_card_info['card_id']] == undefined)
			{
				gamedata['decks'][0][deck_card_info['card_id']] = 1;
			}
			else
			{
				gamedata['decks'][0][deck_card_info['card_id']]++;
			}
		});

		var chosen_hero = get_random_hero();
		if(gamedata['owned_cards'][chosen_hero] == undefined)
		{
			gamedata['owned_cards'][chosen_hero] = 1;
		}
		else
		{
			gamedata['owned_cards'][chosen_hero]++;
		}

		gamedata['decks'][0]['hero'] = chosen_hero;*/
		gamedata['decks'][0] = {};
		gamedata['owned_cards']['peasant'] = 6;
		gamedata['decks'][0]['peasant'] = 5;
		gamedata['decks'][0]['hero'] = 'peasant';

		//saveToLocalStorage();
	}

	if(gamedata['decks'] == undefined || count_object(gamedata['decks']) < 1)
	{
		if(gamedata['decks'] == undefined)
		{
			gamedata['decks'] = {};
		}
		for (var i = 0; i < 1; i++) {
			if(gamedata['decks'][i] == undefined)
			{
				gamedata['decks'][i] = {};
				gamedata['decks'][i]['hero'] = 'peasant';
			}
		};
		//saveToLocalStorage();
	}

	if(gamedata['current_deck'] == undefined)
	{
		gamedata['current_deck'] = 0;
		//saveToLocalStorage();
	}

	if(gamedata['cleared_chapters'] == undefined)
	{
		gamedata['cleared_chapters'] = {};
	}

	var last_midnight = new Date();
	last_midnight.setHours(0,0,0,0);

	if(gamedata['last_midnight'] == undefined)
	{
		gamedata['last_midnight'] = last_midnight;
		//saveToLocalStorage();
	}

	if(gamedata['last_midnight'] == undefined || new Date(gamedata['last_midnight']).getTime() < last_midnight.getTime())
	{
		//console.log('refreshing');
		//gamedata['last_midnight'] = last_midnight;
		//saveToLocalStorage();
		//location.reload();
	}

	$.each(gamedata['owned_cards'], function(card_id, amount){
		if(all_available_cards[card_id] == undefined)
		{
			delete gamedata['owned_cards'][card_id];
		}
	});
	$.each(gamedata['known_recipes'], function(card_id, amount){
		if(all_available_cards[card_id] == undefined)
		{
			delete gamedata['known_recipes'][card_id];
		}
	});
	//gamedata = check_card_namechanges(gamedata);

	return gamedata;

};

var testsaves = {};

function saveToLocalStorage(backup_now){
	if(gamedata['owned_cards'] != undefined)
	{
		$.each(gamedata['owned_cards'], function(card_id, owned_amount){
			if(owned_amount < 0)
			{
				gamedata['owned_cards'][card_id] = 0;
			}
		});
	}

	gamedata['save_count']++;
	var temp_save_count = gamedata['save_count'] + 0;
	
	localStorage.removeItem(gamename);
	localStorage.setItem(gamename, JSON.stringify(gamedata));

	var save_successfull = false;
	if(typeof(localStorage.rows4) !== "undefined")
	{
	    var tempgamedata = localStorage.getItem(gamename);
	    var test_gamedata = JSON.parse(tempgamedata);
	    if(test_gamedata['save_count'] != undefined && test_gamedata['save_count'] == temp_save_count)
	    {
	    	save_successfull = true;
	    }
	}
	$('.all_save_icons').append('<div class="saving_icon save_' + temp_save_count + '"></div>');
	if(save_successfull == true)
	{
		$('.save_' + temp_save_count).addClass('save_good');
	}
	else
	{
		$('.save_' + temp_save_count).addClass('save_bad');
	}
	testsaves[temp_save_count] = setTimeout(function(){
		$('.save_' + temp_save_count).remove();
		clearTimeout(testsaves[temp_save_count]);
		delete(testsaves[temp_save_count]);
	},1000);
};

function clearLocalStorage(){
	gamedata = {};
	localStorage.removeItem(gamename);
};

function set_current_deck(deck){
	if(gamedata['decks'][deck] != undefined)
	{
		gamedata['current_deck'] = deck;
		saveToLocalStorage();
	}
}