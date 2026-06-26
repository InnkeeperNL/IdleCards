var all_available_cards = {

	alchemist:{
		name: 				'alchemist',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				['subtype_potion'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/alchemist.jpg',
		image_position: 	'right',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, brew_potion: 2},
		hero_version: 			{
			theme: 				['subtype_potion'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, brew_potion: 2},
		},
		quote: '\"You never know what the result will be.\"',
	},
	apprentice:{
		name: 				'apprentice',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/apprentice.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{arcane_bolt: 1},
		hero_version: 			{
			theme: 				['subtype_mage','subtype_arcane','damaging_hero'],
			not_theme: 			['empower_hero_ability','empower_ally_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 2},
		},
		quote: '\"She is starting to learn.\"',
	},
	arcane_bolts:{
		name: 				'arcane bolts',
		type: 				'spell',
		subtypes: 			['arcane'],
		color: 				['colorless'],
		theme: 				['subtype_mage'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/arcane_bolts.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{arcane_bolt: 5},
		quote: '\"Release the energy!\"',
		max_in_deck: 		2,
	},
	arcane_mage:{
		name: 				'arcane mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				['type_spell'],
		needs_theme: 		['type_spell'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/arcane_mage.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{arcane_bolt: 1, spell_bolt: 1},
		hero_version: 			{
			theme: 				['subtype_mage','subtype_arcane','type_spell','echo_ability','damaging_hero'],
			not_theme: 			['empower_hero_ability','empower_ally_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 1, spell_bolt_hv: 1},
		},
		quote: '\"She controls the magical energy.\"',
	},
	arcane_tower:{
		name: 				'arcane tower',
		type: 				'structure',
		subtypes: 			['wall','arcane'],
		color: 				['colorless'],
		theme: 				[],
		needs_theme: 		['gain_mana_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/arcane_tower.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{arcane_bolt: 1},
		hero_version: 			{
			theme: 				['subtype_mage','subtype_arcane','damaging_hero'],
			not_theme: 			['empower_hero_ability','empower_ally_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 2},
		},
		quote: '\"Do not go near it.\"',
	},
	archer:{
		name: 				'archer',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/archer.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{shoot: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1},
		},
		quote: '\"Keep your distance.\"',
	},
	armaments:{
		name: 				'armaments',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				['subtype_warrior','aoe'],
		not_theme: 			['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/armaments.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{empower_all: 1, fortify_all: 1, minimum_allies: 3},
		quote: '\"Ready for a fight!\"',
		max_in_deck: 		2,
	},
	arsonist:{
		name: 				'arsonist',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				['stun_ability'],
		needs_theme: 		['stun_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/arsonist.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, ignites: 1, burning_stuns: 1},
		hero_version: 			{
			theme: 				['burn_ability','stun_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, ignites: 1, burning_stuns_hv: 1},
		},
		quote: '\"When you see an opportunity, you light it.\"',
	},
	bad_omen:{
		name: 				'bad omen',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/bad_omen.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{curse: 2, echo: 1},
		quote: '\"You know what is coming.\"',
	},
	badger:{
		name: 				'badger',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/badger.jpg',
		image_position: 	'left',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['subtype_animal'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"Strong and very aggressive.\"',
	},
	blacksmith:{
		name: 				'blacksmith',
		type: 				'creature',
		subtypes: 			['human','villager'],
		color: 				['colorless'],
		theme: 				['type_creature'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/blacksmith.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, empower_ally: 1},
		hero_version: 			{
			theme: 				['melee_ability','type_creature'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, empower_ally: 1},
		},
		quote: '\"He can forge great weapons.\"',
	},
	blight_rat:{
		name: 				'blight rat',
		type: 				'creature',
		subtypes: 			['animal','rat'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/blight_rat.jpg',
		image_position: 	'top left',
		power: 				2,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, cursed_touch: 2, venom: 2, spread_blight: 1, call_rat: 2, evade: 4},
		hero_version: 			{
			theme: 				['poison_ability','curse_ability','subtype_rat'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, cursed_touch: 1, venom: 1, spread_blight: 1, call_rat: 1, evade: 4},
		},
		quote: '\"The bite will end you.\"',
	},
	blossom:{
		name: 				'blossom',
		type: 				'spell',
		subtypes: 			['plant'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/blossom.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{cleanse: 2, heal: 1, echo: 1},
		quote: '\"So pretty!\"',
		max_in_deck: 		2,
	},
	blue_ooze:{
		name: 				'blue ooze',
		type: 				'creature',
		subtypes: 			['slime'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/blue_ooze.jpg',
		image_position: 	'top',
		power: 				4,
		armor: 				0,
		health: 			12,
		abilities: 			{strike: 1, cursed_touch: 1, venom: 1, stunning_touch: 5, spread_slime: 1},
		hero_version: 			{
			theme: 				['subtype_slime','stun_ability','curse_ability', 'poison_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, cursed_touch: 1, venom: 1, stunning_touch: 5},
		},
		quote: '\"Cursed and toxic stickiness.\"',
	},
	boar:{
		name: 				'boar',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/boar.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{charge: 1, strike: 1},
		hero_version: 			{
			theme: 				['empower_ally_ability','subtype_animal'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage_hv: 1},
		},
		quote: '\"Do not give it any room.\"',
	},
	bottle_of_poison:{
		name: 				'bottle of poison',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				['damaging_hero','poison_ability'],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/bottle_of_poison.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{quicken_poison_hv: 1, venomous_hero: 3},
		quote: '\"Careful not to spill that.\"',
	},
	breaking_ray:{
		name: 				'breaking ray',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				['subtype_rogue'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/breaking_ray.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{break: 1, echo: 1},
		quote: '\"There was a bright light... Then it was broken.\"',
	},
	brew_potion:{
		name: 				'brew potion',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				['subtype_potion'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/brew_potion.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{brew_potion: 10, echo: 1},
		quote: '\"Now add the eye of newt.\"',
	},
	brown_bear:{
		name: 				'brown bear',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/brown_bear.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['subtype_animal'],
			not_theme: 			[],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"Do not mess with that.\"',
	},
	burning_skeleton:{
		name: 				'burning skeleton',
		type: 				'creature',
		subtypes: 			['undead'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/burning_skeleton.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, ignites: 1, burning_aura: 1, resurrect: 8, undead: 1},
		hero_version: 			{
			theme: 				['subtype_undead','burn_ability','ally_creature_death_proc_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, ignites: 1, burning_aura: 1, resurrect: 10, undead: 1},
		},
		quote: '\"Did you hear that story of that guy that jumped into the volcano?\"',
	},
	carpenter:{
		name: 				'carpenter',
		type: 				'creature',
		subtypes: 			['human','villager'],
		color: 				['colorless'],
		theme: 				['type_structure'],
		needs_theme: 		['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/carpenter.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, repair: 1},
		hero_version: 			{
			theme: 				['type_structure'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, repair: 1},
		},
		quote: '\"I am sure we can fix that.\"',
		recipe:{
			hammer: 		2,
			torchbearer: 	2,
		}
	},
	cauldron:{
		name: 				'cauldron',
		type: 				'artifact',
		subtypes: 			['tool'],
		color: 				['colorless'],
		theme: 				['subtype_potion'],
		needs_theme: 		[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/cauldron.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{brew_potion: 2},
		quote: '\"Do we need an eye of newt?\"',
		max_in_deck: 2,
	},
	cavalry:{
		name: 				'cavalry',
		type: 				'creature',
		subtypes: 			['animal','human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/cavalry.jpg',
		image_position: 	'top',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{charge: 1, strike: 1},
		hero_version: 			{
			theme: 				['movement_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, ally_charges: 1},
		},
		quote: '\"Time to send in the cavalry!\"',
	},
	cursed_scarecrow:{
		name: 				'cursed scarecrow',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['damaging_hero'],
		craft_theme: 		[],
		pick_chance: 		0,
		time: 				1,
		image: 				'cards/cursed_scarecrow.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, cursed_touch: 2, fearful_aura: 1, turn_scarecrow: 1},
		quote: '\"It scares away more then just crows.\"',
	},
	cursed_talisman:{
		name: 				'cursed talisman',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/cursed_talisman.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{curse_hv: 2},
		quote: '\"Worn by many witches.\"',
	},
	dagger:{
		name: 				'dagger',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				['subtype_rogue','damaging_hero'],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dagger.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{stabbing_hero: 3},
		quote: '\"For quick strikes.\"',
		max_in_deck: 		2,
	},
	dark_night:{
		name: 				'dark night',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dark_night.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{curse_all_hv: 1, destroy_cursed: 5, echo: 1},
		quote: '\"Make sure you come home before dark.\"',
		max_in_deck: 1,
	},
	dark_rat:{
		name: 				'dark rat',
		type: 				'creature',
		subtypes: 			['animal','rat'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dark_rat.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, cursed_touch: 1, spread_darkness: 1, call_rat: 2, evade: 4},
		hero_version: 			{
			theme: 				['curse_ability','subtype_rat'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, cursed_touch: 1, spread_darkness: 1, call_rat: 1, evade: 4},
		},
		quote: '\"The bite will fester.\"',
	},
	dark_rogue:{
		name: 				'dark rogue',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dark_rogue.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, cursed_touch: 2, evade: 3},
		hero_version: 			{
			theme: 				['subtype_rogue','curse_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, cursed_touch: 2, evade: 3},
		},
		quote: '\"Her strikes leave a mark.\"',
	},
	dark_tower:{
		name: 				'dark tower',
		type: 				'structure',
		subtypes: 			['wall','tower'],
		color: 				['colorless'],
		theme: 				['subtype_witch'],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dark_tower.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			7,
		abilities: 			{curse_all: 1, cursed_aura: 1},
		hero_version: 			{
			theme: 				['subtype_witch', 'projectile_ability','heal_hero_ability'],
			not_theme: 			['empower_hero_ability','damaging_hero'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_all_hv: 1, cursed_aura: 2},
		},
		quote: '\"They say an ancient witch used to live there.\"',
	},
	dark_witch:{
		name: 				'dark witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dark_witch.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{curse_all: 1, destroy_cursed: 8, strike: 1},
		hero_version: 			{
			theme: 				['curse_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_all_hv: 1, destroy_cursed: 8, strike_unit: 1},
		},
		quote: '\"You will be consumed by darkness.\"',
	},
	death_cleric:{
		name: 				'death cleric',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/death_cleric.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, resurrect_ally: 2},
		hero_version: 			{
			theme: 				['ally_creature_death_proc_ability','own_death_proc_ability','summon_creature_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, resurrect_ally: 2},
		},
		quote: '\"There is serenity in death.\"',
	},
	eruption:{
		name: 				'eruption',
		type: 				'spell',
		subtypes: 			['event'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/volcano.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{burn_all_hv: 3, minimum_enemies: 3},
		quote: '\"Run away!\"',
	},
	fire_assassin:{
		name: 				'fire assassin',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/fire_assassin.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, ignites: 1, run_away: 1, evade: 3, stealth: 1},
		hero_version: 			{
			theme: 				['subtype_rogue','burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, ignites: 1, evade: 3},
		},
		quote: '\"You will not see him until you feel it burn.\"',
	},
	fire_cleric:{
		name: 				'fire cleric',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/fire_cleric.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, burning_deaths: 1},
		hero_version: 			{
			theme: 				['ally_creature_death_proc_ability','own_death_proc_ability','summon_creature_ability','burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, burning_deaths_hv: 1},
		},
		quote: '\"You may kill us, but you will burn.\"',
	},
	fire_mage:{
		name: 				'fire mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/fire_mage.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{burn: 1, conflagrate: 1, resist_fire: 1},
		hero_version: 			{
			theme: 				['burn_ability'],
			not_theme: 			['empower_hero_ability','empower_ally_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{burn_hv: 1, conflagrate_hv: 1, resist_fire: 1},
		},
		quote: '\"She can control the fire.\"',
	},
	fire_pit:{
		name: 				'fire pit',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/fire_pit.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{burning_aura: 2},
		hero_version: 			{
			theme: 				['burn_ability','heal_hero_ability','run_away_ability'],
			not_theme: 			['empower_hero_ability','damaging_hero'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{burning_aura: 2},
		},
		quote: '\"Come warm yourself.\"',
	},
	fire_witch:{
		name: 				'fire witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/fire_witch.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{curse: 1, strike: 1, burn: 1},
		hero_version: 			{
			theme: 				['curse_ability','burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_hv: 1, strike_unit: 1, burn_hv: 1},
		},
		quote: '\"She uses dark fire.\"',
	},
	flame_archer:{
		name: 				'flame archer',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/flame_archer.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{shoot: 1, ignites: 1},
		hero_version: 			{
			theme: 				['projectile_ability','burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, ignites: 1},
		},
		quote: '\"Set it aflame from afar.\"',
	},
	flame_boar:{
		name: 				'flame boar',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/flame_boar.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{charge: 1, strike: 1, ignites: 2},
		hero_version: 			{
			theme: 				['burn_ability','subtype_animal','empower_ally_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage_hv: 1, ignites: 1},
		},
		quote: '\"I saw a flame running through the forest.\"',
	},
	flame_dagger:{
		name: 				'flame dagger',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				['damaging_hero'],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/flame_dagger.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{igniting_hero: 3},
		quote: '\"It can be used to light a fire or stab a foe.\"',
	},
	flame_rogue:{
		name: 				'flame rogue',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/flame_rogue.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, ignites: 1, evade: 3},
		hero_version: 			{
			theme: 				['subtype_rogue','burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, ignites: 1, evade: 3},
		},
		quote: '\"Quick hot strikes.\"',
	},
	flame_warrior:{
		name: 				'flame warrior',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/flame_warrior.jpg',
		image_position: 	'top',
		power: 				3,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, ignites: 2},
		hero_version: 			{
			theme: 				['burn_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, ignites: 2},
		},
		quote: '\"Which hurts more, the blade or the flame?\"',
	},
	flaming_sword:{
		name: 				'flaming sword',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				['empower_hero_ability','damaging_hero'],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/flaming_sword.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{empower_hero: 1, igniting_hero: 3},
		quote: '\"Strike the enemy and set them ablaze!\"',
	},
	forest_witch:{
		name: 				'forest witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/forest_witch.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{curse: 1, strike: 1, cleanse: 1},
		hero_version: 			{
			theme: 				['curse_ability','cleanse_ally_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_hv: 1, strike_unit: 1, cleanse: 2},
		},
		quote: '\"She must come from a dark forest.\"',
	},
	furnace:{
		name: 				'furnace',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/furnace.jpg',
		image_position: 	'right',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{burn: 2},
		hero_version: 			{
			theme: 				['burn_ability','type_structure'],
			not_theme: 			['empower_hero_ability','damaging_hero'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{burn_hv: 2},
		},
		quote: '\"Careful! Hot!\"',
	},
	grand_healing_potion:{
		name: 				'grand healing potion',
		type: 				'artifact',
		subtypes: 			['potion'],
		color: 				['colorless'],
		theme: 				[],
		needs_theme: 		[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/grand_healing_potion.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{health_drink: 15, fragile_if_empty: 1},
		effects:{
			mana: 	1,
		},
		quote: '\"Hold on to it. It will save your life!\"',
	},
	grasping_vines:{
		name: 				'grasping vines',
		type: 				'spell',
		subtypes: 			['plant'],
		color: 				['colorless'],
		theme: 				['stun_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/grasping_vines.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{stun: 1, echo: 1},
		quote: '\"The jungle is a dangerous place.\"',
	},
	green_ooze:{
		name: 				'green ooze',
		type: 				'creature',
		subtypes: 			['slime'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/green_ooze.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, venom: 1, stunning_touch: 5, spread_slime: 1},
		hero_version: 			{
			theme: 				['subtype_slime','stun_ability','poison_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, venom: 1, stunning_touch: 5},
		},
		quote: '\"Toxic stickiness.\"',
	},
	grinning_witch:{
		name: 				'grinning witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		needs_theme: 		['stun_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/grinning_witch.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, cursed_stuns: 2},
		hero_version: 			{
			theme: 				['stun_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, cursed_stuns_hv: 2},
		},
		quote: '\"It seems you are having a bad day.\"',
	},
	hammer:{
		name: 				'hammer',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				['type_structure'],
		needs_theme: 		['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/hammer.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{repair: 1},
		quote: '\"A usefull tool.\"',
	},
	healing_potion:{
		name: 				'healing potion',
		type: 				'artifact',
		subtypes: 			['potion'],
		color: 				['colorless'],
		theme: 				[],
		needs_theme: 		[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/healing_potion.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{health_drink: 7, fragile_if_empty: 1},
		effects:{
			mana: 	1,
		},
		quote: '\"Drink when in need.\"',
	},
	herbalist:{
		name: 				'herbalist',
		type: 				'creature',
		subtypes: 			['human','villager'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/herbalist.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, poison: 1, cleanse: 1},
		hero_version: 			{
			theme: 				['poison_ability','cleanse_ally_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, poison_hv: 1, cleanse: 1},
		},
		quote: '\"There are so many uses for those plants.\"',
	},
	herbs:{
		name: 				'herbs',
		type: 				'artifact',
		subtypes: 			['plant'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/herbs.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{cleanse: 2},
		quote: '\"They have medicinal purposes.\"',
	},
	hideout:{
		name: 				'hideout',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				['subtype_rogue','evade_ability'],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/hideout.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{hide_ally: 1, echo: 1},
		quote: '\"Sometimes, you just have to hide.\"',
	},
	high_witch:{
		name: 				'high witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/high_witch.jpg',
		power: 				1,
		armor: 				0,
		health: 			8,
		abilities: 			{curse_all: 1, strike: 1, call_witch: 2},
		hero_version: 			{
			theme: 				['subtype_witch'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_all_hv: 1, strike_unit: 1, call_witch: 1},
		},
		quote: '\"Leader of witches.\"',
	},
	horse:{
		name: 				'horse',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/horse.jpg',
		image_position: 	'top left',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{charge: 1, strike: 1},
		hero_version: 			{
			theme: 				['subtype_animal','movement_ability'],
			not_theme: 			[],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, ally_charges: 1},
		},
		quote: '\"A mighty beast of the plains.\"',
	},
	house:{
		name: 				'house',
		type: 				'structure',
		subtypes: 			['wall','villager'],
		color: 				['colorless'],
		theme: 				['type_creature'],
		not_theme: 			['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/house.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{heal: 1, cleanse: 1, fortify_ally: 1},
		hero_version: 			{
			theme: 				['type_creature','active_healing_ability'],
			not_theme: 			['empower_hero_ability','type_structure','damaging_hero'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{heal: 1, cleanse: 1, fortify_ally: 1},
		},
		quote: '\"A nice place to rest.\"',
	},
	ignite:{
		name: 				'ignite',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/ignite.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{burn: 1, draw_on_act: 1},
		quote: '\"Lets light the fire.\"',
		max_in_deck: 		2,
	},
	leaf_cleric:{
		name: 				'leaf cleric',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/leaf_cleric.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, regenerating_deaths: 1},
		hero_version: 			{
			theme: 				['ally_creature_death_proc_ability','own_death_proc_ability','summon_creature_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, regenerating_deaths: 1},
		},
		quote: '\"We may fall, but we will regrow.\"',
	},
	leafy_potion:{
		name: 				'leafy potion',
		type: 				'artifact',
		subtypes: 			['potion','plant'],
		color: 				['colorless'],
		theme: 				['heal_hero_ability'],
		needs_theme: 		[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/leafy_potion.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{leafy_drink: 4, fragile_if_empty: 1},
		effects:{
			mana: 	1,
		},
		quote: '\"Has a herbal taste.\"',
	},
	magic_dust:{
		name: 				'magic dust',
		type: 				'spell',
		subtypes: 			['arcane'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/magic_dust.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{hasten_all: 1, echo: 1},
		quote: '\"A sprinkle of magic.\"',
		max_in_deck: 		1,
	},
	mana_beetle:{
		name: 				'mana beetle',
		type: 				'creature',
		subtypes: 			['animal','insect'],
		color: 				['colorless'],
		theme: 				['type_spell'],
		needs_theme: 		['type_spell'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/mana_beetle.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, spellrush: 1},
		hero_version: 			{
			theme: 				['summon_ally_ability','subtype_animal','echo_ability','type_spell'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, spellrush: 1},
		},
		quote: '\"Those wander around mana pools.\"',
	},
	mana_cleric:{
		name: 				'mana cleric',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/mana_cleric.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, hastening_deaths: 1},
		hero_version: 			{
			theme: 				['ally_creature_death_proc_ability','own_death_proc_ability','summon_creature_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, hastening_deaths: 1},
		},
		quote: '\"Your spirit will be turned into energy.\"',
	},
	mana_orb:{
		name: 				'mana orb',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				['type_spell','echo_ability'],
		needs_theme: 		['type_spell'],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/mana_orb.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{spell_bolt_hv: 1, spellrush: 1},
		quote: '\"Endless magical energy.\"',
	},
	mana_pool:{
		name: 				'mana pool',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/mana_pool.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{cleansing_spells: 1, spellrush: 1},
		hero_version: 			{
			theme: 				['summon_ally_ability','echo_ability','type_spell'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{cleansing_spells: 3, spellrush: 2},
		},
		quote: '\"So this is where they fill the mana potions.\"',
	},
	mana_potion:{
		name: 				'mana potion',
		type: 				'artifact',
		subtypes: 			['potion'],
		color: 				['colorless'],
		theme: 				['draw_cards_ability'],
		needs_theme: 		[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/mana_potion.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{mana_drink: 2, fragile_if_empty: 1},
		effects:{
			mana: 	1,
		},
		quote: '\"Drinking this will fill you with energy.\"',
	},
	meadow:{
		name: 				'meadow',
		type: 				'structure',
		subtypes: 			['plant'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/meadow.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{grow_plant: 3},
		hero_version: 			{
			theme: 				['type_creature','subtype_plant'],
			not_theme: 			['empower_hero_ability','damaging_hero'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{grow_plant: 3},
		},
		quote: '\"Look at all the pretty flowers!\"',
	},
	messenger:{
		name: 				'messenger',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/messenger.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{run_away: 1, strike: 1, draw_on_play: 1},
		hero_version: 			{
			theme: 				['draw_cards_ability','hasten_ability','summon_ally_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 3, draw: 1},
		},
		quote: '\"I bring an urgent message!\"',
	},
	miner:{
		name: 				'miner',
		type: 				'creature',
		subtypes: 			['human','villager'],
		color: 				['colorless'],
		theme: 				['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/miner.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, demolish: 1},
		hero_version: 			{
			theme: 				['subtype_human','type_structure','demolish_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, demolish: 1},
		},
		quote: '\"Do not let them get near the wall.\"',
	},
	orange_ooze:{
		name: 				'orange ooze',
		type: 				'creature',
		subtypes: 			['slime'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/orange_ooze.jpg',
		image_position: 	'top',
		power: 				4,
		armor: 				0,
		health: 			12,
		abilities: 			{strike: 1, cursed_touch: 1, ignites: 1, stunning_touch: 5, spread_slime: 1},
		hero_version: 			{
			theme: 				['subtype_slime','stun_ability','burn_ability','curse_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, cursed_touch: 1, ignites: 1, stunning_touch: 5},
		},
		quote: '\"Cursed and hot stickiness.\"',
	},
	peasant:{
		name: 				'peasant',
		type: 				'creature',
		value: 				1,
		subtypes: 			['human','villager'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard25.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['subtype_human'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"They do not want to fight, but will defend their home.\"',
	},
	plague_rat:{
		name: 				'plague rat',
		type: 				'creature',
		subtypes: 			['animal','rat'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/plague_rat.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, venom: 1, spread_plague: 1, call_rat: 2, evade: 4},
		hero_version: 			{
			theme: 				['poison_ability','subtype_rat'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, venom: 1, spread_plague: 1, call_rat: 1, evade: 4},
		},
		quote: '\"The bite is just the start.\"',
	},
	plague_skeleton:{
		name: 				'plague skeleton',
		type: 				'creature',
		subtypes: 			['undead'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/plague_skeleton.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, venom: 2, resurrect: 8, undead: 1},
		hero_version: 			{
			theme: 				['subtype_undead','poison_ability','ally_creature_death_proc_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, venom: 2, resurrect: 10, undead: 1},
		},
		quote: '\"After the plague ended, they started it anew.\"',
		recipe:{
			bottle_of_poison: 	2,
			slimy_skeleton: 	2,
		}
	},
	poison_fever:{
		name: 				'poison fever',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				['poison_ability'],
		needs_theme: 		['poison_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/poison_fever.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{quicken_poison: 2, echo: 1},
		quote: '\"Are you feeling okay?\"',
		max_in_deck: 		2,
	},
	poison_gas:{
		name: 				'poison gas',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				['poison_ability','aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/poison_gas.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{poison_all_hv: 3, minimum_enemies: 3},
		quote: '\"What is that smell?\"',
		max_in_deck: 2,
	},
	poison_witch:{
		name: 				'poison witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/poison_witch.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{curse: 1, strike: 1, poison: 1},
		hero_version: 			{
			theme: 				['curse_ability','poison_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_hv: 1, strike_unit: 1, poison_hv: 1},
		},
		quote: '\"She uses dark poison.\"',
	},
	protective_bubble:{
		name: 				'protective bubble',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/protective_bubble.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fortify_all: 1, echo: 1},
		quote: '\"It will keep you safe.\"',
		max_in_deck: 		1,
	},
	pure_potion:{
		name: 				'pure potion',
		type: 				'artifact',
		subtypes: 			['potion'],
		color: 				['colorless'],
		theme: 				[],
		needs_theme: 		[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/pure_potion.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{pure_drink: 3, fragile_if_empty: 1},
		effects:{
			mana: 	1,
		},
		max_in_deck: 		1,
		quote: '\"Made with the water from a crystal spring.\"',
	},
	purple_ooze:{
		name: 				'purple ooze',
		type: 				'creature',
		subtypes: 			['slime'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/purple_ooze.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, cursed_touch: 1, stunning_touch: 5, spread_slime: 1},
		hero_version: 			{
			theme: 				['subtype_slime','stun_ability','curse_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, cursed_touch: 1, stunning_touch: 5},
		},
		quote: '\"Cursed stickiness.\"',
	},
	pyromaniac:{
		name: 				'pyromaniac',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				['burn_ability'],
		needs_theme: 		['burn_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/pyromaniac.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{empowering_fire: 1, strike: 1},
		hero_version: 			{
			theme: 				['burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{empowering_fire: 1, strike_unit: 1},
		},
		quote: '\"Bask in the glorious fire!\"',
	},
	raging_bear:{
		name: 				'raging bear',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/raging_bear.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, enrage: 1},
		hero_version: 			{
			theme: 				['subtype_animal','empower_ally_ability'],
			not_theme: 			[],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage_hv: 1},
		},
		quote: '\"Do not poke the bear!\"',
	},
	rat:{
		name: 				'rat',
		type: 				'creature',
		subtypes: 			['animal','rat'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/rat.jpg',
		image_position: 	'top right',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, call_rat: 2, evade: 4},
		hero_version: 			{
			theme: 				['subtype_rat'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, call_rat: 1, evade: 4},
		},
		quote: '\"Dangerous in large numbers.\"',
	},
	rat_catcher:{
		name: 				'rat catcher',
		type: 				'creature',
		subtypes: 			['human','villager'],
		color: 				['colorless'],
		theme: 				['subtype_rat'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/rat_catcher.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, call_rat: 2},
		hero_version: 			{
			theme: 				['subtype_rat'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, call_rat: 2},
			time_theme: 		'cheap',
		},
		quote: '\"What a cute little furry thing!\"',
	},
	rat_flute:{
		name: 				'rat flute',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				['subtype_rat'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/rat_flute.jpg',
		image_position: 	'bottom',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{call_rat: 2},
		quote: '\"Get ready for an infestation.\"',
	},
	rat_potion:{
		name: 				'rat potion',
		type: 				'artifact',
		subtypes: 			['potion','rat'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/rat_potion.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{health_drink: 5, release_rat: 1, fragile_if_empty: 1},
		effects:{
			mana: 	1,
		},
		quote: '\"Don\'t tell me you are going to drink that.\"',
	},
	red_ooze:{
		name: 				'red ooze',
		type: 				'creature',
		subtypes: 			['slime'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/red_ooze.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, ignites: 1, stunning_touch: 5, spread_slime: 1},
		hero_version: 			{
			theme: 				['subtype_slime','stun_ability','burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, ignites: 1, stunning_touch: 5},
		},
		quote: '\"Hot and sticky.\"',
	},
	rock_biter:{
		name: 				'rock biter',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				['type_structure'],
		needs_theme: 		['type_structure'],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/rock_biter.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{empowering_structures: 1, strike: 1, demolish: 1},
		hero_version: 			{
			theme: 				['demolish_ability','type_structure','type_creature'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{empowering_structures: 1, strike_unit: 1, demolish: 1},
		},
		quote: '\"It feels at home underground.\"',
	},
	rock_seer:{
		name: 				'rock seer',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				['stun_ability'],
		needs_theme: 		['stun_ability'],
		craft_theme: 		['subtype_cleric'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/rock_seer.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, fated_stuns: 2},
		hero_version: 			{
			theme: 				['stun_ability','resurrect_ability','own_death_proc_ability','ally_creature_death_proc_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, fated_stuns: 4},
		},
		quote: '\"Keep moving, or your fate fill catch up to you.\"',
	},
	rogue:{
		name: 				'rogue',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/rogue.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, evade: 3},
		hero_version: 			{
			theme: 				['subtype_rogue'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 3},
		},
		quote: '\"Quick on his feet.\"',
	},
	runner:{
		name: 				'runner',
		type: 				'creature',
		subtypes: 			['human','villager'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/runner.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{run_away: 1, strike: 1, evade: 3},
		hero_version: 			{
			theme: 				['movement_ability','projectile_ability','dealt_damage_proc_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, ally_runs_away: 1, evade: 3},
		},
		quote: '\"Get out of the way!\"',
	},
	/*rusty_sword:{
		name: 				'rusty sword',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				['damaging_hero'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/rusty_sword.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{empower_hero: 1, venomous_hero: 1, fragile: 1},
		quote: '\"Sometimes you only need to hit them once.\"',
		recipe:{
			sword: 			2,
			well: 			2,
		}
	},*/
	scarecrow:{
		name: 				'scarecrow',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/scarecrow.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{fearful_aura: 1, turn_cursed_scarecrow: 1},
		hero_version: 			{
			theme: 				['movement_ability','type_creature','dealt_damage_proc_ability','heal_hero_ability'],
			not_theme: 			['empower_hero_ability','damaging_hero'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{fearful_aura: 1, slow: 3},
		},
		quote: '\"It scares away more then just crows.\"',
	},
	scared_witch:{
		name: 				'scared witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/scared_witch.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{curse: 1, strike: 1, coward: 1},
		hero_version: 			{
			theme: 				['curse_ability','evade_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_hv: 1, strike_unit: 1, evade: 3},
		},
		quote: '\"Just because I cursed you does not mean you have to get angry.\"',
	},
	scary_scream:{
		name: 				'scary scream',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				['dealt_damage_proc_ability'],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/scary_scream.jpg',
		image_position: 	'top right',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fear: 5, slow_all_on_act: 1, minimum_enemies: 3},
		quote: '\"Did you hear that? Let\'s get out of here!\"',
	},
	scorpion:{
		name: 				'scorpion',
		type: 				'creature',
		subtypes: 			['animal','arachnid'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/scorpion.jpg',
		image_position: 	'bottom',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, venom: 2},
		hero_version: 			{
			theme: 				['poison_ability','subtype_animal'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, venom: 2},
		},
		quote: '\"They have a painful sting.\"',
	},
	scroll:{
		name: 				'scroll',
		type: 				'spell',
		subtypes: 			['arcane'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/scroll.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{draw: 2},
		quote: '\"What shall we write?\"',
		max_in_deck: 		1,
		recipe:{
			water:  	1,
			wood: 		1,
		}
	},
	scribe:{
		name: 				'scribe',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/scribe.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, draw_on_play: 1},
		hero_version: 			{
			theme: 				['draw_cards_ability','hasten_ability','summon_ally_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, draw: 1},
		},
		quote: '\"Listen to her. She knows a lot.\"',
	},
	seer:{
		name: 				'seer',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/seer.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, fate: 2},
		hero_version: 			{
			theme: 				['resurrect_ability','own_death_proc_ability','ally_creature_death_proc_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, fate: 2},
		},
		quote: '\"She sees your fate.\"',
	},
	sheep:{
		name: 				'sheep',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/sheep.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, restore: 1},
		hero_version: 			{
			theme: 				['fortify_ability','cleanse_ally_ability','empower_ally_ability','active_healing_ability','buff_hero_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, restore: 2},
		},
		quote: '\"Wool, milk and meat. Everything you need!\"',
	},
	shield:{
		name: 				'shield',
		type: 				'artifact',
		subtypes: 			['gear'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/shield.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fortify_hero: 1},
		quote: '\"A good way to protect your hero.\"',
		max_in_deck: 		2,
	},
	shieldman:{
		name: 				'shieldman',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/shieldman.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, fortify_self: 1},
		hero_version: 			{
			theme: 				['subtype_warrior','fortify_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, fortify_self: 1},
		},
		quote: '\"They can survive a lot.\"',
	},
	skeleton:{
		name: 				'skeleton',
		type: 				'creature',
		subtypes: 			['undead'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/skeleton.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, resurrect: 8, undead: 1},
		hero_version: 			{
			theme: 				['resurrect_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, resurrect: 10, undead: 1},
		},
		quote: '\"They do not know why they have risen.\"',
	},
	skirmisher:{
		name: 				'skirmisher',
		type: 				'creature',
		subtypes: 			['animal','human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/skirmisher.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{charge: 1, strike: 1, coward: 1},
		hero_version: 			{
			theme: 				['movement_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, ally_charges: 1, evade: 3},
		},
		quote: '\"Get in and get out.\"',
	},
	slow_burn:{
		name: 				'slow burn',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				['type_spell','burn_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/slow_burn.jpg',
		image_position: 	'bottom',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{add_ignite: 5},
		quote: '\"Just let it smolder for a while.\"',
		max_in_deck: 1,
	},
	spike_trap:{
		name: 				'spike trap',
		type: 				'artifact',
		subtypes: 			['trap'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/spike_trap.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{damage_moving: 1, stunning_touch: 2},
		quote: '\"Careful not to fall in.\"',
	},
	slime_pit:{
		name: 				'slime pit',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/slime_pit.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{trap: 10, spread_slime: 3},
		hero_version: 			{
			theme: 				['subtype_slime','stun_ability','heal_hero_ability'],
			not_theme: 			['empower_hero_ability','damaging_hero'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{trap: 5, spread_slime: 1},
		},
		quote: '\"Do not fall into it!\"',
	},
	slimeling:{
		name: 				'slimeling',
		type: 				'creature',
		subtypes: 			['slime'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/slimeling.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, stunning_touch: 5},
		hero_version: 			{
			theme: 				['subtype_slime','stun_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, stunning_touch: 5},
		},
		quote: '\"Sticky little thing.\"',
	},
	slimy_skeleton:{
		name: 				'slimy skeleton',
		type: 				'creature',
		subtypes: 			['undead','slime'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/slimy_skeleton.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, stunning_touch: 5, resurrect: 8, undead: 1},
		hero_version: 			{
			theme: 				['resurrect_ability','subtype_slime','stun_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, stunning_touch: 5, resurrect: 10, undead: 1},
		},
		quote: '\"I wonder what killed him to look like that.\"',
	},
	sword:{
		name: 				'sword',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/sword.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{empower_hero: 1},
		quote: '\"A weapon suited for a hero.\"',
		max_in_deck: 		2,
	},
	swordsman:{
		name: 				'swordsman',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/swordsman.jpg',
		image_position: 	'top',
		power: 				3,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['subtype_warrior'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"Ready for a fight.\"',
	},
	thief:{
		name: 				'thief',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/thief.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{run_away: 1, strike: 1, plunder: 1, coward: 1},
		hero_version: 			{
			theme: 				['subtype_rogue','buff_hero_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, break: 1, evade: 3},
		},
		quote: '\"Where did my purse go?!\"',
		max_in_deck: 		2,
	},
	thug:{
		name: 				'thug',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/thug.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['subtype_rogue'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"They find a knife and suddenly think they can bully you.\"',
	},
	toad:{
		name: 				'toad',
		type: 				'creature',
		subtypes: 			['animal','amphibian'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/toad.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, guard: 1, poison_aura: 2},
		hero_version: 			{
			theme: 				['poison_ability','movement_ability','subtype_animal','heal_hero_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1,  ally_guards: 1, poison_aura: 1},
		},
		quote: '\"Harmless unless you touch it.\"',
	},
	torchbearer:{
		name: 				'torchbearer',
		type: 				'creature',
		subtypes: 			['human','villager'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/torchbearer.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, ignites: 1},
		hero_version: 			{
			theme: 				['burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, ignites: 2},
		},
		quote: '\"She carries a torch to light the way.\"',
	},
	trapper:{
		name: 				'trapper',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/trapper.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, trap: 5},
		hero_version: 			{
			theme: 				['movement_ability','stun_ability','buff_hero_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, trap: 5},
		},
		quote: '\"Ha ha! I got you!\"',
	},
	twine:{
		name: 				'twine',
		type: 				'artifact',
		subtypes: 			['tool'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/twine.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{trapping_hero: 2},
		quote: '\"You can really get caught in that.\"',
		max_in_deck: 		2,
	},
	venom_witch:{
		name: 				'venom witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/venom_witch.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, venom: 2, cursed_touch: 2},
		hero_version: 			{
			theme: 				['curse_ability','poison_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, venom: 2, cursed_touch: 2},
		},
		quote: '\"She has a dark touch.\"',
	},
	village_defender:{
		name: 				'village defender',
		type: 				'creature',
		subtypes: 			['human','villager','warrior'],
		color: 				['colorless'],
		theme: 				['type_structure'],
		needs_theme: 		['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/village_defender.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{empowering_structures: 1, strike: 1},
		hero_version: 			{
			theme: 				['type_structure'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{empowering_structures: 1, strike_unit: 1},
		},
		quote: '\"They will defend their village.\"',
	},
	wall:{
		name: 				'wall',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/wall.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{fortify_ally: 1},
		hero_version: 			{
			theme: 				['subtype_warrior'],
			not_theme: 			['empower_hero_ability','damaging_hero'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{fortify_ally: 3},
		},
		quote: '\"Basic defense.\"',
	},
	water_carrier:{
		name: 				'water carrier',
		type: 				'creature',
		subtypes: 			['human','villager'],
		color: 				['colorless'],
		theme: 				['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/water_carrier.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, cleanse: 2},
		hero_version: 			{
			theme: 				['subtype_human','cleanse_ally_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, cleanse: 4},
		},
		quote: '\"Anyone want some water?\"',
	},
	well:{
		name: 				'well',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/well.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{cleanse: 2, heal: 1},
		hero_version: 			{
			theme: 				['type_creature'],
			not_theme: 			['empower_hero_ability','damaging_hero','type_structure'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{cleanse: 4, heal: 1},
		},
		quote: '\"Refreshing, isn\'t it?\"',
	},
	witch:{
		name: 				'witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/witch.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{curse: 2, strike: 1},
		hero_version: 			{
			theme: 				['curse_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_hv: 2, strike_unit: 1},
		},
		quote: '\"She uses the dark arts.\"',
	},
	witchs_circle:{
		name: 				'witch\'s circle',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				['subtype_witch'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/witchs_circle.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{curse_all: 1, call_witch: 10},
		quote: '\"Some say there are many more.\"',
		max_in_deck: 		2,
	},
	witchs_hut:{
		name: 				'witch\'s hut',
		type: 				'structure',
		subtypes: 			['wall','witch'],
		color: 				['colorless'],
		theme: 				['type_structure','subtype_witch'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/witchs_hut.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{call_witch: 1, cursed_aura: 1},
		hero_version: 			{
			theme: 				['heal_hero_ability','subtype_witch','movement_ability'],
			not_theme: 			['empower_hero_ability','damaging_hero'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{call_witch: 1, cursed_aura: 2},
		},
		quote: '\"A brother and sister once went in there and never came out.\"',
	},
	wombat:{
		name: 				'wombat',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/wombat.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, enrage: 1},
		hero_version: 			{
			theme: 				['subtype_animal','empower_ally_ability','movement_ability','heal_hero_ability'],
			not_theme: 			[],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage_hv: 1},
		},
		quote: '\"Those have a powerful bite.\"',
	},
	yellow_ooze:{
		name: 				'yellow ooze',
		type: 				'creature',
		subtypes: 			['slime'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/yellow_ooze.jpg',
		image_position: 	'top',
		power: 				4,
		armor: 				0,
		health: 			12,
		abilities: 			{strike: 1, ignites: 1, venom: 1, stunning_touch: 5, spread_slime: 1},
		hero_version: 			{
			theme: 				['subtype_slime','stun_ability','burn_ability', 'poison_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, ignites: 1, venom: 1, stunning_touch: 5},
		},
		quote: '\"Hot and toxic stickiness.\"',
	},

	//##################################################################################################################################################################
	//########################################################## TREASURE ###############################################################################################
	//##################################################################################################################################################################
	crown:{
		name: 				'crown',
		description: 		'Passively increases all peasants gained by 1%.',
		value: 				25,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-01-19T064030.359.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"Wear this and they will follow you.\"',
	},
	cup_of_blood:{
		name: 				'cup of blood',
		description: 		'Passively increases the maximum rarity of cards sacrificed at the altar by 1%.',
		value: 				50,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-01-19T095607.650.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"We can always need more blood.\"',
	},
	enchanted_net:{
		name: 				'enchanted net',
		description: 		'Passively increases floating scraps gained by 1%.',
		value: 				25,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-03-02T070421.769.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"Cast the nets!\"',
	},
	endless_pouch:{
		name: 				'endless pouch',
		description: 		'Passively increases all scraps gained by 1%.',
		value: 				100,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-01-19T061306.496.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"It just keeps giving.\"',
	},
	gloves_of_midas:{
		name: 				'gloves of Midas',
		description: 		'Passively increases troves gained by 1%.',
		value: 				100,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-03-02T071338.170.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"Turns common items into treasure.\"',
	},
	golden_saddle:{
		name: 				'golden saddle',
		description: 		'Passively increases all rewards from battles by 1%.',
		value: 				250,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-03-02T065529.311.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"Perfect for doing long quests.\"',
	},
	loupe:{
		name: 				'loupe',
		description: 		'Passively increases all shards gained by 1%.',
		value: 				100,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-01-19T064733.364.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"Make those gems shine!\"',
	},
	rope_of_binding:{
		name: 				'rope of binding',
		description: 		'Passively increases the chance for loot items to drop after winning a battle by 1%.',
		value: 				50,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-01-29T060640.618.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"I got you!\"',
	},
	thieves_cloak:{
		name: 				'thieves\' cloak',
		description: 		'Passively increases the maximum scraps offered by merchants by 1%.',
		value: 				50,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-03-02T070815.141.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"I\'m sure we can make a deal.\"',
	},
	war_banner:{
		name: 				'war banner',
		description: 		'Passively increases the maximum rarity of summoned enemies by 1%.',
		value: 				25,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-03-02T065910.439.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"This should draw them out.\"',
	},
	
	//##################################################################################################################################################################
	//########################################################## CURRENCY ###############################################################################################
	//##################################################################################################################################################################

	/*ore:{
		name: 				'ore',
		subtypes: 			['resource'],
		value: 				1,
		months_available: 	[0,1,2,3,4,5,6,7,8,9,10,11,12],
		type: 				'material',
		color: 				['none'],
		pick_chance: 		0,
		basic_reward: 		true,
		time: 				0,
		image: 				'cards/ore.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: 'Used in crafting'
	},
	seeds:{
		name: 				'seeds',
		subtypes: 			['resource'],
		value: 				1,
		months_available: 	[0,1,2,3,4,5,6,7,8,9,10,11,12],
		type: 				'material',
		color: 				['none'],
		pick_chance: 		0,
		basic_reward: 		true,
		time: 				0,
		image: 				'cards/seeds.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: 'Used in crafting'
	},
	stone:{
		name: 				'stone',
		subtypes: 			['resource'],
		value: 				1,
		months_available: 	[0,1,2,3,4,5,6,7,8,9,10,11,12],
		type: 				'material',
		color: 				['none'],
		pick_chance: 		0,
		basic_reward: 		true,
		time: 				0,
		image: 				'cards/stone.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: 'Used in crafting'
	},
	water:{
		name: 				'water',
		subtypes: 			['resource'],
		value: 				1,
		months_available: 	[0,1,2,3,4,5,6,7,8,9,10,11,12],
		type: 				'material',
		color: 				['none'],
		pick_chance: 		0,
		basic_reward: 		true,
		time: 				0,
		image: 				'cards/water.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: 'Used in crafting'
	},
	wood:{
		name: 				'wood',
		subtypes: 			['resource'],
		value: 				1,
		months_available: 	[0,1,2,3,4,5,6,7,8,9,10,11,12],
		type: 				'material',
		color: 				['none'],
		pick_chance: 		0,
		basic_reward: 		true,
		time: 				0,
		image: 				'cards/wood.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: 'Used in crafting'
	},*/
	
	//##################################################################################################################################################################
	//########################################################## REWARDS ###############################################################################################
	//##################################################################################################################################################################
	
	/*flask:{
		name: 				'flask',
		value: 				25,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		//basic_reward: 		true,
		time: 				0,
		image: 				'cards/dream_TradingCard-2024-12-21T070512.391.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: 'Used in alchemy'
	},*/
	potion_placeholder:{
		name: 				'potion',
		value: 				1,
		type: 				'potion',
		color: 				['purple'],
		pick_chance: 		0,
		time: 				0,
		image: 				'mason-jar.svg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
	},
	shard:{
		name: 				'shard',
		value: 				5,
		months_available: 	[0,1,2,3,4,5,6,7,8,9,10,11,12],
		type: 				'currency',
		basic_reward: 		true,
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2023-03-17T062225.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"Used for upgrades.\"',
	},
	stash:{
		name: 				'stash',
		value: 				10,
		type: 				'consumable',
		basic_reward: 		true,
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2024-11-30T171529.098.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{},
		reward: 			{
			type: 			'random_card',
			pick_amount: 	1,
			amount: 		1,
			min_value: 		1,
			rare_chance:   	0.1,
			description: 	'Awards 1 random card.',
			text: 			'&nbsp;',
			amount_used: 	[1,5,'all'],
		},
		/*reward: 			{
			type: 			'random_card',
			pick_amount: 	3,
			amount: 		1,
			random_amount:  4,
			min_value: 		1,
			card_type: 		'material',
			pickable: 		true,
			description: 	'Lets you pick a stack of random materials.',
			text: 			'Pick a material.',
		},*/
	},
	chest:{
		name: 				'chest',
		value: 				30,
		type: 				'consumable',
		basic_reward: 		true,
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2024-12-07T074802.756.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{},
		reward: 			{
			type: 			'random_card',
			pick_amount: 	3,
			amount: 		1,
			min_value: 		10,
			rare_chance:   	10,
			pickable: 		true,
			description: 	'Awards 1 random card.',
			text: 			'&nbsp;',
			amount_used: 	[1],
		},
	},
	trove:{
		name: 				'trove',
		value: 				100,
		type: 				'consumable',
		basic_reward: 		true,
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-01-19T055525.326.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{},
		reward: 			{
			type: 			'random_card',
			card_type: 		['treasure'],
			pick_amount: 	3,
			amount: 		1,
			min_value: 		1,
			rare_chance:   	1,
			pickable: 		true,
			all_pick_chance: true,
			description: 	'Awards 1 random treasure.',
			text: 			'&nbsp;',
			amount_used: 	[1],
		},
	},
	
	empty_card:{
		name: 				'',
		value: 				1,
		type: 				'',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
	},
	scraps_placeholder:{
		name: 				'scraps',
		value: 				1,
		type: 				'currency',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/shredded-71381_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
	},
	

}

/*add_old_cards(all_old_available_cards, 'cards_old/');
add_old_cards(all_older_available_cards, 'cards_old2/');
add_old_cards(all_oldest_available_cards, 'cards_old2a/');
unavailable_abilities = sortObj(unavailable_abilities);
console.log('unavailable abilities: ' + count_object(unavailable_abilities));
console.log(unavailable_abilities);*/

/*eachoa(all_available_cards, function(card_id, card_info){
	if(card_info['color'] == 'colorless'){all_available_cards[card_id]['color'] = ['white'];}
	if(card_info['color'][0] != undefined && card_info['color'][0] == 'colorless'){all_available_cards[card_id]['color'] = ['white'];}
	if(card_info['unique'] != undefined && card_info['unique'] == true)
	{
		all_available_cards[card_id]['color'] = ['purple'];
		all_available_cards[card_id]['max_in_deck'] = 1;
	}
	if(card_info['abilities'] != undefined && card_info['abilities']['minimum_allies'] != undefined && card_info['abilities']['minimum_allies'] < 5 && card_info['max_in_deck'] != undefined)
	{
		card_info['max_in_deck'] = 1;
		console.log(card_id);
	}
	if(card_info['abilities'] != undefined && card_info['abilities']['minimum_enemies'] != undefined && card_info['abilities']['minimum_enemies'] < 5 && card_info['max_in_deck'] != undefined)
	{
		card_info['max_in_deck'] = 1;
	}
});*/

function calculate_card_value(card_id, show_calc){
	//console.log('calculating ' + card_id);
	var current_card_value = 0;
	if(all_available_cards[card_id] == undefined){console.log(card_id)};
	if(all_available_cards[card_id]['recipe'] == undefined || show_calc != undefined || true)
	{
		if(all_available_cards[card_id]['value'] == undefined)
		{
			current_card_value = 1;
		}
		else
		{
			current_card_value = all_available_cards[card_id]['value'];
		}
		current_card_value = 1;
		//if(all_available_cards[card_id]['type'] == 'spell' || all_available_cards[card_id]['type'] == 'artifact'){current_card_value += 5;}
		current_card_value *= all_available_cards[card_id]['raw_time'] * all_available_cards[card_id]['raw_time'];
		if(current_card_value < all_available_cards[card_id]['raw_time']){current_card_value = all_available_cards[card_id]['raw_time'];}
		if(show_calc != undefined && show_calc == true){console.log('time: ' + current_card_value);}
		var ability_count = count_object(all_available_cards[card_id]['abilities']);
		/*var ability_count =  0;
		eachoa(all_available_cards[card_id]['abilities'], function(ability_id, ability_level){
			ability_count +=  0.8 + (ability_level / 5);
		});*/
		var ability_value_factor = sqr(0.75 + (ability_count /4));
		current_card_value *= ability_value_factor;
		if(show_calc != undefined && show_calc == true){console.log('abilities: ' + current_card_value);}
		//current_card_value += all_available_cards[card_id]['power'];
		//current_card_value += all_available_cards[card_id]['health'] / 4;
		//current_card_value = current_card_value * (0.5 + (current_card_value / 10));
		/*if(all_available_cards[card_id]['type'] == 'spell' || all_available_cards[card_id]['type'] == 'artifact')
		{
			current_card_value = current_card_value * (1 + (current_card_value / 5));
		}
		else
		{
			current_card_value = current_card_value * (0.5 + (current_card_value / 10));
		}*/
		if(show_calc != undefined && show_calc == true){console.log('type: ' + current_card_value);}
		/*current_card_value = current_card_value * current_card_value;
		current_card_value /= 10;
		if(show_calc != undefined && show_calc == true){console.log('correction: ' + current_card_value);}*/
		current_card_value = Math.ceil(current_card_value);
	}
	else
	{
		if(all_available_cards[card_id]['recipe'] != undefined)
		{
			eachoa(all_available_cards[card_id]['recipe'], function(card_cost_id, card_cost_amount){
				if(all_available_cards[card_cost_id]['value'] == undefined)
				{
					all_available_cards[card_cost_id]['value'] = calculate_card_value(card_cost_id);
				}
				var cost_card_value = all_available_cards[card_cost_id]['value'];
				current_card_value += cost_card_value * card_cost_amount;
			});
			var card_info = all_available_cards[card_id];
			if(card_info['recipe'] != undefined && all_available_cards['recipe_' + card_id] == undefined && card_info['pick_chance'] > 0 && (card_info['type'] == 'creature' || card_info['type'] == 'spell' || card_info['type'] == 'structure' || card_info['type'] == 'object' || card_info['type'] == 'artifact'))
			{
				all_available_cards['recipe_' + card_id] = {
					name: 				'recipe: ' + card_info['name'],
					version: 			2,
					non_tradable: 		true,
					value: 				card_info['value'],
					type: 				'recipe',
					color: 				['yellow'],
					pick_chance: 		0,
					months_available: 	card_info['months_available'],
					time: 				0,
					image: 				card_info['image'],
					power: 				false,
					armor: 				false,
					health: 			false,
					abilities: 			{auto_learn: 1},
					recipe: 			card_id,
				};
			}
		}
	}

	if(all_available_cards[card_id]['value'] == undefined)
	{
		all_available_cards[card_id]['value'] = 1;
	}
	
	return current_card_value;
}

function find_ability(find_ability_id, hero_version){
	eachoa(all_available_cards, function(unit_id, unit){
		if(hero_version == undefined && unit['abilities'][find_ability_id] != undefined)
		{
			console.log(unit['name']);
		}
		if(hero_version != undefined && unit['hero_version'] != undefined && unit['hero_version']['abilities'][find_ability_id] != undefined)
		{
			console.log('hero: ' + unit['name']);
		}
	});
}

function count_recipe_count(card_id){
	eachoa(all_available_cards, function(unit_id, unit){
		var recipe_count = 0;
		var recipe_list = '';
		eachoa(all_available_cards, function(unit_id_2, unit_2){
			if(unit_2['recipe'] != undefined && unit_2['recipe'][unit_id] != undefined)
			{
				recipe_count++;
				recipe_list += unit_id_2 + '       ';
			}
		});
		if((recipe_count > 8 && card_id == undefined) || unit_id == card_id)
		{
			console.log(' --------------- ');
			console.log(unit_id + ': ' + recipe_count);
			console.log(recipe_list);
		}
		
	});
}

function find_used_in_recipes(min, max, color){
	if(min == undefined){min = 0;}
	if(max == undefined){max = 10000;}
	var amount_found = 0;
	eachoa(all_available_cards, function(card_id, card_info){
		if((color == undefined || match_array_values(color, card_info['color']) == true) && min <= card_info['used_in_recipes'] && max >= card_info['used_in_recipes'] && card_info['type'] != 'fragment' && card_info['type'] != 'consumable')
		{
			console.log(card_info['used_in_recipes'] + ' - ' + card_id + '(' + card_info['value'] + ')');
			amount_found++;
		}
	});
	return amount_found;
}

function check_not_used_in_recipes(){
	var min_value = 0;
	var min_card_id = '';
	var not_used_amount = 0;
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['used_in_recipes'] == 0 && (card_info['type'] == 'creature' || card_info['type'] == 'structure' || card_info['type'] == 'artifact' || card_info['type'] == 'spell') && card_info['pick_chance'] > 0)
		{
			if(card_info['value'] < min_value || min_value == 0)
			{
				min_value = card_info['value'];
				min_card_id = card_id;
			}
			not_used_amount++;
			console.log(card_id);
		}
	});
	console.log('min value: ' + min_value + ' - ' + min_card_id);
	console.log('not used: ' + not_used_amount);
}

function show_cards_with_value(min,max,color){
	var card_count = 0;
	eachoa(all_available_cards, function(card_id, card_info){
		if((min == undefined || card_info['value'] >= min) && (max == undefined || card_info['value'] <= max) && (color == undefined || card_info['color'][0] == color))
		{
			console.log(card_id + ': ' + card_info['value']);
			card_count++;
		}
	});
	console.log('cards found: ' + card_count);
}

var namechanges = {

}

function check_card_namechanges(gamedata){
	eachoa(gamedata['owned_cards'], function(owned_card_id, owned_amount){
		eachoa(namechanges, function(old_name, new_name){
			if(owned_card_id == old_name)
			{
				if(gamedata['owned_cards'][new_name] == undefined)
				{
					gamedata['owned_cards'][new_name] = owned_amount;
				}
				else
				{
					gamedata['owned_cards'][new_name] += owned_amount;
				}
				delete gamedata['owned_cards'][old_name];
			}
		});
		if(all_available_cards[owned_card_id] == undefined)
		{
			console.log('deleting ' + owned_card_id);
			delete gamedata['owned_cards'][owned_card_id];
		}
	});
	eachoa(gamedata['known_recipes'], function(owned_card_id, owned_amount){
		eachoa(namechanges, function(old_name, new_name){
			if(owned_card_id == old_name)
			{
				if(gamedata['known_recipes'][new_name] == undefined)
				{
					gamedata['known_recipes'][new_name] = true;
				}
				delete gamedata['known_recipes'][old_name];
			}
		});
	});
	eachoa(gamedata['decks'], function(owned_deck_id, deck){
		eachoa(deck, function(card_id, card_amount){
			eachoa(namechanges, function(old_name, new_name){
				if(card_id == old_name)
				{
					if(gamedata['decks'][owned_deck_id][new_name] == undefined)
					{
						gamedata['decks'][owned_deck_id][new_name] = card_amount;
					}
					delete gamedata['decks'][owned_deck_id][old_name];
				}
			});
		});
	});

	eachoa(namechanges, function(old_name, new_name){

		//delete all_available_cards[old_name];
		
	});


	return gamedata;
}

var last_card_calculated = '';

function calc_next(show_rounded){
	if(gamedata['last_card_calculated'] != undefined)
	{
		last_card_calculated = gamedata['last_card_calculated'];
	}
	var found_next = false;
	var found_current = false;
	var last_card = '';
	eachoa(all_available_cards, function(card_id, card_info){
		if((found_current == true && found_next == false) || (last_card_calculated == '' && found_next == false))
		{
			if(card_info['type'] != 'cardback' && card_info['pick_chance'] > 0)
			{
				found_next = card_id;
			}
		}
		if(card_id == last_card_calculated)
		{
			found_current = true;
		}
		last_card = card_id;
	});
	if(last_card_calculated == last_card)
	{
		gamedata['last_card_calculated'] = '';
		last_card_calculated = '';
		calc_next();
	}
	else
	{
		last_card_calculated = found_next;
		gamedata['last_card_calculated'] = last_card_calculated;
		saveToLocalStorage();
		console.log('--- ' + found_next + ' ---');
		calculate_card_time(found_next, true);
	}	
}

function calc_last(){
	if(gamedata['last_card_calculated'] != undefined)
	{
		console.log('--- ' + gamedata['last_card_calculated'] + ' ---');
		calculate_card_time(gamedata['last_card_calculated'], true);
	}
}

function calculate_card_time(card_id, show_calc, hero_version){
	var base_hero_hp = 2;
	var card = all_available_cards[card_id];
	if(hero_version != undefined && hero_version == true && card['hero_version'] != undefined)
	{
		card = card['hero_version'];
	}
	var calculated_time = 0;
	var calculated_time_on_top = 0;
	var min_level_costs = {};

	/*if(card['power'] > 0)
	{
		calculated_time += card['power'] * 2;
	}*/
	if(card['health'] > 0 && (hero_version == undefined || hero_version == false))
	{
		calculated_time += card['health'];
		if(show_calc!=undefined){console.log('health: ' + card['health'] + ' points');}
		if(show_calc!=undefined){console.log('--- total = ' + calculated_time);}
	}
	if(card['armor'] > 0 && (hero_version == undefined || hero_version == false))
	{
		calculated_time += card['armor'] / 2;
		if(show_calc!=undefined){console.log('armor: ' + card['armor'] + ' points');}
		if(show_calc!=undefined){console.log('--- total = ' + calculated_time);}
	}
	/*if(card['health'] > 0 && hero_version != undefined && hero_version == true)
	{
		calculated_time += base_hero_hp;
		if(show_calc!=undefined){console.log('health: ' + base_hero_hp + ' points');}
		if(show_calc!=undefined){console.log('--- total = ' + calculated_time);}
	}*/

	var skill_total_factor = 1;
	var average_hits = 0;
	var average_hit_cost = 0;

	eachoa(card['abilities'], function(ability_id, ability_level){
		if(all_abilities[ability_id] == undefined){console.log(ability_id);}
		var ability = all_abilities[ability_id];
		var level_cost = 1;

		// CHECK USED
		/*all_abilities[ability_id]['used'] = true;
		eachoa(ability['effects'], function(effect_id, effect_info){
			if((effect_info['type'] == 'grant_skill' || effect_info['type'] == 'set_skill') && all_abilities[effect_info['skill_id']] != undefined)
			{
				all_abilities[effect_info['skill_id']]['used'] = true;
			}
			if(effect_info['type'] == 'random_ability')
			{
				eachoa(effect_info['ability_options'], function(option_id, ability_option){
					if(all_abilities[ability_option] != undefined)
					{
						all_abilities[ability_option]['used'] = true;
					}
				});
				
			}
		});*/
		

		if(ability['level_cost_cum'] != undefined)
		{
			var temp_level_cost = 0;
			for (var i = 1; i <= ability_level; i++) {
				temp_level_cost += i;
			}
			ability_level = temp_level_cost;
		}

		if(ability['average_hits'] != undefined)
		{
			if(ability['average_hits'] == 'ability_level')
			{
				average_hits += ability_level;
			}
			else
			{
				average_hits += ability['average_hits'];
			}
			if(show_calc!=undefined){console.log(ability_id + ': average_hits + ' + ability['average_hits'] + ' = ' + average_hits);}
		}
		if(ability['average_hit_cost_spell'] != undefined && card['type'] == 'spell')
		{
			average_hit_cost += ability['average_hit_cost_spell'] * ability_level;
			if(show_calc!=undefined){console.log(ability_id + ': average_hit_cost_spell + ' + (ability['average_hit_cost_spell'] * ability_level) + ' = ' + average_hit_cost);}
		}
		else
		{
			if(ability['average_hit_cost'] != undefined)
			{
				average_hit_cost += ability['average_hit_cost'] * ability_level;
				if(show_calc!=undefined){console.log(ability_id + ': average_hit_cost + ' + (ability['average_hit_cost'] * ability_level) + ' = ' + average_hit_cost);}
			}
		}
		
		if(ability['level_cost'] != undefined)
		{
			if(card['type'] == 'spell' && ability['level_cost_spell'] != undefined)
			{
				level_cost = ability['level_cost_spell'];
				if(show_calc!=undefined){console.log(ability_id + ': ' + ability['level_cost_spell'] + ' points (spell)');}
			}
			else
			{
				if(card['type'] == 'artifact' && ability['level_cost_artifact'] != undefined)
				{
					level_cost = ability['level_cost_artifact'];
					if(show_calc!=undefined){console.log(ability_id + ': ' + ability['level_cost_artifact'] + ' points (artifact)');}
				}
				else
				{
					level_cost = ability['level_cost'];
					if(show_calc!=undefined){console.log(ability_id + ': ' + ability['level_cost'] + ' points');}
				}
			}
			if(hero_version != undefined && hero_version == true && ability['level_cost_hero'] != undefined)
			{
				level_cost = ability['level_cost_hero'];
				if(show_calc!=undefined){console.log(ability_id + ': ' + ability['level_cost_hero'] + ' points (hero)');}
			}
			if(hero_version == undefined || hero_version == false)
			{
				if(card['type'] == 'structure' && ability['level_cost_structure'] != undefined)
				{
					level_cost = ability['level_cost_structure'];
					if(show_calc!=undefined){console.log(ability_id + ': ' + ability['level_cost_structure'] + ' points (structure)');}
				}
				if(card['type'] == 'creature' && ability['level_cost_creature'] != undefined)
				{
					level_cost = ability['level_cost_creature'];
					if(show_calc!=undefined){console.log(ability_id + ': ' + ability['level_cost_creature'] + ' points (creature)');}
				}
			}
		}
		else
		{
			console.log(ability_id + ' needs a factor, defaulting to 1');
		}
		if(ability['cost_factor'] != undefined && card[ability['cost_factor']] != undefined && (ability['cost_factor'] != 'health' || hero_version == undefined || hero_version == false))
		{
			if(ability['cost_factor'] == 'power' && card['potential_power'] != undefined)
			{
				level_cost *= card['potential_power'];
				if(show_calc!=undefined){console.log(ability_id + ': x' + card[ability['cost_factor']] + '');}
			}
			else
			{
				var cost_factor_increase = card[ability['cost_factor']];
				if(ability['cost_factor_factor'] != undefined)
				{
					if(ability['cost_factor_factor'] < 1)
					{
						cost_factor_increase = (1 - ability['cost_factor_factor']) + (card[ability['cost_factor']] * ability['cost_factor_factor']);
					}
					else
					{
						cost_factor_increase = (1 - ability['cost_factor_factor']) + (card[ability['cost_factor']] * ability['cost_factor_factor']);
					}
					
				}
				level_cost *= cost_factor_increase;
				if(show_calc!=undefined){console.log(ability_id + ': ' + card[ability['cost_factor']] + ' x ' + ability['cost_factor'] + ' = x' + cost_factor_increase + '');}
			}
		}
		eachoa(ability['ability_level_cost_factors'], function(ability_cost_factor_id, ability_cost_factor_amount){
			if(card['abilities'][ability_cost_factor_id] != undefined)
			{
				level_cost *= (ability_cost_factor_amount * card['abilities'][ability_cost_factor_id]);
				if(show_calc!=undefined){console.log(ability_cost_factor_id + ': x' + ability_cost_factor_amount);}
			}
		});
		if(ability['cost_factor'] != undefined && card[ability['cost_factor']] != undefined && ability['cost_factor'] == 'health' && hero_version != undefined && hero_version == true)
		{
			level_cost *= base_hero_hp;
			if(show_calc!=undefined){console.log(ability_id + ': x' + base_hero_hp);}
		}
		if(ability['cost_factor'] != undefined && ability['cost_factor'] == 'full')
		{
			if(level_cost > 0)
			{
				skill_total_factor *= 1 + (ability_level * level_cost);
				if(show_calc!=undefined){console.log(ability_id + ' full: +' + (ability_level * level_cost) + '');}
				if(show_calc!=undefined){console.log(' factor = ' + skill_total_factor);}
			}
			else
			{
				skill_total_factor /= (1 + (ability_level * (level_cost * -1)));
				if(show_calc!=undefined){console.log(ability_id + ' full: /' + (1 + (ability_level * (level_cost * -1))) + '');}
				if(show_calc!=undefined){console.log(' factor = ' + skill_total_factor);}
			}
		}
		else
		{
			if(ability['cost_on_top'] == undefined)
			{
				var total_skill_cost = ability_level * level_cost;
				if(ability['min_cost'] != undefined && ability['min_cost'] > total_skill_cost)
				{
					if(show_calc!=undefined){console.log(ability_id + ' total: ' + (total_skill_cost) + ' points');}
					if(show_calc!=undefined){console.log(ability_id + ' min cost: ' + (ability['min_cost']) + ' points');}
					if((/*test_mode == true || */show_calc!=undefined) && ability['min_cost'] > (ability_level + 1) * level_cost && (ability['cost_factor'] == undefined || (ability['cost_factor'] != 'full' && ability['cost_factor'] != 'health')))
					{
						console.log(card_id + ' could use more ' + ability_id + ' (' + level_cost + '/' + ability['min_cost'] + ') min_cost');
					}
					total_skill_cost = ability['min_cost'];
				}
				calculated_time += total_skill_cost;
				if(show_calc!=undefined){console.log(ability_id + ' total: ' + (total_skill_cost) + ' points');}
			}
			else
			{
				var total_skill_cost = ability_level * level_cost;
				if(ability['min_cost'] != undefined && ability['min_cost'] > total_skill_cost)
				{
					if(show_calc!=undefined){console.log(ability_id + ' total: ' + (total_skill_cost) + ' points');}
					if(show_calc!=undefined){console.log(ability_id + ' min cost: ' + (ability['min_cost']) + ' points');}
					if((/*test_mode == true || */show_calc!=undefined) && ability['min_cost'] > (ability_level + 1) * level_cost && (ability['cost_factor'] == undefined || (ability['cost_factor'] != 'full' && ability['cost_factor'] != 'health')))
					{
						console.log(card_id + ' could use more ' + ability_id + ' (' + level_cost + '/' + ability['min_cost'] + ') min_cost');
					}
					total_skill_cost = ability['min_cost'];
				}
				calculated_time_on_top += total_skill_cost;
				if(show_calc!=undefined){console.log(ability_id + ' total: ' + (total_skill_cost) + ' points (on top)');}
			}
		}
		if(ability['cost_adjustment'] != undefined)
		{
			calculated_time += ability['cost_adjustment'];
			if(show_calc!=undefined){console.log('adjustment: ' + ability['cost_adjustment']);}
		}
		if(ability['additional_levels_cost'] != undefined && ability_level > 1)
		{
			calculated_time += ability['additional_levels_cost'] * (ability_level - 1);
			if(show_calc!=undefined){console.log('additional_levels_cost: ' + (ability['additional_levels_cost'] * (ability_level - 1)));}
		}
		if(show_calc!=undefined){console.log('--- total = ' + calculated_time);}
		if(ability['cost_factor'] == undefined || (ability['cost_factor'] != 'full' && ability['cost_factor'] != 'health'))
		{
			min_level_costs[ability_id] = level_cost;
		}

	});

	if(average_hits > 0 && average_hit_cost > 0)
	{
		calculated_time += average_hits * average_hit_cost;
		if(show_calc!=undefined){console.log('average_hits: ' + average_hits);}
		if(show_calc!=undefined){console.log('average_hit_cost: ' + average_hit_cost);}
		if(show_calc!=undefined){console.log('total_hit_cost: ' + (average_hits * average_hit_cost));}
		if(show_calc!=undefined){console.log('--- total = ' + calculated_time);}
	}

	calculated_time *= skill_total_factor;
	if(skill_total_factor != 1)
	{
		if(show_calc!=undefined){console.log('total_factor: ' + skill_total_factor);}
		if(show_calc!=undefined){console.log('--- total = ' + calculated_time);}
	}

	if(calculated_time_on_top > 0)
	{
		calculated_time += calculated_time_on_top;
		if(show_calc!=undefined){console.log('total on top = ' + calculated_time_on_top);}
		if(show_calc!=undefined){console.log('--- total = ' + calculated_time);}
	}

	/*if(count_object(card['color']) == 1 && card['color'][0] == 'colorless' && (hero_version == undefined || hero_version == false))
	{
		calculated_time += 1;
		if(show_calc!=undefined){console.log('colorless: +1');}
	}*/

	if(card['type'] == 'structure' /*&& card['power'] != false*/)
	{
		calculated_time += 0.5;
		if(show_calc!=undefined){console.log('structure: +0.5');}
	}

	if(count_object(card['color']) == 2)
	{
		calculated_time -= 1;
		if(show_calc!=undefined){console.log('duocolor: -1');}
	}

	if(card['type'] == 'artifact' || card['type'] == 'spell')
	{
		if(card['type'] == 'spell')
		{
			//calculated_time /= 3;
			//if(show_calc!=undefined){console.log('spell: /3 = ' + calculated_time);}
			//calculated_time -= 6;
			//if(show_calc!=undefined){console.log('spell: -6 = ' + calculated_time);}
			/*calculated_time -= 5;
			if(show_calc!=undefined){console.log('spell: -5 = ' + calculated_time);}*/
			calculated_time = calculated_time / 2;
			if(show_calc!=undefined){console.log('spell: /2 = ' + calculated_time);}
		}
		if(card['type'] == 'artifact' && (card['selfdestructs'] == undefined || card['selfdestructs'] == false))
		{
			calculated_time *= 2;
			if(show_calc!=undefined){console.log('artifact: x2 = ' + calculated_time);}
		}
	}
	else
	{
		if(hero_version == undefined || hero_version == false)
		{
			calculated_time -= 6;
			if(show_calc!=undefined){console.log('-6 = ' + calculated_time);}
		}
	}

	/*if(card['type'] == 'spell')
	{
		calculated_time *= 0.5;
		if(show_calc!=undefined){console.log('spell: x0.25 = ' + calculated_time);}
	}*/

	if(calculated_time !== false && calculated_time < 0 && card['pick_chance'] > 0)
	{
		console.log(card_id + ' cost = ' + calculated_time);
		//calculated_time = 0;
	}
	if(calculated_time < 0){calculated_time = 0;}
	if(calculated_time !== false && calculated_time < 0.5 && card['verified'] == undefined && card['pick_chance'] > 0)
	{
		console.log(card_id + ' cost = ' + calculated_time);
		//calculated_time = 0;
	}

	if(calculated_time >= 1 && (hero_version == undefined || hero_version == false))
	{
		var high_card_cost_correction = 1 + ((calculated_time - 1) / 50);
		calculated_time = calculated_time / high_card_cost_correction;
		if(show_calc!=undefined){console.log('expensive card correction: /' + high_card_cost_correction + ' = ' + calculated_time);}
	}

	/*if(card['type'] == 'spell' && calculated_time < 1)
	{
		calculated_time = 1;
		if(show_calc!=undefined){console.log('spell correction: 1');}
	}*/

	if(/*test_mode == true || */show_calc!=undefined)
	{
		var cost_left = Math.ceil(calculated_time) - calculated_time;
		var cost_plus = calculated_time - Math.floor(calculated_time);
		var hero_text = '';
		if(hero_version != undefined && hero_version == true)
		{
			hero_text = ' hero';
		}
		if(cost_left > 0 && (hero_version == undefined || hero_version == false))
		{
			//console.log(min_level_costs);
			eachoa(min_level_costs, function(ability_key, min_level_cost){
				if(min_level_cost <= cost_left && min_level_cost > 0)
				{
					console.log(card_id + hero_text + ' could use more ' + ability_key + ' (' + min_level_cost + '/' + cost_left + ')');
				}
				if(min_level_cost <= (cost_plus * -1) && min_level_cost < 0)
				{
					console.log(card_id + hero_text + ' could use more ' + ability_key + ' (' + min_level_cost + '/' + cost_plus + ')');
				}
			});
		}
		
	}

	return calculated_time;
}

function correct_card_time(time){
	var corrected_time = Math.ceil(time / (1 + (time / 60)) );
	return corrected_time;
}

function show_time_correction(fromtime, totime){
	if(fromtime == undefined){fromtime = 1;}
	if(totime == undefined){totime = 10;}
	for (var i = fromtime; i <= totime; i++) {
		console.log(i + ' => ' + correct_card_time(i));
	}
}

var ideal_hero_hp = 40;
var hero_hp_cost_factor = 4;

var hero_subtype_themes = {
	/*rogue: 			['subtype_rogue','evade_ability'],
	clerk: 			['subtype_clerk','deck_control_ability'],
	cleric: 		['subtype_cleric','cleanse_ally_ability','active_healing_ability'],
	mermaid: 		['subtype_mermaid'],
	reptile: 		['subtype_reptile'],
	plant: 			['subtype_plant'],
	golem: 			['subtype_golem','repairing_ability','type_structure'],
	witch: 			['subtype_witch','curse_ability'],
	mage: 			['subtype_mage'],
	undead: 		['subtype_undead'],
	elf: 			['subtype_elf'],
	goblin: 		['subtype_goblin'],
	fairy: 			['subtype_fairy'],
	warrior: 		['subtype_warrior','type_creature'],
	animal: 		['subtype_animal'],
	fungus: 		['subtype_fungus','ally_creature_death_proc_ability','ally_unit_card_played_proc_ability'],
	daemon: 		['subtype_daemon'],
	angel: 			['subtype_angel'],
	wall: 			['subtype_wall','projectile_ability'],
	aquatic: 		['subtype_aquatic'],
	ship: 			['subtype_aquatic','subtype_ship'],
	jotnar: 		['subtype_jotnar'],
	gnome: 			['subtype_gnome'],
	royal: 			['subtype_royal'],
	horror: 		['subtype_horror'],*/
}

function check_card(card_id){
	if(all_available_cards[card_id] != undefined)
	{
		var card_info = all_available_cards[card_id];
		if(card_info['color'] == 'colorless'){all_available_cards[card_id]['color'] = ['white'];}
		if(card_info['color'][0] != undefined && card_info['color'][0] == 'colorless'){all_available_cards[card_id]['color'] = ['white'];}
		if(card_info['unique'] != undefined && card_info['unique'] == true)
		{
			all_available_cards[card_id]['color'] = ['purple'];
			all_available_cards[card_id]['max_in_deck'] = 1;
		}
		if(card_info['abilities'] != undefined && card_info['abilities']['minimum_allies'] != undefined && card_info['abilities']['minimum_allies'] < 5 && card_info['max_in_deck'] == undefined)
		{
			all_available_cards[card_id]['max_in_deck'] = 1;
		}
		if(card_info['abilities'] != undefined && card_info['abilities']['minimum_enemies'] != undefined && card_info['abilities']['minimum_enemies'] < 5 && card_info['max_in_deck'] == undefined)
		{
			all_available_cards[card_id]['max_in_deck'] = 1;
		}
		/*if(old_cards[card_id] != undefined)
		{*/
			/*eachoa(racial_abilities, function(race, racial_ability){
				if(match_array_values(all_available_cards[card_id]['subtypes'], race))
				{
					if(all_available_cards[card_id]['abilities'][racial_ability] == undefined)
					{
						all_available_cards[card_id]['abilities'][racial_ability] = 1;
					}
					if(all_available_cards[card_id]['hero_version'] != undefined)
					{
						if(all_available_cards[card_id]['hero_version']['abilities'][racial_ability] == undefined)
						{
							all_available_cards[card_id]['hero_version']['abilities'][racial_ability] = 1;
						}
					}
				};
			});*/
		/*}*/
		if(card_info['time'] != undefined && card_info['time'] > 0)
		{
			all_available_cards[card_id]['raw_time'] = calculate_card_time(card_id);
			all_available_cards[card_id]['time'] = all_available_cards[card_id]['raw_time'];
		}
		if(card_info['effects'] == undefined)
		{
			all_available_cards[card_id]['effects'] = {};
		}
		if(card_info['hero_version'] != undefined)
		{
			if(card_info['hero_version']['name'] == undefined){card_info['hero_version']['name'] = card_info['name'];};
			if(card_info['hero_version']['type'] == undefined){card_info['hero_version']['type'] = card_info['type'];};
			if(card_info['hero_version']['subtypes'] == undefined){card_info['hero_version']['subtypes'] = card_info['subtypes'];};
			if(card_info['hero_version']['image'] == undefined){card_info['hero_version']['image'] = card_info['image'];};
			if(card_info['hero_version']['image_position'] == undefined && card_info['image_position'] != undefined){card_info['hero_version']['image_position'] = card_info['image_position'];};
			var hero_time = calculate_card_time(card_id, undefined, true);
			//var hero_hp = 50 - ((hero_time - 6) * 5);
			//var hero_hp = ideal_hero_hp / (hero_time / 6);
			var hero_hp = ideal_hero_hp - (hero_time * hero_hp_cost_factor) + (6 * hero_hp_cost_factor);
			if(hero_hp > ideal_hero_hp && card_info['hero_version']['verified'] == undefined)
			{
				console.log(card_id + ' hero hp: ' + hero_hp);
			}
			if(hero_hp < ideal_hero_hp/2 && card_info['hero_version']['verified'] == undefined)
			{
				console.log(card_id + ' hero hp: ' + hero_hp);
			}
			card_info['hero_version']['health'] = Math.ceil(hero_hp);
			//delete card_info['hero_version']['theme'];
			/*if(card_info['hero_version']['theme'] != undefined)
			{*/
				/*if(match_array_values(card_info['hero_version']['theme'], 'muscle') == false)
				{
					card_info['hero_version']['theme'][get_highest_key_in_object(card_info['hero_version']['theme']) + 1] = 'muscle';
				}*/
				/*if(match_array_values(card_info['hero_version']['theme'], 'defense') == false)
				{
					card_info['hero_version']['theme'][get_highest_key_in_object(card_info['hero_version']['theme']) + 1] = 'defense';
				}*/
				/*if(match_array_values(card_info['hero_version']['theme'], 'aoe') == false)
				{
					card_info['hero_version']['theme'][get_highest_key_in_object(card_info['hero_version']['theme']) + 1] = 'aoe';
				}*/

			/*}
			else
			{*/
			if(card_info['hero_version']['theme'] == undefined)
			{
				card_info['hero_version']['theme'] = {};
			}
			/*eachoa(card_info['hero_version']['subtypes'], function(subtype_key, subtype){
				if(hero_subtype_themes[subtype] != undefined)
				{
					eachoa(hero_subtype_themes[subtype], function(new_subtype_key, new_subtype)
					{
						card_info['hero_version']['theme'][count_object(card_info['hero_version']['theme'])] = new_subtype;
					});
				}
			});
			eachoa(card_info['hero_version']['abilities'], function(ability_id, ability_level){
				if(all_abilities[ability_id] != undefined && all_abilities[ability_id]['hero_tactics'] != undefined)
				{
					eachoa(all_abilities[ability_id]['hero_tactics'], function(tactic_key, tactic_id)
					{
						card_info['hero_version']['theme'][count_object(card_info['hero_version']['theme'])] = tactic_id;
					});
				}
			});
			if(count_object(card_info['hero_version']['theme']) == 0){console.log(card_id + ' has no hero theme');}
			if(card_info['hero_version']['not_theme'] == undefined && card_info['hero_version']['power'] === false)
			{
				card_info['hero_version']['not_theme'] = ['empower_hero_ability'];
			}*/
			/*}*/
		}

		if(card_info['theme'] == undefined){card_info['theme'] = {};};
		if(card_info['craft_theme'] == undefined || card_info['craft_theme'][0] == undefined){card_info['craft_theme'] = ['type_' + card_info['type']];};
		card_info['theme'][get_highest_key_in_object(card_info['theme']) + 1] = 'type_' + card_info['type'];

		eachoa(card_info['subtypes'], function(subtype_id, current_subtype){
			card_info['theme'][get_highest_key_in_object(card_info['theme']) + 1] = 'subtype_' + current_subtype;
			card_info['craft_theme'][get_highest_key_in_object(card_info['craft_theme']) + 1] = 'subtype_' + current_subtype;
		});

		eachoa(card_info['abilities'], function(ability_id, ability_level){
			//card_info['craft_theme'][get_highest_key_in_object(card_info['craft_theme']) + 1] = '' + ability_id + '_ability_name';
			eachoa(all_abilities[ability_id]['ability_subtypes'], function(ability_subtype_id, ability_subtype_name){
				if(match_array_values(['' + ability_subtype_name + '_ability'], card_info['theme']) == false)
				{
					card_info['theme'][get_highest_key_in_object(card_info['theme']) + 1] = '' + ability_subtype_name + '_ability';
				}
			});
			eachoa(all_abilities[ability_id]['ability_craft_subtypes'], function(ability_subtype_id, ability_subtype_name){
				if(match_array_values(['' + ability_subtype_name /*+ '_ability'*/], card_info['craft_theme']) == false && (match_array_values(not_craft_themes, ability_subtype_name) == false))
				{
					card_info['craft_theme'][get_highest_key_in_object(card_info['craft_theme']) + 1] = '' + ability_subtype_name /*+ '_ability'*/;
				}
			});
			
		});

		if(card_info['time'] != undefined && card_info['time'] > 0)
		{
			/*if(card_info['time'] < 40 && correct_card_time(card_info['time'] + 1) == correct_card_time(card_info['time']))
			{
				console.log(card_id + ' too weak');
				show_time_correction(card_info['time'],card_info['time']);
			}
			card_info['time'] = correct_card_time(card_info['time']);*/
			//card_info['time'] = Math.ceil(card_info['time'] / (1 + (card_info['time'] / 60)) );
			card_info['time'] = Math.ceil(card_info['time']);
		}
	    if(card_info['value'] == undefined)
	    {
	    	//console.log(card_info['name']);
	    	card_info['value'] = calculate_card_value(card_id);
	    }
	    if(all_available_cards['card_back_' + card_id] != undefined)
		{
			all_available_cards['card_back_' + card_id]['value'] = card_info['value'] * 25;
		}
	    var used_in_recipes = 0;
	    eachoa(all_available_cards, function(other_card_id, other_card_info){
	    	if(other_card_info['recipe'] != undefined && other_card_info['recipe'][card_id] != undefined)
	    	{
	    		used_in_recipes++;
	    	}
	    });
	    card_info['used_in_recipes'] = used_in_recipes;
	}
}


var card_check_timeouts = {};

function check_all_cards(){
	
	var cards_checked = 0;
	eachoa(all_available_cards, function(card_id, card_info){
	    /*if(card_info['version'] == undefined || card_info['version'] < 2)
	    {
	    	console.log(card_info['name'] + ' is not version 2');
	        all_available_cards[card_id]['time'] += 2;
	        if(all_available_cards[card_id]['time'] > 0)
	        {
	            all_available_cards[card_id]['time'] -= Math.floor(all_available_cards[card_id]['time'] / 5);
	        }
	    }*/
	    cards_checked++;
	    var card_checking_progress = Math.floor((cards_checked / total_available_card_count) * 100);
	   	card_check_timeouts[cards_checked] = setTimeout(function(){
		    check_card(card_id);
			$('.card_checking_progress').html(card_checking_progress + '%');
		},cards_checked / loading_speed);
	});
	//remove_unused_abilities();
}

//check_all_cards();

var all_available_boosts = {};
var all_card_backs = {};
var random_loot_drops = {};

eachoa(all_available_cards, function(card_id, card_info){
	if(card_info['basic_reward'] != undefined && card_info['basic_reward'] == true && random_loot_drops[card_id] == undefined /*match_array_values(card_id, random_loot_drops) == false*/)
	{
		random_loot_drops[card_id] = 1 / Math.sqrt(Math.sqrt(card_info['value'] * (1 + (card_info['value'] / 10))));
	}
	if(card_info['type'] == 'consumable' && card_info['reward'] != undefined && card_info['reward']['type'] != undefined && card_info['reward']['type'] == 'boost')
	{
		all_available_boosts[card_id] = card_info['boost_pick_chance'];
	}

	if(card_info['type'] == 'cardback')
	{
		all_card_backs[card_id] = card_info['image'];
	}

	if(card_info['pick_chance'] == undefined)
	{
		card_info['pick_chance'] = 0;
	}

	var no_card_back_yet = true;
	eachoa(all_card_backs, function(card_back_id, card_back_image){
		if(card_back_image == card_info['image'])
		{
			no_card_back_yet = false;
		}
	});

	if(no_card_back_yet == true && (card_info['type'] == 'creature' || card_info['type'] == 'spell' || card_info['type'] == 'structure' || card_info['type'] == 'object' || card_info['type'] == 'artifact' || card_info['type'] == 'currency'))
	{
		all_available_cards['card_back_' + card_id] = {
			name: 				'card back: ' + card_info['name'],
			//version: 			2,
			non_tradable: 		card_info['non_tradable'],
			value: 				card_info['value'] * 25,
			type: 				'cardback',
			color: 				['green'],
			pick_chance: 		0,
			months_available: 	card_info['months_available'],
			time: 				0,
			image: 				card_info['image'],
			power: 				false,
			armor: 				false,
			health: 			false,
			abilities: 			{},
			reward: 			{
				type: 			'card_back',
				card_back_id: 	'card_back_' + card_id,
				description: 	'Collects this card back.',
				amount_used: 	[1],
			},
		};

		if(card_info['card_back_non_tradable'] == undefined || card_info['card_back_non_tradable'] == true)
		{
			all_available_cards['card_back_' + card_id]['non_tradable'] = true;
		}

		all_card_backs['card_back_' + card_id] = card_info['image'];
	}

});

all_available_cards = sortObj(all_available_cards);
all_card_backs = sortObj(all_card_backs);

function learn_recipe(recipe_id){
	if(gamedata['known_recipes'] == undefined){gamedata['known_recipes'] = {};}
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_id == recipe_id && card_info['recipe'] != undefined && card_info['type'] != 'recipe')
		{
			gamedata['known_recipes'][card_id] = true;
		}
	});
}

function learn_all_recipes(){
	if(gamedata['known_recipes'] == undefined){gamedata['known_recipes'] = {};}
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['recipe'] != undefined && card_info['type'] != 'recipe')
		{
			gamedata['known_recipes'][card_id] = true;
		}
	});
}

function check_no_achievement_yet(card_theme, max_shown){
	var achievable_cardbacks = {};
	var shown = 0;
	eachoa(all_achievements, function(achievement_id, achievement_info){
		eachoa(achievement_info['rewards'], function(rewards_id, rewards_info){
			achievable_cardbacks[rewards_info['reward_id']] = true;
		});
	});
	eachoa(all_available_cards, function(card_id, card_info){
		if((max_shown == undefined || max_shown > shown) && achievable_cardbacks['card_back_' + card_id] == undefined && (card_theme == undefined || match_array_values(card_theme, card_info['theme'])))
		{
			shown++;
			console.log(card_id);
		}
	});
}

function get_all_hero_themes(){
	var all_hero_themes = {};
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['hero_version'] != undefined && card_info['hero_version']['theme'] != undefined)
		{
			eachoa(card_info['hero_version']['theme'], function(theme_id, theme_name){
				if(all_hero_themes[theme_name] == undefined)
				{
					all_hero_themes[theme_name] = 0;
				}
				all_hero_themes[theme_name]++;
			});
			
		}
	});
	return all_hero_themes;
}

function get_all_aoe_themes(){
	var all_aoe_themes = {};
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['theme'] != undefined && match_array_values(['aoe'], card_info['theme']))
		{
			eachoa(card_info['theme'], function(theme_id, theme_name){
				if(all_aoe_themes[theme_name] == undefined)
				{
					all_aoe_themes[theme_name] = 0;
				}
				all_aoe_themes[theme_name]++;
			});
			
		}
	});
	return all_aoe_themes;
}

function get_all_artifact_themes(){
	var all_aoe_themes = {};
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['theme'] != undefined && card_info['type'] == 'artifact')
		{
			eachoa(card_info['theme'], function(theme_id, theme_name){
				if(all_aoe_themes[theme_name] == undefined)
				{
					all_aoe_themes[theme_name] = 0;
				}
				all_aoe_themes[theme_name]++;
			});
			
		}
	});
	return all_aoe_themes;
}

function check_no_aoe_yet(show_found){
	/*var all_hero_themes = get_all_hero_themes();
	eachoa(all_hero_themes, function(theme, theme_count){
		var found_aoe = false;
		eachoa(all_available_cards, function(card_id, card_info){
			if(match_array_values(theme, card_info['theme']) && match_array_values('aoe', card_info['theme']))
			{
				if(show_found != undefined && show_found == true){console.log(theme + ' aoe found');}
				found_aoe = true;
			}
		});
		if(found_aoe == false)
		{
			console.log(theme);
		}
	});*/
	/*var all_aoe_themes = get_all_aoe_themes();
	eachoa(all_aoe_themes, function(theme, theme_count){
		var found_aoe = false;
		eachoa(all_available_cards, function(card_id, card_info){
			var hero_can_use_aoe = false;
			if(card_info['hero_version'] != undefined && card_info['hero_version']['theme'] != undefined)
			if(match_array_values(theme, card_info['hero_version']['theme']))
			{
				if(show_found != undefined && show_found == true){console.log(theme + ' aoe found');}
				found_aoe = true;
			}
		});
		if(found_aoe == false)
		{
			console.log(theme);
		}
	});*/
	var all_aoe_themes = get_all_aoe_themes();
	var good_aoe_themes = {};
	var incomplete_count = 0;
	eachoa(all_available_cards, function(card_id, card_info){	
		if(card_info['hero_version'] != undefined && card_info['hero_version']['theme'] != undefined)
		{
			var hero_can_use_aoe = false;
			eachoa(all_aoe_themes, function(theme, theme_count){
				if(theme != 'aoe' && match_array_values(theme, card_info['hero_version']['theme']))
				{
					hero_can_use_aoe = true;
					if(show_found != undefined && show_found == true){console.log(card_id + ' uses ' + theme + ' aoe');}
				}
			});
			if(hero_can_use_aoe == false)
			{
				incomplete_count++;
				console.log('Needs aoe: ' + card_id);
				/*eachoa(card_info['hero_version']['theme'], function(them_id, theme_name){
					if(theme_name != 'muscle' && theme_name != 'defense' && theme_name != 'aoe')
					{
						if(good_aoe_themes[theme_name] == undefined)
						{
							good_aoe_themes[theme_name] = 0;
						}
						good_aoe_themes[theme_name]++;
					}
				});*/
			}
		}
	});
	if(incomplete_count > 0)
	{
		console.log(all_aoe_themes);
		console.log(incomplete_count);
	}
	else
	{
		console.log('AOE: check!');
	}

}

function check_no_artifact_yet(show_found){
	var all_aoe_themes = get_all_artifact_themes();
	var good_aoe_themes = {};
	var incomplete_count = 0;
	eachoa(all_available_cards, function(card_id, card_info){	
		if(card_info['hero_version'] != undefined && card_info['hero_version']['theme'] != undefined)
		{
			var hero_can_use_aoe = false;
			eachoa(all_aoe_themes, function(theme, theme_count){
				if(theme != 'aoe' && match_array_values(theme, card_info['hero_version']['theme']))
				{
					hero_can_use_aoe = true;
					if(show_found != undefined && show_found == true){console.log(card_id + ' uses ' + theme + ' artifact');}
				}
			});
			if(hero_can_use_aoe == false)
			{
				incomplete_count++;
				console.log('Needs artifact: ' + card_id);
				eachoa(card_info['hero_version']['theme'], function(them_id, theme_name){
					if(theme_name != 'muscle' && theme_name != 'defense' && theme_name != 'aoe')
					{
						if(good_aoe_themes[theme_name] == undefined)
						{
							good_aoe_themes[theme_name] = 0;
						}
						good_aoe_themes[theme_name]++;
					}
				});
			}
		}
	});
	if(incomplete_count > 0)
	{
		console.log(good_aoe_themes);
		console.log(incomplete_count);
	}
	else
	{
		console.log('Artifacts: check!');
	}

}

var all_card_themes = {
	races:[
		//'subtype_dwarf',
		'subtype_elf',
		//'subtype_fairy',
		//'subtype_goblin',
		'subtype_golem',
		'subtype_human',
		//'subtype_jotnar',
		//'subtype_mermaid',
		//'subtype_wanton',
	],
	types:[
		'subtype_warrior',
		'subtype_rogue',
		//'subtype_royal',
		//'subtype_holy',
		'subtype_mage',
	],
	aflictions:[
		'burn_ability',
		'poison_ability',
		'curse_ability',
		'doom_ability',
	],
	movement:[
		//'move_ability',
		'seek_ability',
		'run_away_ability',
		'guard_ability',
		'movement_ability',
	],
	evasion:[
		//'evasion_ability',
		'flying_ability',
		'grant_stealth_ability',
		'evade_ability',
	],
	reduction:[
		'plated_ability',
		//'shield_ability',
		//'resist_fire_ability',
		'resist_magic_ability',
	],
	deck_control:[
		'draw_cards_ability',
		'hasten_ability',
		'slow_ability',
		'discard_enemy_ability',
	],
	elemental:[
		'air_ability',
		//'earth_ability',
		'fire_ability',
		'water_ability',
		'cold_ability',
		'elemental_ability',
	],
	special:[
		'reap_ability',
		//'snipe_ability',
		'stun_ability',
		'empower_ally_ability',
		'enrage_ability',
		//'gain_energy_ability',
		//'restore_hero_ability',
	],
}

function count_card_themes(themes, show_me){
	var lowest = {
		key: '',
		amount: 0,
	};
	var lowest_id = '';
	if(themes != undefined && typeof(themes) == 'string' && all_card_themes[themes] != undefined){themes = all_card_themes[themes];}
	if(themes == undefined){themes = all_card_themes;}
	eachoa(themes, function(theme_key, theme_id){
		var temp_lowest = 0;
		if(typeof(theme_id) == 'string')
		{
			temp_lowest = count_card_theme(theme_id, show_me);
			//console.log(lowest);
			if(temp_lowest > 0 && (temp_lowest < lowest['amount'] || lowest['amount'] == 0))
			{
				lowest['key'] = theme_id;
				lowest['amount'] = temp_lowest;
			}
			
		}
		else
		{
			if(show_me != undefined){console.log('---' + theme_key + '---');}
			//count_card_themes(theme_id);
			var returned_lowest = count_card_themes(theme_id, show_me);
			if(returned_lowest['amount'] > 0 && (returned_lowest['amount'] < lowest['amount'] || lowest['amount'] == 0))
			{
				lowest['key'] = returned_lowest['key'];
				lowest['amount'] = returned_lowest['amount'];
			}
		}
		
	});
	return lowest;
}

function count_card_theme(theme, show_me){
	var total_theme_count = 0;
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['theme'] != undefined && match_array_values(card_info['theme'], theme)){
			total_theme_count++;
		};
	});
	if(show_me != undefined){console.log(theme + ': ' + total_theme_count)};
	return total_theme_count;
}

function count_all_card_themes(){
	var all_card_themes = {};
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['theme'] != undefined){
			eachoa(card_info['theme'], function(theme_id, theme_name){
				if(theme_name != undefined && theme_name.replaceAll('type_','') == theme_name)
				{
					if(all_card_themes[theme_name] == undefined){all_card_themes[theme_name] = 0;}
					all_card_themes[theme_name]++;
				}
			});
		};
	});
	return all_card_themes;
}

function count_card_times(){
	var card_times = {};
	eachoa(all_available_cards, function(card_id, card_info){
		if((card_info['type'] == 'creature' || card_info['type'] == 'structure' || card_info['type'] == 'spell' || card_info['type'] == 'artifact') && card_info['pick_chance'] > 0)
		{
			if(card_times[card_info['time']] == undefined){card_times[card_info['time']] = 0;}
			card_times[card_info['time']]++;
		}
	});
	return card_times;
}

function count_card_subtypes(type){
	var card_subtypes = {};
	eachoa(all_available_cards, function(card_id, card_info){
		if((type == undefined || card_info['type'] == type) && (card_info['type'] == 'creature' || card_info['type'] == 'structure' || card_info['type'] == 'spell' || card_info['type'] == 'artifact') && card_info['pick_chance'] > 0)
		{
			eachoa(card_info['subtypes'], function(useless_key, current_subtype){
				if(card_subtypes[current_subtype] == undefined){card_subtypes[current_subtype] = 0;}
				card_subtypes[current_subtype]++;
			});
		}
	});
	return card_subtypes;
}

function show_card_times(card_time){
	if(card_time != undefined)
	{
		eachoa(all_available_cards, function(card_id, card_info){
			if((card_info['type'] == 'creature' || card_info['type'] == 'structure' || card_info['type'] == 'spell' || card_info['type'] == 'artifact') && card_info['pick_chance'] > 0)
			{
				if(card_info['time'] == card_time)
				{
					console.log(card_id);
				}
			}
		});
	}
}

var default_card = {
		name: 				'',
		type: 				'',
		subtypes: 			[],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/image.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		verified: 			true,
		hero_version: 			{
			theme: 				[],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{},
			verified: 			true,
		},
		quote: '\"\"',
}

function get_stat_based_on_type_and_theme(stat, type, themes, hero_version){
	var possible_powers = {};
	eachoa(all_available_cards, function(card_id, card_info){
		var matches = false;
		if(themes == undefined || count_object(themes) == 0)
		{
			matches = true;
		}
		else
		{
			eachoa(card_info['theme'], function(theme_key, theme_name){
				if(theme_name != undefined)
				{
					eachoa(themes, function(theme_key_2, theme_name_2){
						if(theme_name.indexOf(theme_name_2) !== -1)
						{
							matches = true;
						}
					});
				}
			});
		}
		if(type != undefined && card_info['type'] != type)
		{
			matches = false;
		}
		if(matches == true)
		{
			if(hero_version == undefined || hero_version == false)
			{
				if(possible_powers[card_info[stat]] == undefined)
				{
					possible_powers[card_info[stat]] = 0;
				}
				possible_powers[card_info[stat]] += 1;
			}
			else
			{
				if(card_info['hero_version'] != undefined)
				{
					if(possible_powers[card_info['hero_version'][stat]] == undefined)
					{
						possible_powers[card_info['hero_version'][stat]] = 0;
					}
					possible_powers[card_info['hero_version'][stat]] += 1;
				}
			}
		}
	});
	var chosen_power = (get_random_key_from_object_based_on_num_value(possible_powers));
	if(count_object(possible_powers) < 1){chosen_power = 'false';}
	return chosen_power;
}

function get_skills_based_on_type_and_themes(type, themes, hero_version){
	var possible_skills = {};
	var matched_cards_count = 0;
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['type'] == type || type == undefined)
		{
			var matches = 0;
			eachoa(card_info['theme'], function(theme_key, theme_name){
				if(theme_name != undefined)
				{
					eachoa(themes, function(theme_key_2, theme_name_2){
						if(theme_name.indexOf(theme_name_2) !== -1)
						{
							matches += 1;
						}
					});
				}
			});
			if(matches > 0)
			{
				if(hero_version == undefined || hero_version == false)
				{
					eachoa(card_info['abilities'], function(ability_id, ability_level){
						if(possible_skills[ability_id] == undefined)
						{
							possible_skills[ability_id] = 0;
						}
						possible_skills[ability_id] += matches;
					});
					matched_cards_count += matches;
				}
				else
				{
					if(card_info['hero_version'] != undefined)
					{
						eachoa(card_info['hero_version']['abilities'], function(ability_id, ability_level){
						if(possible_skills[ability_id] == undefined)
						{
							possible_skills[ability_id] = 0;
						}
						possible_skills[ability_id] += matches;
					});
					matched_cards_count += matches;
					}
				}
			}
		}
	});
	eachoa(all_abilities, function(ability_id, ability_info){
		var matches = 0;
		eachoa(ability_info['ability_subtypes'], function(theme_key, theme_name){
			if(theme_name != undefined)
			{
				eachoa(themes, function(theme_key_2, theme_name_2){
					if(theme_name.indexOf(theme_name_2) !== -1)
					{
						matches += 1;
					}
				});
			}
		});
		if(matches > 0)
		{
			if(possible_skills[ability_id] == undefined)
			{
				possible_skills[ability_id] = 0;
			}
			possible_skills[ability_id] += matches;
			matched_cards_count += matches;
		}
	});
	var chosen_skills = {};
	eachoa(possible_skills, function(skill_id, skill_count){
		if(Math.random() * matched_cards_count < skill_count || skill_count > matched_cards_count / 2)
		{
			chosen_skills[skill_id] = 1;
		}
	});
	return chosen_skills;
}

function get_name_parts(theme, type){
	var all_name_parts = {};
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['pick_chance'] > 0 && match_array_values(theme, card_info['theme']) > 0 && (type == undefined || card_info['type'] == type))
		{
			var current_card_name = card_info['name'];
			var current_name_parts = current_card_name.split(' ');
			eachoa(current_name_parts, function(useless_key, name_part){
				if(all_name_parts[name_part] == undefined){all_name_parts[name_part] = 0;}
				all_name_parts[name_part]++;
			});
		}
	});
	return all_name_parts;
}

function generate_card(name, subtypes, themes, type, image){
	var new_card = true_copyobject(default_card);
	if(image != undefined)
	{
		new_card['image'] = 'cards/' + image + '.jpg';
	}
	if(name == undefined){name = 'new card';}
	if(name != undefined){new_card['name'] = name;}

	if(type == undefined)
	{
		var all_types = {artifact:true,spell:true,creature:true,structure:true};
		type = get_random_key_from_object(all_types);
	}
	if(type != undefined){new_card['type'] = type;}
	
	if(subtypes == undefined)
	{
		var all_used_subtypes = count_card_subtypes(new_card['type']);
		var chosen_subtype = get_random_key_from_object_based_on_num_value(all_used_subtypes);
		//console.log(all_used_subtypes);
		subtypes = [chosen_subtype];
		//console.log('subtype: ' + chosen_subtype);
	}
	if(subtypes != undefined){new_card['subtypes'] = subtypes;}

	if(themes == undefined)
	{
		if(Math.random() < 1.5)
		{
			var all_card_themes = count_all_card_themes();
			var chosen_theme = get_random_key_from_object(all_card_themes);
			themes = [chosen_theme];
			console.log('theme: ' + chosen_theme);
		}
		else
		{
			var least_used_theme = count_card_themes();
			themes = [least_used_theme['key']];
			console.log('theme: ' + least_used_theme['key']);
		}
	}

	var all_name_parts = get_name_parts(themes, type);
	if(count_object(all_name_parts) < 3){all_name_parts = get_name_parts(themes);}
	//console.log(all_name_parts);
	if(count_object(all_name_parts) > 1)
	{
		var first_name_part = get_random_key_from_object(all_name_parts);
		delete all_name_parts[first_name_part];
		new_card['name'] = first_name_part + ' ' + get_random_key_from_object(all_name_parts);
	}

	var chosen_power = get_stat_based_on_type_and_theme('power',type, themes, false);
	if(type == 'creature' && chosen_power == 'false')
	{
		chosen_power = get_stat_based_on_type_and_theme('power',type, undefined, false);
	}
	if(chosen_power != 'false'){new_card['power'] = parseInt(chosen_power);}
	var chosen_health = get_stat_based_on_type_and_theme('health',type, themes, false);
	if((type == 'creature' || type == 'structure') && chosen_health == 'false')
	{
		chosen_health = get_stat_based_on_type_and_theme('health',type, undefined, false);
	}
	if(chosen_health != 'false'){new_card['health'] = parseInt(chosen_health);}
	var chosen_abilities = get_skills_based_on_type_and_themes(type, themes, false);
	if(count_object(chosen_abilities) == 0){chosen_abilities = get_skills_based_on_type_and_themes(undefined, themes, false);}
	eachoa(chosen_abilities, function(ability_id, ability_level){
		new_card['abilities'][ability_id] = 1;
	});

	if(type == 'creature' || type == 'structure')
	{
		var chosen_power = get_stat_based_on_type_and_theme('power',type, themes, true);
		if(chosen_power != 'false'){new_card['hero_version']['power'] = parseInt(chosen_power);}
		
		eachoa(subtypes, function(subtypes_id, subtype_name){
			new_card['hero_version']['theme'][get_highest_key_in_object(new_card['hero_version']['theme']) +1] = 'subtype_' + subtype_name;
		});
		var chosen_abilities = get_skills_based_on_type_and_themes(type, themes, true);
		eachoa(chosen_abilities, function(ability_id, ability_level){
			new_card['hero_version']['abilities'][ability_id] = 1;
			var temp_ability_subtypes = {};
			eachoa(all_abilities[ability_id]['ability_subtypes'], function(ability_subtype_key, ability_subtype_name){
				temp_ability_subtypes[ability_subtype_name] = true;
			});
			eachoa(temp_ability_subtypes, function(ability_subtype_name, ability_subtype_count){
				new_card['hero_version']['theme'][get_highest_key_in_object(new_card['hero_version']['theme']) +1] = ability_subtype_name + '_ability';
			});
			
		});
		//new_card['hero_version']['theme'] = themes;
		
	}
	else
	{
		delete new_card['hero_version'];
	}


	$('.upgrades_container').html(name.replaceAll(' ','_') + ':{<br/>' + parse_card_object(new_card) + '},');
	all_available_cards['temp_card'] = true_copyobject(new_card);
	check_card('temp_card');
	console.log(new_card);
	show_card_details('temp_card');
}

function parse_card_object(card, newline){
	var parsed_object = '';
	eachoa(card, function(stat_id, stat){
		var parsed_stat_id = parseInt(stat_id);
		if(parsed_stat_id != stat_id)
		{
			parsed_object+= stat_id + ': ';
		}
		if(typeof(stat) == 'object')
		{
			if(stat_id == 'hero_version')
			{
				parsed_object+= '{<br/>' + parse_card_object(stat, true) + '},';
			}
			else
			{
				if(stat[0] == undefined && stat[1] == undefined)
				{
					parsed_object+= '{' + parse_card_object(stat, false) + '},';
				}
				else
				{
					parsed_object+= '[' + parse_card_object(stat, false) + '],';
				}
			}
			if(newline == undefined || newline == true){parsed_object+='<br/>';}
		}
		if(typeof(stat) == 'number')
		{
			parsed_object+= stat + ', ';
			if(newline == undefined || newline == true){parsed_object+='<br/>';}
		}
		if(typeof(stat) == 'string')
		{
			parsed_object+= '\'' + stat + '\', ';
			if(newline == undefined || newline == true){parsed_object+='<br/>';}
		}
	});
	return parsed_object;
}

function show_peasant_recipes(){
	var prec = 0;
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['recipe'] != undefined && card_info['recipe']['peasant'] != undefined && count_object(card_info['recipe']) < 2)
		{
			console.log(card_id);
			prec++;
		}
	});
	console.log(prec);
}

function show_no_recipe(){
	var prec = 0;
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['recipe'] == undefined && card_info['pick_chance'] > 0)
		{
			console.log(card_id);
			prec++;
		}
	});
	console.log(prec);
}

function generate_all_recipes(){
	var cards_checked = 0;
	eachoa(all_available_cards, function(card_id, card_info){
		cards_checked++;
	    var card_checking_progress = Math.floor((cards_checked / total_available_card_count) * 100);
	   	card_check_timeouts[cards_checked] = setTimeout(function(){
		
			if(card_info['recipe'] == undefined && card_info['pick_chance'] > 0 && (card_info['type'] == 'creature' || card_info['type'] == 'spell' || card_info['type'] == 'structure' || card_info['type'] == 'object' || card_info['type'] == 'artifact'))
			{
				var card_recipe = generate_recipe(card_id);
				if(count_object(card_recipe) > 0)
				{
					card_info['recipe'] = card_recipe;
				}
			}

			if(card_info['recipe'] != undefined && card_info['pick_chance'] > 0 && (card_info['type'] == 'creature' || card_info['type'] == 'spell' || card_info['type'] == 'structure' || card_info['type'] == 'object' || card_info['type'] == 'artifact'))
			{
				all_available_cards['recipe_' + card_id] = {
					name: 				'recipe: ' + card_info['name'],
					version: 			2,
					non_tradable: 		true,
					value: 				card_info['value'],
					type: 				'recipe',
					color: 				['yellow'],
					pick_chance: 		0,
					months_available: 	card_info['months_available'],
					time: 				0,
					image: 				card_info['image'],
					power: 				false,
					armor: 				false,
					health: 			false,
					abilities: 			{auto_learn: 1},
					recipe: 			card_id,
				};
			}
			$('.recipe_generation_progress').html(card_checking_progress + '%');
		},cards_checked / loading_speed);
	});
	
}

function generate_recipe(card_id, cost_left, current_recipe, subtypes_left){
	var original_cost_left = cost_left + 0;
	if(all_available_cards[card_id] != undefined)
	{
		var current_card = all_available_cards[card_id];
		var possible_costs = {};
		var best_match = 0;
		var best_match_id = '';
		var recipe_size = count_object(current_recipe);
		if(cost_left == undefined)
		{
			cost_left = current_card['value'] + 0;
		}
		if(current_recipe == undefined)
		{
			current_recipe = {};
		}
		if(subtypes_left == undefined || count_object(subtypes_left) == 0)
		{
			subtypes_left = true_copyobject(current_card['subtypes']);
		}
		eachoa(subtypes_left, function(subtype_key, current_subtype){
			if(current_subtype == 'human')
			{
				delete subtypes_left[subtype_key];
			}
		});
		
		eachoa(all_available_cards, function(cost_id, cost_info){
			if((cost_info['value'] < cost_left) && (recipe_size > 0 || cost_info['value'] <= all_available_cards[card_id]['value'] * 0.9 || all_available_cards[card_id]['value'] < 10) && cost_info['pick_chance'] > 0 && current_recipe[cost_id] == undefined)
			{
				var matched_amount = (match_array_values(current_card['craft_theme'], cost_info['craft_theme'], true));
				matched_amount *= matched_amount;
				var subtype_match = match_array_values(subtypes_left, cost_info['subtypes'], true) * 1;
				if(subtype_match > 0)
				{
					matched_amount *= (subtype_match + 0);
				}
				var value_percent = (cost_info['value'] / current_card['value']);
				matched_amount *= value_percent;
				if(matched_amount > 0 && cost_info['used_in_recipes'] != undefined && cost_info['used_in_recipes'] > 0)
				{
					matched_amount /= sqr(sqr(sqr(5 + (cost_info['used_in_recipes'] /** recipe_size*/))));
				}
				if(matched_amount > 0 && (cost_info['used_in_recipes'] == undefined || cost_info['used_in_recipes'] == 0))
				{
					matched_amount *= 5;
				}
				if((matched_amount > 0 && matched_amount >= /*sqr*/(recipe_size * 0.25)) || (count_object(current_recipe) < 2 && matched_amount > 0))
				{
					possible_costs[cost_id] = matched_amount;
				
					if(matched_amount > best_match || (all_available_cards[best_match_id] != undefined && matched_amount == best_match && all_available_cards[cost_id]['value'] > all_available_cards[best_match_id]['value']))
					{
						best_match = matched_amount;
						best_match_id = cost_id;
					}
				}
			}
		});
		if(count_object(possible_costs) > 0)
		{
			let sortedObject = Object.fromEntries(
			    Object.entries(possible_costs).sort(([, a], [, b]) => b - a)
			);
			//console.log(sortedObject);
			possible_costs = sortedObject;
			eachoa(possible_costs, function(possible_cost_id, possible_cost_chance){
				if(cost_left > 1 && all_available_cards[possible_cost_id] != undefined && all_available_cards[possible_cost_id]['value'] < (cost_left * 0.9) && count_object(current_recipe) < 4 && (count_object(current_recipe) < 2 || all_available_cards[possible_cost_id]['value'] > Math.ceil(all_available_cards[card_id]['value'] / 100)))
				{
					var cost_amount = Math.floor((cost_left * 0.9) / all_available_cards[possible_cost_id]['value']);
					cost_left -= cost_amount * all_available_cards[possible_cost_id]['value'];
					current_recipe[possible_cost_id] = cost_amount;
					if(all_available_cards[possible_cost_id]['used_in_recipes'] == undefined){all_available_cards[possible_cost_id]['used_in_recipes'] = 0;}
					all_available_cards[possible_cost_id]['used_in_recipes']++;
				}
			});
		}
		else
		{
			if(count_object(current_recipe) == 0 && cost_left > 0 && current_recipe['peasant'] == undefined && card_id != 'peasant' && all_available_cards[card_id]['value'] < 10)
			{
				current_recipe['peasant'] = Math.ceil(cost_left / 1.25);
				if(all_available_cards['peasant']['used_in_recipes'] == undefined){all_available_cards['peasant']['used_in_recipes'] = 0;}
				all_available_cards['peasant']['used_in_recipes']++;
			}
			
		}
		return current_recipe;
	}
}

function find_cards_not_used_in_recipe(value_max, value_min, show_each){
	if(value_max == undefined){value_max = 100000000;}
	if(value_min == undefined){value_min = 0;}
	var not_used_amount = 0;
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['pick_chance'] > 0 && (card_info['used_in_recipes'] == undefined || card_info['used_in_recipes'] == 0) && card_info['value'] <= value_max && card_info['value'] >= value_min)
		{
			if(show_each != undefined && show_each == true)
			{
				console.log(card_id + ', value: ' + card_info['value']);
			}
			not_used_amount++;
		}
	});
	return(not_used_amount);
}

function set_all_enemy_deck_cards(card_id){
	eachoa(gamedata['current_summon']['deck'], function(card_key, card_info){
		gamedata['current_summon']['deck'][card_key]['card_id'] = card_id;
	});
}

function check_unused_abilities(card_type, show_unused){
	if(card_type != undefined){console.log('checking ' + card_type + ' for unused abilities');}
	var unused_amount = 0;
	eachoa(all_abilities, function(ability_id, ability_info){
		if(ability_info['not_used'] == undefined)
		{
			var ability_used = false;
			eachoa(all_available_cards, function(card_id, card_info){
				if(card_type == undefined || card_type == card_info['type'])
				{
					if(card_info['abilities'][ability_id] != undefined || (card_info['hero_version'] != undefined && card_info['hero_version']['abilities'][ability_id] != undefined))
					{
						ability_used = true;
					}
				}
			});
			if(ability_used == false)
			{
				unused_amount += 1;
				if(show_unused != undefined && show_unused == true)
				{
					console.log(ability_id);
				}
			}
		}
	});
	return unused_amount;
}

function check_deck_building(){
	check_no_aoe_yet();
	check_no_artifact_yet();
	var not_used = find_cards_not_used_in_recipe(500);
	if(not_used > 0)
	{
		not_used = find_cards_not_used_in_recipe(500, 0, true);
	}
}

function check_double_card_images(){
	eachoa(all_available_cards, function(card_id, card_info){
		var current_card_image = '';
		if(card_info['type'] != 'cardback' && card_info['type'] != 'recipe' && card_info['image'] != undefined)
		{
			current_card_image = get_card_image_filename(card_id);
		}
		if(current_card_image != '')
		{
			eachoa(all_available_cards, function(card_id_2, card_info_2){
				if(card_id != card_id_2 && card_info_2['type'] != 'cardback' && card_info_2['type'] != 'recipe' && card_info_2['image'] != undefined)
				{
					var next_card_image = get_card_image_filename(card_id_2);
					if(current_card_image == next_card_image && count_object(current_card_image.split('-')) > 1)
					{
						console.log(card_id + ' has the same image as ' + card_id_2 + ' (' + current_card_image + ')');
					}
				}
			});
		}
	});
}

function get_card_image_filename(card_id){
	var current_card_image = '';
	if(all_available_cards[card_id] != undefined && all_available_cards[card_id]['image'] != undefined)
	{
		current_card_image = all_available_cards[card_id]['image'] + '';
		current_card_image = current_card_image.split('/');
		var last_key = count_object(current_card_image) - 1;
		current_card_image = current_card_image[last_key];
	}
	return current_card_image;
}

function get_base_material_needs_recipes(base_material_value, base_material_value_max, show_peasants, once_only){
	if(base_material_value_max == undefined){base_material_value_max = base_material_value;}
	if(once_only == undefined){once_only = false;}
	var base_materials = {};
	var base_recipes = {};
	var materials_used = {};
	var needed_recipes = {};
	eachoa(all_available_cards, function(card_id, card_info){
		/*if(card_info['type'] == 'material' || card_id == 'peasant')*/
		if(card_info['type'] != 'recipe' && ((base_material_value == undefined && card_info['type'] == 'material') || (base_material_value != undefined && card_info['value'] >= base_material_value && card_info['value'] <= base_material_value_max) || (show_peasants != undefined && show_peasants == true && card_id == 'peasant')))
		{
			base_materials[card_id] = true;
		}
	});
	eachoa(base_materials, function(material_id_1, useless_info_1){
		eachoa(base_materials, function(material_id_2, useless_info_2){
			var recipe_found = false;
			if(material_id_1 != material_id_2)
			{
				var base_recipes_found = {};
				eachoa(all_available_cards, function(possible_recipe_id, possible_recipe_info){
					if(possible_recipe_info['type'] != 'recipe' && possible_recipe_info['recipe'] != undefined)
					{
						if(count_object(possible_recipe_info['recipe']) >= 2 && possible_recipe_info['recipe'][material_id_1] != undefined && possible_recipe_info['recipe'][material_id_2] != undefined)
						{
							recipe_found = true;
							base_recipes_found[possible_recipe_id] = true_copyobject(possible_recipe_info['recipe']);
							base_recipes[possible_recipe_id] = true_copyobject(possible_recipe_info['recipe']);
							if(materials_used[material_id_1] == undefined){materials_used[material_id_1] = 0;}
							if(materials_used[material_id_2] == undefined){materials_used[material_id_2] = 0;}
							materials_used[material_id_1] += 1;
							materials_used[material_id_2] += 1;
						}
					}
				});

				if(count_object(base_recipes_found) > 1)
				{
					console.log('double recipes found!');
					console.log(base_recipes_found);
				}
			
				if(recipe_found == false)
				{
					var allready_needed = false;
					if(once_only == true)
					{
						if(materials_used[material_id_1] != undefined || materials_used[material_id_2] != undefined)
						{
							allready_needed = true;
							eachoa(needed_recipes, function(needed_recipe_id, needed_recipe){
								if((materials_used[material_id_1] != undefined && needed_recipe[material_id_1] != undefined) || (materials_used[material_id_2] != undefined && needed_recipe[material_id_2] != undefined))
								{
									delete needed_recipes[needed_recipe_id];
								}
							});
						}
					}
					if(allready_needed == false)
					{
						eachoa(needed_recipes, function(needed_id, needed_info){
							if(needed_info[material_id_1] != undefined && needed_info[material_id_2] != undefined){
								allready_needed = true;
							}
						});
					}
					if(allready_needed == false)
					{
						var new_needed_recipes_key = get_highest_key_in_object(needed_recipes) + 1;
						needed_recipes[new_needed_recipes_key] = {};
						needed_recipes[new_needed_recipes_key][material_id_1] = true;
						needed_recipes[new_needed_recipes_key][material_id_2] = true;
					}
				}
			}
		});
	});
	console.log(base_recipes);
	console.log(needed_recipes);
	if(once_only == true)
	{
		console.log(materials_used);
	}
}