var gamedata = {};
var gamename = "shop";
var saving_data = false;

function loadLocalStorage(){
	if (typeof(localStorage.shop) !== "undefined") {
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

var last_save = new Date();

function saveToLocalStorage(){
	/*var time_since_last_save = new Date - last_save;
	if(gamedata['known_locations'] != undefined && count_object(gamedata['known_locations']) > 0 && time_since_last_save > 1000)
	{
		last_save = new Date;
		localStorage.removeItem(gamename);
		localStorage.setItem(gamename, JSON.stringify(gamedata));
	}*/
};

function saveToLS(){
	var time_since_last_save = new Date - last_save;
	if(gamedata['known_locations'] != undefined && count_object(gamedata['known_locations']) > 0 && time_since_last_save > 1000)
	{
		last_save = new Date;
		localStorage.removeItem(gamename);
		localStorage.setItem(gamename, JSON.stringify(gamedata));
	}
};

function clearLocalStorage(){
	gamedata = {};
	localStorage.removeItem(gamename);
};

function check_local_storage(gamedata){

	if(gamedata['exploration'] == undefined)
	{
		var d = new Date();
		var n = d.getTime();

		gamedata['exploration'] = {
			successful_explores: 	0,
			last_checked: 			n,
			current_progress: 		0,
			progress_per_sec: 		0
		}
	}

	if(gamedata['known_locations'] == undefined)
	{
		gamedata['known_locations'] = {};
	}

	if(gamedata['version'] == undefined || gamedata['version'] < 0.1)
	{
		gamedata['version'] = 0.1;
		eachoa(gamedata['skills'], function(skill_id, skill_info){
			skill_info['level'] = Math.ceil(skill_info['level'] / 10);
		});
	}

	eachoa(gamedata['inventory'], function(item_id, amount){
		if(Math.floor(amount) < amount)
		{
			gamedata['inventory'][item_id] = Math.floor(amount);
		}
	});

	if(gamedata['gained_items'] == undefined)
	{
		gamedata['gained_items'] = {};
	}
}