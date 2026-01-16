var gamedata = {};
var owned_cards = {};

function loadLocalStorage(){
	if (typeof(localStorage.gridthegame) !== "undefined") {
	    console.log('Save game found');
	    var tempgamedata = localStorage.getItem("gridthegame");
	    //console.log(tempgamedata);
	    gamedata = JSON.parse(tempgamedata);
	    //console.log(gamedata);
	    if(count_object(gamedata['owned_cards']) < 20)
	    {
	    	clearLocalStorage();
	    	location.reload();
	    }
	    check_owned_card();
	} else {
	    console.log('Sorry! No save game');  
	    gamedata['owned_cards'] = {};
	    gamedata['current_deck'] = 1;
	    show_content('pick_starting_deck');
	    show_color_description('emerald', 1);
	    show_color_description('emerald', 2);
	    /*for (var i = 0; i < 10; i++) {
	    	gain_random_non_gem_card(1);
	    };*/
	    for (var i = 0; i < 10; i++) {
	    	gain_random_non_gem_card(0);
	    };

	    /*for (var i = 0; i < 10; i++) {
	    	gain_random_gem_card(0);
	    };*/

	    /*gain_card('diamond',1);
	    gain_card('diamond',1);*/

	    gain_card('emerald',0);
	    gain_card('agate',0);
	    gain_card('amethist',0);
	    gain_card('ruby',0);
	    gain_card('amber',0);
	    gain_card('citrine',0);
	    

	    saveToLocalStorage();
	}
	//console.log(gamedata);

	if(gamedata['coins'] == undefined)
	{
		gamedata['coins'] = 0;
		saveToLocalStorage();
	}

	if(gamedata['game_speed'] == undefined)
	{
		gamedata['game_speed'] = 500;
		saveToLocalStorage();
	}

	if(gamedata['deck_card_filters'] == undefined)
	{
		gamedata['deck_card_filters'] = {
			type:{
				gem: 		true,
				creature: 	true,
				structure: 	true,
				spell: 		true,
			},
			color: {
				blue: 	true,
				red: 	true,
				green: 	true,
				purple: true,
				orange: true,
				yellow: true,
				colorless: false,
			}
			
		}
		saveToLocalStorage();
	}

	if(gamedata['max_decks'] == undefined)
	{
		gamedata['max_decks'] = 2;
		saveToLocalStorage();
	}

	if(gamedata['max_quests'] == undefined)
	{
		gamedata['max_quests'] = 3;
		saveToLocalStorage();
	}

	if(gamedata['current_quests'] == undefined)
	{
		gamedata['current_quests'] = {};
		saveToLocalStorage();
	}

	if(gamedata['start_stunned'] == undefined)
	{
		gamedata['start_stunned'] = false;
		saveToLocalStorage();
	}

	if(gamedata['limited_actions'] == undefined)
	{
		gamedata['limited_actions'] = false;
		saveToLocalStorage();
	}

	get_owned_cards();

	return gamedata;

};

function saveToLocalStorage(){
	localStorage.removeItem("gridthegame");
	localStorage.setItem("gridthegame", JSON.stringify(gamedata));
};

function clearLocalStorage(){
	localStorage.removeItem("gridthegame");
};

function set_game_speed(value){
	gamedata['game_speed'] = value;
	$('.game_speed').removeClass('current_game_speed');
	$('.speed_' + value).addClass('current_game_speed');
	saveToLocalStorage();
}

function check_owned_card(){
	/*$.each(gamedata['owned_cards'], function(owned_id, card_info){
		if(available_cards[card_info['card_id']] == undefined)
		{
			delete gamedata['owned_cards'][owned_id];
		}
	});*/
	gamedata['owned_cards'] = sortObj(gamedata['owned_cards']);
	saveToLocalStorage();
}