var gamedata = {};
var gamename = "heroes2";

function loadLocalStorage(){
	if (typeof(localStorage.heroes2) !== "undefined") {
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
	localStorage.removeItem(gamename);
};

function check_local_storage(gamedata){

	if(gamedata['known_locations'] == undefined)
	{
		gamedata['known_locations'] = {};
	}
	if(gamedata['inventory'] == undefined)
	{
		gamedata['inventory'] = {
			attack: 		1,
		};
	}
	if(gamedata['inventory']['attack'] == undefined)
	{
		gamedata['inventory']['attack'] = 1;
	}
	if(gamedata['coins'] == undefined)
	{
		gamedata['coins'] = 0;
	}
	if(gamedata['consumables'] == undefined)
	{
		gamedata['consumables'] = {
			1: 	'attack',
			2: 	false,
			3: 	false,
			4: 	false,
		};
	}
	if(gamedata['equipped_units'] == undefined)
	{
		gamedata['equipped_units'] = {
			1: 	false,
			2: 	false,
			3: 	false,
			4: 	false,
		};
	}

	if(gamedata['equipped_gear'] == undefined)
	{
		gamedata['equipped_gear'] = {
			1: 	false,
			2: 	false,
			3: 	false,
			4: 	false,
			5: 	false,
			6: 	false,
		};
	}

	if(gamedata['equipped_abilities'] == undefined)
	{
		gamedata['equipped_abilities'] = {
			1: 	false,
			2: 	false,
			3: 	'attack',
		};
	}

	if(gamedata['player_image'] == undefined)
	{
		gamedata['player_image'] = 'people/portrait-3353699_640.jpg'
	}

	if(gamedata['player_level'] == undefined)
	{
		gamedata['player_level'] = 1;
	}
	if(gamedata['player_xp'] == undefined)
	{
		gamedata['player_xp'] = 0;
	}
	
	if(gamedata['busy_quests'] == undefined)
	{
		gamedata['busy_quests'] = {};
	}
	if(gamedata['complete_quests'] == undefined)
	{
		gamedata['complete_quests'] = {};
	}
	if(gamedata['done_quests'] == undefined)
	{
		gamedata['done_quests'] = {};
	}
	if(gamedata['current_location'] == undefined)
	{
		gamedata['current_location'] = 'maywell_village';
	}

	if(gamedata['known_recipes'] == undefined)
	{
		gamedata['known_recipes'] = {};
	}

	if(gamedata['workers'] == undefined)
	{
		gamedata['workers'] = {};
	}

	if(gamedata['sale_slots'] == undefined)
	{
		gamedata['sale_slots'] = {};
	}

	if(gamedata['craft_slots'] == undefined)
	{
		gamedata['craft_slots'] = {};
	}
	

}
