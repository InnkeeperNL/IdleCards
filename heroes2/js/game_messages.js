var message_counter = 0;
function show_game_message(message, color){
	message_counter++;
	var temp_message_counter = message_counter + 0;
	if(color == undefined){color = '#fff';}
	var parsed_message = '<div class="game_message game_message_' + temp_message_counter + '" style="color:' + color + '">' + message + '</div>';
	$('.game_messages').append(parsed_message);
	remove_game_message(temp_message_counter);
}

function remove_game_message(message_id){
	setTimeout(function(){
		$('.game_message_' + message_id).slideUp(500,undefined,function(){
			$('.game_message_' + message_id).remove();
		});
	},2000);
	/*setTimeout(function(){
		$('.game_message_' + message_id).remove();
	},3000);*/
}