function show_settings(){
	if(gamedata['sound_on'] == undefined)
	{
		gamedata['sound_on'] = true;
	}

	if(gamedata['sound_on'] == true)
	{
		$('.sound_button').removeClass('danger');
	}
	else
	{
		$('.sound_button').addClass('danger');
	}
}