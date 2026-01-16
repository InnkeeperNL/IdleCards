function play_sound_group(group_id){
	if(gamedata['sound_on'] == undefined)
	{
		gamedata['sound_on'] = true;
	}
	if(all_sound_groups[group_id] != undefined && gamedata['sound_on'] == true)
	{
		var chosen_sound_id = get_random_key_from_object(all_sound_groups[group_id]);
		var chosen_sound = all_sound_groups[group_id][chosen_sound_id];
		if(document.hasFocus()){
			play_sound(chosen_sound['file'],chosen_sound['volume'], group_id + '_' + chosen_sound_id);
		}
	}
}

function toggle_sound(){
	if(gamedata['sound_on'] == undefined)
	{
		gamedata['sound_on'] = true;
	}
	if(gamedata['sound_on'] == true)
	{
		gamedata['sound_on'] = false;
	}
	else
	{
		gamedata['sound_on'] = true;
	}
}