var intro_step = 0;

function run_intro(forced){
	if(forced != undefined || gamedata['viewed_intro'] == undefined)
	{
		gamedata['viewed_intro'] = true;
		saveToLocalStorage();
		$('.intro').css('display','block');
		$('.intro').html('');
		$('.intro').append('<div class="skip_intro_button">SKIP</div>');
		$('.main_window').addClass('hidden');
		intro_step = 0;
		show_next_step();
	}
	else
	{
		skip_intro();
	}
}

function show_next_step(){
	var current_step = intro_steps[intro_step];
	var current_step_id = intro_step + 0;
	var parsed_step = '';
	var step_is_text = '';
	if(current_step['text'] != undefined){step_is_text = 'intro_text';}
	parsed_step += '<div class="intro_step step_' + current_step_id + ' ' + step_is_text + '" style="';
		if(current_step['text_size'] != undefined){parsed_step += 'font-size:' + current_step['text_size'] + ';';}
		if(current_step['text_align'] != undefined){parsed_step += 'text-align:' + current_step['text_align'] + ';';}
		if(current_step['start_location'] != undefined){
			$.each(current_step['start_location'], function(location_key, location_info){
				parsed_step += location_key + ':' + location_info + ';';
			});
		}		
		if(current_step['image'] != undefined && current_step['image'] != 'none'){parsed_step += 'background-image:url(images/' + current_step['image'] + ');';}
	parsed_step += '">';
	if(current_step['text'] != undefined)
	{
		parsed_step += '<div class="intro_text">';
		parsed_step += current_step['text'];
		parsed_step += '</div>';
	}
	parsed_step += '</div>';

	setTimeout(function(){
		$('.intro').append(parsed_step);
		setTimeout(function(){
			$('.step_' + current_step_id).addClass('visible');
			adjust_step_position(current_step_id, current_step);
		},50);
		setTimeout(function(){
			$('.step_' + current_step_id).removeClass('visible');
			$('.step_' + current_step_id).css('opacity', '0');
		},current_step['time_on_screen']);
	},current_step['timeout']);

	
	if(intro_steps[intro_step + 1] != undefined)
	{
		intro_step++;
		show_next_step();
	}
	else
	{
		setTimeout(function(){
			skip_intro();
		},current_step['timeout'] + current_step['time_on_screen'] + 2000);
	}
}

function adjust_step_position(current_step_id, current_step){
	$.each(current_step['end_location'], function(location_key, location_info){
		$('.step_' + current_step_id).css(location_key, location_info);
	});
	if(current_step['opacity'] != undefined)
	{
		$('.step_' + current_step_id).css('opacity', current_step['opacity']);
	}
}

function skip_intro(){
	$('.main_window').removeClass('hidden');
	$('.intro').css('display','none');
}

var intro_steps = {
	0:{
		time_on_screen: 	3000,
		text: 				'The Great War is over...',
		start_location: 	{
							left: 	'10%',
							top: 	'30%'
		},
		end_location: 		{
							left: 	'15%',
		},
	},
	1:{
		time_on_screen: 	4000,
		image: 				'corpse_beach',
		image_h: 			'move_left',
		image_v: 			'move_down',
	},
	2:{
		text: 				'The bodies of fathers, sons and brothers are scattered across the land.',
		start_location: 	{
							right: 	'10%',
							bottom: '40%'
		},
		end_location: 		{
							right: 	'15%',
		},
	},
	3:{
		time_on_screen: 	4000,
		image: 				'blood_witch',
		image_v: 			'move_down',
	},
	4:{
		text: 				'Those that survived mourn their loss.',
		start_location: 	{
							left: 	'10%',
							bottom: '10%'
		},
		end_location: 		{
							left: 	'15%',
		},
	},
	5:{
		time_on_screen: 	5000,
		image: 				'haunted_forest',
		image_v: 			'move_up',
	},
	6:{
		text: 				'The gods, either slain or tired, no longer roam the world.',
		start_location: 	{
							right: 	'10%',
							top: '10%'
		},
		end_location: 		{
							right: 	'15%',
		},
	},
	7:{
		time_on_screen: 	6000,
		image: 				'freya',
		image_h: 			'move_right',
		image_v: 			'move_up',
	},
	8:{
		text: 				'This is the time for the godesses to seize power.',
		start_location: 	{
							right: 	'10%',
							bottom: '20%'
		},
		end_location: 		{
							right: 	'15%',
		},
	},
	9:{
		time_on_screen: 	4000,
		image: 				'nun',
		image_h: 			'move_left',
		image_v: 			'move_up',
	},
	10:{
		text: 				'Blessing their followers, they start the war anew.',
		start_location: 	{
							left: 	'10%',
							bottom: '10%'
		},
		end_location: 		{
							left: 	'15%',
		},
	},
	11:{
		time_on_screen: 	4000,
		image: 				'recruitment_angel',
		image_v: 			'move_down',
	},
	12:{
		text: 				'The men gone, they recruit those that are left.',
		start_location: 	{
							left: 	'10%',
							top: 	'10%'
		},
		end_location: 		{
							left: 	'15%',
		},
	},
	13:{
		time_on_screen: 	3000,
		image: 				'battle_warder',
		image_h: 			'move_left',
	},
	14:{
		text: 				'Many great warriors arise to fight for their goddess.',
		start_location: 	{
							right: 	'10%',
							top: '40%'
		},
		end_location: 		{
							right: 	'15%',
		},
	},
	15:{
		time_on_screen: 	3000,
		image: 				'raise_dead',
		image_h: 			'move_right',
		image_v: 			'move_down',
	},
	16:{
		text: 				'The slain are raised...',
		start_location: 	{
							right: 	'10%',
							top: '60%'
		},
		end_location: 		{
							right: 	'15%',
		},
	},
	17:{
		time_on_screen: 	3000,
		image: 				'burning_imp',
		image_h: 			'move_left',
	},
	18:{
		text: 				'Daemons are summoned...',
		start_location: 	{
							left: 	'10%',
							top: '40%'
		},
		end_location: 		{
							left: 	'15%',
		},
	},
	19:{
		time_on_screen: 	6000,
		image: 				'barbarian_elite',
		image_h: 			'move_left',
		image_v: 			'move_up',
	},
	20:{
		text: 				'It is time for war!',
		start_location: 	{
							right: 	'10%',
							bottom: '10%'
		},
		end_location: 		{
							right: 	'15%',
		},
	},
	21:{
		time_on_screen: 	2000,
		text: 				'',
	},
}

var transition_period = 1000;
var step_timeout = 0;
var image_time_on_screen = 0;
eachoa(intro_steps, function(step_number, step_info){
	if(step_info['timeout'] == undefined){step_info['timeout'] = step_timeout;}
	if(step_info['time_on_screen'] == undefined){step_info['time_on_screen'] = image_time_on_screen - transition_period;}
	if(step_info['image'] != undefined && all_available_cards[step_info['image']] != undefined)
	{
		step_info['image'] = all_available_cards[step_info['image']]['image'];
	}
	else
	{
		step_info['image'] = 'none';
	}
	if(step_info['start_location'] == undefined){step_info['start_location'] = {};}
	if(step_info['end_location'] == undefined){step_info['end_location'] = {};}
	if(step_info['image'] != 'none')
	{
		step_info['opacity'] = 0.3;
		if(step_info['image_h'] == 'move_left')
		{
			step_info['start_location']['right'] = '-10%';
			step_info['end_location']['left'] = '-10%';
		}
		if(step_info['image_h'] == 'move_right')
		{
			step_info['start_location']['left'] = '-10%';
			step_info['end_location']['right'] = '-10%';
		}
		if(step_info['image_v'] == 'move_up')
		{
			step_info['start_location']['bottom'] = '-10%';
			step_info['end_location']['top'] = '-10%';
		}
		if(step_info['image_v'] == 'move_down')
		{
			step_info['start_location']['top'] = '-10%';
			step_info['end_location']['bottom'] = '-10%';
		}
		if(step_info['start_location']['left'] == undefined){step_info['start_location']['left'] = '0%';}
		if(step_info['start_location']['right'] == undefined){step_info['start_location']['right'] = '0%';}
		if(step_info['start_location']['top'] == undefined){step_info['start_location']['top'] = '0%';}
		if(step_info['start_location']['bottom'] == undefined){step_info['start_location']['bottom'] = '0%';}
		if(step_info['end_location']['left'] == undefined){step_info['end_location']['left'] = '0%';}
		if(step_info['end_location']['right'] == undefined){step_info['end_location']['right'] = '0%';}
		if(step_info['end_location']['top'] == undefined){step_info['end_location']['top'] = '0%';}
		if(step_info['end_location']['bottom'] == undefined){step_info['end_location']['bottom'] = '0%';}	
		if(step_info['time_on_screen'] != undefined)
		{
			image_time_on_screen = step_info['time_on_screen'];
		}
	}
	else
	{
		if(step_info['time_on_screen'] != undefined)
		{
			//if(step_timeout == 0){step_timeout -= 1000;}
			step_timeout += step_info['time_on_screen'] + transition_period;
			
		}
	}
});