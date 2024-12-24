var gamedata = {};
var gamename = "rows2";

function loadLocalStorage(){
	if (typeof(localStorage.rows2) !== "undefined") {
	    //console.log('Save game found');
	    var tempgamedata = localStorage.getItem(gamename);
	    //console.log(tempgamedata);
	    gamedata = JSON.parse(tempgamedata);
	    //console.log(gamedata);
	} else {
	    //console.log('Sorry! No save game');  

	    saveToLocalStorage();
	}
	//console.log(gamedata);

	if(gamedata['account_id'] == undefined)
	{
		console.log('getting new account id');
		get_new_account_id();
	}
	
	if(gamedata['account_name'] == undefined || gamedata['account_name'] == '')
	{
	    set_account_name();
	}

    if(gamedata['scraps'] == undefined){
		gamedata['scraps'] = 200;
		//saveToLocalStorage();
	}

	if(parseInt(gamedata['scraps']) + 1 != gamedata['scraps'] + 1){
		gamedata['scraps'] = 0;
	}

	if(parseInt(gamedata['scraps']) > 50000)
	{
		gamedata['scraps'] = 0;
	}

	if(gamedata['battle_speed'] != undefined)
	{
		battle_speed = gamedata['battle_speed'];
		if(battle_speed == 0.5)
		{
			$('.main_window').addClass('game_speed_fast');
		}
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
		gamedata['owned_cards']['peasant'] = 11;
		gamedata['decks'][0]['peasant'] = 10;
		gamedata['decks'][0]['hero'] = 'peasant';

		//saveToLocalStorage();
	}

	if(gamedata['decks'] == undefined || count_object(gamedata['decks']) < 5)
	{
		if(gamedata['decks'] == undefined)
		{
			gamedata['decks'] = {};
		}
		for (var i = 0; i <= 4; i++) {
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

	gamedata = check_card_namechanges(gamedata);

	return gamedata;

};

function saveToLocalStorage(backup_now){
	localStorage.removeItem(gamename);
	localStorage.setItem(gamename, JSON.stringify(gamedata));

	if(gamedata['scraps'] > 50000)
	{
		clearLocalStorage();location.reload();
	}
	else
	{
		if(backup_now == undefined && gamedata['account_password'] != undefined && gamedata['account_id'] != undefined && (gamedata['last_backup'] == undefined || new Date(gamedata['last_backup']) < new Date() - (1*1000) ))
		{
			$.post("ajax.php",
			{
				data: 			'backup_account',
				current_id: 	gamedata['account_id'],
				account_data: 	JSON.stringify(gamedata),
			},
			function(){
				gamedata['last_backup'] = new Date();
			});
		}
		//loadLocalStorage();
	}
};

function clearLocalStorage(){
	localStorage.removeItem(gamename);
};

function set_current_deck(deck){
	if(gamedata['decks'][deck] != undefined)
	{
		gamedata['current_deck'] = deck;
		saveToLocalStorage();
	}
}

function check_online_storage(){
	var latest_local_backup = gamedata['last_backup'];
	$.post("ajax.php",
	{
		data: 				'load_account_by_id',
		current_id: 		gamedata['account_id'],
	},
	function(result){
		if(result != false && count_object(JSON.parse(result)) > 0)
		{
			temp_gamedata = JSON.parse(result);
			//console.log(temp_gamedata['last_backup'] + ' > ' + gamedata['last_backup'] + ' ?');
			if(temp_gamedata['last_backup'] != undefined && new Date(temp_gamedata['last_backup']) > new Date(gamedata['last_backup']))
			{
				gamedata = temp_gamedata;
				console.log('reloaded from server');
				//saveToLocalStorage();
				//location.reload();


			}
			var last_midnight = new Date();
			last_midnight.setHours(0,0,0,0);
			if(gamedata['last_midnight'] == undefined || new Date(gamedata['last_midnight']).getTime() < last_midnight.getTime())
			{
				//console.log('refreshing');
				gamedata['last_midnight'] = last_midnight;
				saveToLocalStorage();
				location.reload();
			}
		}
	});
}