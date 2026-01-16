var card_themes = {
	mermaid:{
		name: 'water world',
		bg_image: 'woman-3373180_1280.jpg',
		color: '9aa9af',
		gem1: 'agate',
		gem2: 'agate',
		cards:{
			0: 	'mermaid',
			1: 	'mermaid',
			2: 	'mermaid_twin',
			3: 	'sunken_ruins',
			4: 	'mermaid_princess',
			5: 	'mermaid_conjurer',
			6: 	'sleep',
			7: 	'skybreak',
			8: 	'snowfall',
			9: 	'mana_orb',
			10: 	'mermaid',
			11: 	'mermaid',
		}
	},
	fiery_elves:{
		name: 'fiery elves',
		bg_image: 'fantasy-3388999_1280.jpg',
		color: '87c17d',
		gem1: 'emerald',
		gem2: 'ruby',
		cards:{
			0: 	'mountain_elf',
			1: 	'mountain_elf',
			2: 	'elf_healer',
			3: 	'elf_archer',
			4: 	'elf_archer',
			5: 	'giant_growth',
			6: 	'fire_bolt',
			7: 	'magic_blossom',
			8: 	'underground_forest',
			9: 	'plasma_strike',
			10: 	'mountain_elf',
			11: 	'mountain_elf',
		}
	},
	draw_cards:{
		name: 'golden library',
		bg_image: 'library-425730_1280.jpg',
		color: 'a3ad82',
		gem1: 'agate',
		gem2: 'citrine',
		cards:{
			0: 	'polymorph',
			1: 	'mana_mage',
			2: 	'daughter_of_light',
			3: 	'frost_mage',
			4: 	'librarian',
			5: 	'wise_owl',
			6: 	'blessed_owl',
			7: 	'noble_mage',
			8: 	'noble_mage',
			9: 	'library',
			10: 	'librarian',
			11: 	'librarian',
		}
	},
	night_of_the_dead:{
		name: 'night of the dead',
		bg_image: 'fantasy-2847724_1280.jpg',
		color: '2e2235',
		gem1: 'amethist',
		gem2: 'amethist',
		cards:{
			0: 	'haunting_ghost',
			1: 	'haunting_ghost',
			2: 	'spectral_horse',
			3: 	'spectral_horse',
			4: 	'ghost_bride',
			5: 	'ghost_bride',
			6: 	'execution',
			7: 	'vengeful_crypt',
			8: 	'day_of_the_dead',
			9: 	'deaths_call',
			10: 	'haunting_ghost',
			11: 	'haunting_ghost',
		}
	}
};

card_themes = sortObj(card_themes);