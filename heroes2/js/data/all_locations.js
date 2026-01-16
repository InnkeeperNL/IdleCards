var all_locations = {
			
		
			
			/*pawnshop:{
				name: 	'Pawnshop',
				description:'A place that buys and sells many shady things.',
				image: 	'locations/facade-2758458_640.jpg',
				parent_location: 	'maywell_village',
				map_position: {col:5,row:2},
				actions:{
				},
				requirements:{
					quests:{
						beat_rascals: 	'done',
					}
				},
			},*/
			darren_shade:{
				name: 	'Darren shade',
				description:'Darren deals in all shady merchandise.',
				image: 	'people/victorian-5448351_640.jpg',
				parent_location: 	'maywell_village',
				map_position: {col:5,row:2},
				actions:{
					culling_thieves: 	true,
				},
				requirements:{
					location_have_actions:{
						darren_shade: 	true,
					}
				},
			},
			
	
}