function show_tutorial(tutorial_id){

	if(tutorial_id == 0){
		start_quest('main1_1_1');
		$('.quest_button').hide();
		gamedata['tutorial'][0] = true;
		saveToLocalStorage();

		
		$('.tutorial_screen').addClass('active');

		var intro_text = '';
		intro_text += 'You open your eyes to find yourself in a forest. ';
		intro_text += 'You remember very little, except that there was something very wrong. ';
		intro_text += 'A large dog stands nearby, loudly barking at a small squirrel. That must have been what woke you. ';
		intro_text += 'You should do something about the squirrel...';
		
		showText(".tutorial_screen", intro_text, 0, 20);  

		setTimeout(function(){
			$('.tutorial_screen').append('<div class="close_tutorial">Close</div>');
		},intro_text.length * 20);
	}
}

 $(document).on('click','.close_tutorial',function(){
 	$('.tutorial_screen').removeClass('active');
 });