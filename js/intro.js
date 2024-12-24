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
	parsed_step += '<div class="intro_step step_' + current_step_id + '" style="';
		if(current_step['text_size'] != undefined){parsed_step += 'font-size:' + current_step['text_size'] + ';';}
		if(current_step['text_align'] != undefined){parsed_step += 'text-align:' + current_step['text_align'] + ';';}
		if(current_step['start_location'] != undefined){
			$.each(current_step['start_location'], function(location_key, location_info){
				parsed_step += location_key + ':' + location_info + ';';
			});
		}		
		if(current_step['image'] != undefined && current_step['image'] != 'none'){parsed_step += 'background-image:url(' + current_step['image'] + ');';}
	parsed_step += '">';
	if(current_step['text'] != undefined)
	{
		parsed_step += current_step['text'];
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
		timeout: 	0,
		time_on_screen: 2000,
		text: 		'Long ago...',
		text_size: 	'10vw',
		image: 		'none',
		start_location: 	{
							left: 	'10%',
							top: 	'30%'
		},
		end_location: 		{
							left: 	'15%',
							top: 	'30%'
		},
	},
	1:{
		timeout: 			2500,
		time_on_screen: 	3000,
		image: 				'images/cards/butterfly-2049567_640.jpg',
		opacity: 			0.3,
		start_location: 	{
							right: 	'0%',
							top: 	'0%',
							left: 	'0%',
							bottom: '0%',
		},
		end_location: 		{
							right: 	'-5%',
							top: 	'-5%',
							left: 	'-0%',
							bottom: '-0%',
		},
	},
	2:{
		timeout: 	2500,
		time_on_screen: 2000,
		text: 		'There was peace in the world',
		text_size: 	'5vw',
		text_align: 'right',
		image: 		'none',
		start_location: 	{
							right: 	'10%',
							top: 	'60%',
							left:   '-100%',
		},
		end_location: 		{
							right: 	'15%',
							top: 	'60%'
		},
	},
	3:{
		timeout: 			6500,
		time_on_screen: 	3000,
		image: 				'images/cards/fantasy-3366526_640.jpg',
		opacity: 			0.3,
		start_location: 	{
							right: 	'0%',
							top: 	'0%',
							left: 	'0%',
							bottom: '-120%',
		},
		end_location: 		{
							right: 	'-5%',
							top: 	'-0%',
							left: 	'-5%',
							bottom: '-140%',
		},
	},
	4:{
		timeout: 	6000,
		time_on_screen: 3000,
		text: 		'Then man arrived',
		text_size: 	'5vw',
		text_align: 'left',
		image: 		'none',
		start_location: 	{
							left: 	'10%',
							bottom: '20%',
							right:   '-100%',
		},
		end_location: 		{
							left: 	'15%',
							bottom: '20%'
		},
	},
	5:{
		timeout: 			10000,
		time_on_screen: 	3500,
		image: 				'images/cards/confrontation-930744_640.jpg',
		opacity: 			0.3,
		start_location: 	{
							right: 	'-10%',
							top: 	'-0%',
							left: 	'-0%',
							bottom: '-100%',
		},
		end_location: 		{
							right: 	'-0%',
							top: 	'-0%',
							left: 	'-10%',
							bottom: '-100%',
		},
	},
	6:{
		timeout: 	        10000,
		time_on_screen:     2500,
		text: 		'Aggressive by nature...',
		text_size: 	'5vw',
		text_align: 'right',
		image: 		'none',
		start_location: 	{
							left: 	'-110%',
							top:    '20%',
							right:   '10%',
		},
		end_location: 		{
							right: 	'15%',
							top:    '20%'
		},
	},
	7:{
		timeout: 			13000,
		time_on_screen: 	5500,
		image: 				'images/cards/barbarian-4616094_640.jpg',
		opacity: 			0.3,
		start_location: 	{
							right: 	'-0%',
							top: 	'-20%',
							left: 	'-10%',
							bottom: '-80%',
		},
		end_location: 		{
							right: 	'-0%',
							top: 	'-0%',
							left: 	'-0%',
							bottom: '-150%',
		},
	},
	8:{
		timeout: 	        13000,
		time_on_screen:     2500,
		text: 		'men started fighting<br/>amongst themselves',
		text_size: 	'5vw',
		text_align: 'right',
		image: 		'none',
		start_location: 	{
							right: 	'15%',
							top:    '30%',
							left:   '-100%',
		},
		end_location: 		{
							right: 	'20%',
							top:    '30%'
		},
	},
	9:{
		timeout: 	        15000,
		time_on_screen:     2000,
		text: 		'breaking apart into factions',
		text_size: 	'5vw',
		text_align: 'left',
		image: 		'none',
		start_location: 	{
							left: 	'20%',
							top:    '50%',
							right:   '-100%',
		},
		end_location: 		{
							left: 	'25%',
							top:    '50%'
		},
	},
	10:{
		timeout: 			18000,
		time_on_screen: 	3500,
		image: 				'images/cards/farewell-587277_1280.jpg',
		opacity: 			0.3,
		start_location: 	{
							right: 	'-0%',
							top: 	'-50%',
							left: 	'-0%',
							bottom: '-0%',
		},
		end_location: 		{
							right: 	'-20%',
							top: 	'-60%',
							left: 	'-0%',
							bottom: '-0%',
		},
	},
	11:{
		timeout: 	        18000,
		time_on_screen:     2500,
		text: 		'Some kept the old ways',
		text_size: 	'5vw',
		text_align: 'left',
		image: 		'none',
		start_location: 	{
							left: 	'10%',
							top:    '70%',
							right:   '-100%',
		},
		end_location: 		{
							left: 	'15%',
		},
	},
	12:{
		timeout: 			21000,
		time_on_screen: 	3500,
		image: 				'images/cards/fantasy-2961723_640.jpg',
		opacity: 			0.3,
		start_location: 	{
							right: 	'-0%',
							top: 	'-0%',
							left: 	'-0%',
							bottom: '-80%',
		},
		end_location: 		{
							right: 	'-10%',
							top: 	'-0%',
							left: 	'-10%',
							bottom: '-110%',
		},
	},
	13:{
		timeout: 	        21000,
		time_on_screen:     2500,
		text: 		'Some embraced nature',
		text_size: 	'5vw',
		text_align: 'right',
		image: 		'none',
		start_location: 	{
							right: 	'10%',
							top:    '10%',
							left:   '-100%',
		},
		end_location: 		{
							right: 	'15%',
		},
	},
	14:{
		timeout: 			24000,
		time_on_screen: 	3500,
		image: 				'images/cards/fantasy-1390177_1280.jpg',
		opacity: 			0.3,
		start_location: 	{
							right: 	'-0%',
							top: 	'-0%',
							left: 	'-0%',
							bottom: '-60%',
		},
		end_location: 		{
							right: 	'-10%',
							top: 	'-0%',
							left: 	'-0%',
							bottom: '-90%',
		},
	},
	15:{
		timeout: 	        24000,
		time_on_screen:     2500,
		text: 		'Some sought magic in the north',
		text_size: 	'5vw',
		text_align: 'left',
		image: 		'none',
		start_location: 	{
							left: 	'10%',
							bottom:  '10%',
							right:   '-100%',
		},
		end_location: 		{
							left: 	'15%',
		},
	},
	16:{
		timeout: 			27000,
		time_on_screen: 	3500,
		image: 				'images/cards/castle-832543_640.jpg',
		opacity: 			0.3,
		start_location: 	{
							right: 	'-10%',
							top: 	'-0%',
							left: 	'-10%',
							bottom: '-20%',
		},
		end_location: 		{
							right: 	'-0%',
							top: 	'-20%',
							left: 	'-0%',
							bottom: '-0%',
		},
	},
	17:{
		timeout: 	        27000,
		time_on_screen:     2500,
		text: 		'Some found a god to worship',
		text_size: 	'5vw',
		text_align: 'right',
		image: 		'none',
		start_location: 	{
							right: 	'10%',
							top:    '10%',
							left:   '-100%',
		},
		end_location: 		{
							right: 	'15%',
		},
	},
	18:{
		timeout: 			30000,
		time_on_screen: 	3500,
		image: 				'images/cards/monster-5369480_640.jpg',
		opacity: 			0.3,
		start_location: 	{
							right: 	'-0%',
							top: 	'-0%',
							left: 	'-20%',
							bottom: '-200%',
		},
		end_location: 		{
							right: 	'-0%',
							top: 	'-0%',
							left: 	'-10%',
							bottom: '-150%',
		},
	},
	19:{
		timeout: 	        30000,
		time_on_screen:     2500,
		text: 		'Others embraced darkness',
		text_size: 	'5vw',
		text_align: 'left',
		image: 		'none',
		start_location: 	{
							left: 	'10%',
							bottom:  '10%',
							right:   '-100%',
		},
		end_location: 		{
							left: 	'15%',
		},
	},
	20:{
		timeout: 			33000,
		time_on_screen: 	3500,
		image: 				'images/cards/fire-2648873_640.jpg',
		opacity: 			0.3,
		start_location: 	{
							right: 	'-0%',
							top: 	'-0%',
							left: 	'-0%',
							bottom: '-60%',
		},
		end_location: 		{
							right: 	'-10%',
							top: 	'-30%',
							left: 	'-10%',
							bottom: '-30%',
		},
	},
	21:{
		timeout: 	        33000,
		time_on_screen:     2500,
		text: 		'or just wanted the world to burn',
		text_size: 	'5vw',
		text_align: 'left',
		image: 		'none',
		start_location: 	{
							left: 	'10%',
							top:  	'10%',
							right:   '-100%',
		},
		end_location: 		{
							left: 	'15%',
		},
	},
	22:{
		timeout: 	        37000,
		time_on_screen:     2500,
		text: 		'After many years of war...',
		text_size: 	'5vw',
		text_align: 'left',
		image: 		'none',
		start_location: 	{
							left: 	'10%',
							bottom:  '10%',
							right:   '-100%',
		},
		end_location: 		{
							left: 	'15%',
		},
	},
	23:{
		timeout: 			39000,
		time_on_screen: 	8000,
		image: 				'images/cards/take-532097_640.jpg',
		opacity: 			0.3,
		start_location: 	{
							right: 	'-0%',
							top: 	'-0%',
							left: 	'-0%',
							bottom: '-60%',
		},
		end_location: 		{
							right: 	'-10%',
							top: 	'-30%',
							left: 	'-10%',
							bottom: '-30%',
		},
	},
	24:{
		timeout: 	        40000,
		time_on_screen:     2500,
		text: 		'a hero dreamt of a book',
		text_size: 	'5vw',
		text_align: 'left',
		image: 		'none',
		start_location: 	{
							left: 	'10%',
							top:  	'10%',
							right:   '-100%',
		},
		end_location: 		{
							left: 	'15%',
		},
	},
	25:{
		timeout: 	        42000,
		time_on_screen:     2500,
		text: 		'that would let him bring man together',
		text_size: 	'5vw',
		text_align: 'left',
		image: 		'none',
		start_location: 	{
							left: 	'10%',
							top:  	'40%',
							right:   '-100%',
		},
		end_location: 		{
							left: 	'15%',
		},
	},
	26:{
		timeout: 	        45000,
		time_on_screen:     2500,
		text: 		'The question is...',
		text_size: 	'5vw',
		text_align: 'right',
		image: 		'none',
		start_location: 	{
							right: 	'10%',
							top:  	'10%',
							left:   '-100%',
		},
		end_location: 		{
							right: 	'15%',
		},
	},
	27:{
		timeout: 	        48000,
		time_on_screen:     4000,
		text: 		'Will you?',
		text_size: 	'5vw',
		text_align: 'center',
		image: 		'none',
		start_location: 	{
							right: 	'0%',
							top:  	'40%',
							left:   '0%',
		},
		end_location: 		{
		},
	},
}

