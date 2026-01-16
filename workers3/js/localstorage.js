var gamedata = {};
var gamename = "workers3";

function loadLocalStorage(){
	if (typeof(localStorage[gamename]) !== "undefined") {
	    console.log('Save game found');
	    var tempgamedata = localStorage.getItem(gamename);
	    //console.log(tempgamedata);
	    gamedata = JSON.parse(tempgamedata);
	    //console.log(gamedata);
	} else {
	    console.log('Sorry! No save game');  
	    saveToLocalStorage();
	}
	//console.log(gamedata);

	check_local_storage(gamedata);

	return gamedata;

};

function saveToLocalStorage(){
	localStorage.removeItem(gamename);
	localStorage.setItem(gamename, JSON.stringify(gamedata));
};

function clearLocalStorage(){
	gamedata = {};
	localStorage.removeItem(gamename);
};

function check_local_storage(gamedata){
	if(gamedata['coins'] == undefined)
	{
		gamedata['coins'] = 0;
		saveToLocalStorage();
	}

	if(gamedata['inventory'] == undefined)
	{
		gamedata['inventory'] = {};
		saveToLocalStorage();
	}

	if(gamedata['owned_locations'] == undefined)
	{
		gamedata['owned_locations'] = {};
		saveToLocalStorage();
	}

	if(gamedata['locked_items'] == undefined)
	{
		gamedata['locked_items'] = {};
		saveToLocalStorage();
	}
	if(gamedata['visible_locations'] == undefined)
	{
		gamedata['visible_locations'] = {};
	}
	if(gamedata['sales_amount'] == undefined)
	{
		gamedata['sales_amount'] = 0;
	}
	if(gamedata['declines_left'] == undefined)
	{
		gamedata['declines_left'] = 0;
	}
	if(gamedata['customer_history'] == undefined)
	{
		gamedata['customer_history'] = {};
	}
	if(gamedata['can_produce'] == undefined)
	{
		gamedata['can_produce'] = {};
	}
	if(gamedata['produced'] == undefined)
	{
		gamedata['produced'] = {};
	}
	if(gamedata['highest_coins'] == undefined)
	{
		gamedata['highest_coins'] = 0;
	}
	if(gamedata['inventory_filters'] == undefined)
	{
		gamedata['inventory_filters'] = {};
	}
}

function delete_account(){
	clearLocalStorage();
	loadLocalStorage();
}