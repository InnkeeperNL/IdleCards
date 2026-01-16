function loadLocalStorage(){
	if (typeof(localStorage[gamename]) !== "undefined") {
	    console.log('Save game found');
	    var tempgamedata = localStorage.getItem(gamename);
	    gamedata = JSON.parse(tempgamedata);
	} else {
	    console.log('Sorry! No save game');  
	    saveToLocalStorage();
	}

	check_local_storage(gamedata);

	return gamedata;
};

function saveToLocalStorage(){
	localStorage.removeItem(gamename);
	localStorage.setItem(gamename, JSON.stringify(gamedata));
};

function clearLocalStorage(){
	localStorage.removeItem(gamename);
};

function delete_account(){
	clearLocalStorage();
	gamedata = {};
	loadLocalStorage();
}

function check_local_storage(gamedata){
	if(gamedata['energy'] == undefined)
	{
		gamedata['energy'] = get_max_energy();
	}
	return gamedata;
};