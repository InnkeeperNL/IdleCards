var all_campaigns = {
	
};

var all_chapters = {
	
}

$.each(all_chapters, function(chapter_id, chapter){
	$.each(chapter['deck'], function(card_id, card_amount){
		if(all_available_cards[card_id] == undefined)
		{
			delete all_chapters[chapter_id]['deck'][card_id];
		}
	});
	//all_chapters[chapter_id]['randomise_deck'] = true;
	
});