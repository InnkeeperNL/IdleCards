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

	$('.avatar_button').css('background-image','url(images/' + gamedata['player_image'] + ')');
}

function show_select_avatar(){
	$('.select_avatar_container').html('');

	var all_avatars = '';
	all_avatars += parse_possible_avatar('people/portrait-3353699_640.jpg');
	all_avatars += parse_possible_avatar('people/girl-1867092_640.jpg');
	$.each(all_units, function(unit_id, unit_info){
		if(gamedata['inventory'][unit_id] != undefined)
		{
			all_avatars += parse_possible_avatar(unit_info['image']);
		}
	});

	$('.select_avatar_container').html(all_avatars);
}

function parse_possible_avatar(image){
	var possible_avatar = '';
	possible_avatar += '<div class="possible_avatar" style="background-image:url(images/' + image + ')" onclick="set_avatar(\'' + image + '\')"></div>';
	
	return possible_avatar;
}

function set_avatar(image){
	gamedata['player_image'] = image;
	show_content('settings');
}