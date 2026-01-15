var floating_text_amount = 0;
var floating_timeouts = {};
var floating_timeout_key = 0;

function parse_floating_text(floating_text, color, down){
	var parsed_floating_text = '';
	if(gamedata['show_gained_items'] == undefined || gamedata['show_gained_items'] == true)
	{
		floating_text_amount++;
		var rotation = Math.floor(Math.random() * 40) + 30;
		rotation = 50;

		if(down == undefined || down == false)
		{
			parsed_floating_text += '<div class="floating_text floating_text_' + floating_text_amount + '" style="left:' + rotation + '%;color:' + color + '">';
		}
		else
		{
			parsed_floating_text += '<div class="floating_text down floating_text_' + floating_text_amount + '" style="left:' + rotation + '%;color:' + color + '">';
		}
		parsed_floating_text += 	floating_text;
		parsed_floating_text += '</div>';

		/*var temp_floating_text_amount = floating_text_amount + '';
		floating_timeout_key++;
		floating_timeouts[floating_timeout_key] = setTimeout(function(){
			$('.floating_text_' + temp_floating_text_amount).remove();
			clearTimeout(floating_timeouts[temp_floating_text_amount]);
			delete floating_timeouts[temp_floating_text_amount];
		},3000);*/
	}

	return parsed_floating_text;
}

function clear_floating_timeouts(){
	eachoa(floating_timeouts, function(timeout_key, timeout_function){
		clearTimeout(floating_timeouts[timeout_key]);
		delete floating_timeouts[timeout_key];
	});
}