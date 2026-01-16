function find_target_alive(object, target_count, target_random){
	if(typeof(target_count) == 'undefined')
	{
		target_count = 1;
	}
	var maximum_targets = 0;
	var possible_targets = {};
	$.each(object, function(bkey, target) {
		if(typeof(target['current_hp']) !== 'undefined' && target['current_hp'] > 0){
			possible_targets[bkey] = target;
			maximum_targets++;
		};
	});

	return possible_targets;
}

function find_target_debuffed(object, target_count, target_random, buffs){
	if(typeof(target_count) == 'undefined')
	{
		target_count = 1;
	}
	var maximum_targets = 0;
	var possible_targets = {};
	$.each(object, function(bkey, target) {
		if(typeof(target['current_hp']) !== 'undefined'){
			var has_debuff = false;
			$.each(buffs, function(key, buff){
				if(buff['duration'] > 0 && buff['target_id'] == bkey && buff['buff_type'] == 'debuff')
				{
					has_debuff = true;
				}
			});
			if(has_debuff == true)
			{
				possible_targets[bkey] = target;
				maximum_targets++;
			}
		};
	});

	return possible_targets;
}

function find_target_buffed(object, target_count, target_random, buffs){
	if(typeof(target_count) == 'undefined')
	{
		target_count = 1;
	}
	var maximum_targets = 0;
	var possible_targets = {};
	$.each(object, function(bkey, target) {
		if(typeof(target['current_hp']) !== 'undefined'){
			var has_buff = false;
			$.each(buffs, function(key, buff){
				if(buff['duration'] > 0 && buff['target_id'] == bkey && buff['buff_type'] == 'buff')
				{
					has_buff = true;
				}
			});
			if(has_buff == true)
			{
				possible_targets[bkey] = target;
				maximum_targets++;
			}
		};
	});

	return possible_targets;
}

function find_target_not_self(object, unit_id, target_count, target_random){
	if(typeof(target_count) == 'undefined')
	{
		target_count = 1;
	}
	var maximum_targets = 0;
	var possible_targets = {};
	$.each(object, function(bkey, target) {
		if(typeof(target['current_hp']) !== 'undefined' && bkey !== unit_id){
			possible_targets[bkey] = target;
			maximum_targets++;
		};
	});

	return possible_targets;
}

function find_target_damaged(object, target_count, target_random){
	if(typeof(target_count) == 'undefined')
	{
		target_count = 1;
	}
	var maximum_targets = 0;
	var possible_targets = {};
	$.each(object, function(bkey, target) {
		//console.log('*');
		if(typeof(target['current_hp']) !== 'undefined' && target['current_hp'] < target['max_hp']){
			possible_targets[bkey] = target;
			maximum_targets++;
		};
	});

	return possible_targets;
}

function find_target_type(object, target_count, target_random, target_type){
	if(typeof(target_count) == 'undefined')
	{
		target_count = 1;
	}
	var maximum_targets = 0;
	var possible_targets = {};
	$.each(object, function(bkey, target) {
		//console.log('*');
		var found_right_type = false;
		$.each(target['vulnerable'], function(vulnerable_key,vulnerability){
			if(target_type == vulnerability && target['current_hp'] !== 'undefined' && found_right_type == false)
			{
				possible_targets[bkey] = target;
				maximum_targets++;
				found_right_type = true;
			}
		});
	});

	return possible_targets;
}

function find_target_dead(object, target_count, target_random){
	if(typeof(target_count) == 'undefined')
	{
		target_count = 1;
	}
	var maximum_targets = 0;
	var possible_targets = {};
	$.each(object, function(bkey, target) {
		if(target['current_hp'] == 0){
			possible_targets[bkey] = target;
			maximum_targets++;
		};
	});

	return possible_targets;
}

function find_target_none(object, max_key, target_count, target_random){
	if(typeof(target_count) == 'undefined')
	{
		target_count = 1;
	}
	var maximum_targets = 0;
	var possible_targets = {};
	for (key_number = 1; key_number <= max_key; key_number++) {
		if(typeof(object[key_number]) == "undefined" || object[key_number]['current_hp'] == 0){
			possible_targets[key_number] = {key: key_number};
			maximum_targets++;
		};
	}

	return possible_targets;
}

function find_target_from_group(possible_targets, target_count, target_random, use_aggro, preferred_type, side_string, hp_state, types, cannot_target){
	var current_targets = {};
	if(typeof(use_aggro) == 'undefined')
	{
		use_aggro = true;
	}

	for(a = 0;a < target_count;a++)
	{
		var mob_count = count_object(possible_targets);
		if(mob_count > 0)
		{
			var lowest_hp_percentage = 1;
			if(hp_state != 'undefined' && hp_state == 'lowest_percentage')
			{
				
				var current_target = {};
				var current_key = 0;
				$.each(possible_targets, function(ckey, enemy) {
					var target_max_hp = get_attribute(enemy['slot_id'], side_string, 'max_hp');
					var current_hp_percent = enemy['current_hp'] / target_max_hp;
					if(current_hp_percent < lowest_hp_percentage)
					{
						lowest_hp_percentage = current_hp_percent;
						current_target = enemy;
						current_target['key'] = ckey;
						current_key = ckey;
					}
				});
			}
			var lowest_hp = 100000000000000;
			if(hp_state != 'undefined' && hp_state == 'lowest')
			{
				
				var current_target = {};
				var current_key = 0;
				$.each(possible_targets, function(ckey, enemy) {
					if(lowest_hp > enemy['current_hp'])
					{
						lowest_hp = enemy['current_hp'];
						current_target = enemy;
						current_target['key'] = ckey;
						current_key = ckey;
					}
				});
			}
			if(hp_state == 'undefined' || (lowest_hp_percentage == 1 && lowest_hp == 100000000000000))
			{
				var total_aggro = 0;
				$.each(possible_targets, function(ckey, enemy) {
					var target_aggro = get_attribute(enemy['slot_id'], side_string, 'aggro');

					var can_target = true;

					if(cannot_target != undefined && cannot_target != '')
					{
						$.each(enemy['vulnerable'], function(vulnerable_key,vulnerability){
							if(cannot_target == vulnerability)
							{
								can_target = false;
							}
						});
					}

					if(can_target == true)
					{

						if(preferred_type != undefined && preferred_type != '')
						{
							$.each(enemy['vulnerable'], function(vulnerable_key,vulnerability){
								if(preferred_type == vulnerability)
								{
									if(target_aggro < 0)
									{
										target_aggro = 10;
									}
									target_aggro *= 10000000;

								}
							});
						}
						$.each(enemy['immune'], function(immunity_key,immunity){
							$.each(types, function(type_key,type){
								if(type == immunity)
								{
									target_aggro *= 0.01;

								}
							});
						});
						
						if(typeof(target_aggro) != 'undefined' && use_aggro == true && target_aggro >= 10)
						{
							total_aggro += (target_aggro * target_aggro);
						}
						else
						{
							total_aggro += 10;
						}
					}
				});

				var chosen_target_number = Math.floor((Math.random() * total_aggro) + 1);
				var current_target = {};
				var current_key = 0;
				var found_target = false;
				$.each(possible_targets, function(ckey, enemy) {
					var target_aggro = get_attribute(enemy['slot_id'], side_string, 'aggro');

					var can_target = true;

					if(cannot_target != undefined && cannot_target != '')
					{
						$.each(enemy['vulnerable'], function(vulnerable_key,vulnerability){
							if(cannot_target == vulnerability)
							{
								can_target = false;
							}
						});
					}

					if(can_target == true)
					{

						if(preferred_type != undefined && preferred_type != '')
						{
							$.each(enemy['vulnerable'], function(vulnerable_key,vulnerability){
								if(preferred_type == vulnerability)
								{
									if(target_aggro < 0)
									{
										target_aggro = 10;
									}
									target_aggro *= 10000000;
								}
							});
						}
						$.each(enemy['immune'], function(immunity_key,immunity){
							$.each(types, function(type_key,type){
								if(type == immunity)
								{
									target_aggro *= 0.01;

								}
							});
						});
						
						if(typeof(target_aggro) != 'undefined' && use_aggro == true && target_aggro >= 10)
						{
							chosen_target_number -= (target_aggro * target_aggro);

						}
						else
						{
							chosen_target_number -= 10;
						}
						if(chosen_target_number <= 0 && found_target == false){
							found_target = true;
							current_target = enemy;
							current_target['key'] = ckey;
							current_key = ckey;
							if(target_random != true)
							{
								delete possible_targets[ckey];
							}
						};
					}
				});
			}
			//var current_target_count = count_object(current_targets);
			current_targets[a] = current_target;
		}
	}

	return current_targets;
}