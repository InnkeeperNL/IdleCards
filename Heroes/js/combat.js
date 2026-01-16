function check_hp(unit_group, unit_group_string, unit_id){
	if(unit_group[unit_id] !== undefined)
	{
		var max_hp = get_attribute(unit_id, unit_group_string,'max_hp');
		var current_hp = get_attribute(unit_id, unit_group_string,'current_hp')
		set_shield(unit_group, unit_id, unit_group_string);
		if(max_hp < 0)
		{
			max_hp = 0;
		}
		if(current_hp > max_hp)
		{
			current_hp = max_hp;
			unit_group[unit_id]['current_hp'] = max_hp;
		}
		if(current_hp <= 0)
		{
			current_hp = 0;
			unit_group[unit_id]['current_hp'] = 0;
			unit_death(unit_group_string, unit_id);
		}
		else
		{
			if(unit_group[unit_id]['current_hp'] > 0)
			{
				unit_alive(unit_group_string, unit_id);
			}
			$('.' + unit_group_string + '_' + unit_id + ' .hp_amount').html(current_hp);
			$('.' + unit_group_string + '_' + unit_id + ' .hp_bar').css('width', Math.floor((current_hp / max_hp)*100) + '%');
		}
	}
}

function receive_damage(unit_group, unit_group_string, unit_id, damage, type, fct_color, fct_size, immune)
{
	if(unit_group[unit_id] !== undefined && unit_group[unit_id]['current_hp'] > 0)
	{

		if(type == 'physical')
		{
			var effective_defense = get_attribute(unit_id, unit_group_string,'defense');

			if(effective_defense > 0)
			{
				damage = (damage / (1 + ( effective_defense/10)));
			}
			if(effective_defense < 0)
			{
				damage = (damage * (1 + ( (effective_defense/10) * -1) ) );
			}
		}
		if(type == 'magical')
		{
			var effective_defense = get_attribute(unit_id, unit_group_string,'resistance');

			if(effective_defense > 0)
			{
				damage = (damage / (1 + ( effective_defense/10)));
			}
			if(effective_defense < 0)
			{
				damage = (damage * (1 + ( (effective_defense/10) * -1) ) );
			}	
		}

		last_result_amount = damage;

		if(current_acting_unit['key'] > 0 && unit_group[unit_id]['current_hp'] > 0)
		{
			$.each(unit_group[unit_id]['active_abilities'], function(akey, ability) {
				if(ability['current_cooldown'] <= 0 && (ability['proc'] == 'receive_damage' || (ability['proc'] == 'receive_physical_damage' && type == 'physical') || (ability['proc'] == 'receive_magical_damage' && type == 'magical'))){
					ability['current_cooldown'] = 0;
					if(process_ability(unit_id, unit_group[unit_id], unit_group_string, unit_group, akey, ability) == true && ability['result_factor'] != undefined)
					{
						//generate_smash_fct('' + unit_group_string + '_' + unit_id, ability['name']);
						damage *= (ability['result_factor']);
						last_result_amount = damage;
					}
				}
			});
		}

		if(damage < 0)
		{
			damage = 0;
		}

		damage = round_by_percent(damage);

		if(unit_group[unit_id] !== undefined)
		{

			if(type == 'piercing')
			{
				unit_group[unit_id]['current_hp'] -= damage;
			}
			else
			{
				unit_group[unit_id]['shield'] -= damage;
				if(unit_group[unit_id]['shield'] < 0)
				{
					unit_group[unit_id]['current_hp'] += unit_group[unit_id]['shield'];
					unit_group[unit_id]['shield'] = 0;
				}
			}

			

			check_hp(unit_group, unit_group_string, unit_id);
			generate_fct('' + unit_group_string + '_' + unit_id, damage, fct_color, fct_size);


			if(damage > 0)
			{
				if(unit_group_string == 'ally')
				{
					var target_buffs = current_allies_buffs;
				}
				else
				{
					var target_buffs = current_enemies_buffs;
				}
				$.each(target_buffs, function(buff_key,buff){
					if(buff['target_id'] == unit_id && buff['removed_on'] !== undefined && buff['removed_on'] == 'damaged')
					{
						/*reduce_buff_image(unit_group_string + '_' + buff['target_id'], buff['buff_name']);
						target_buffs[buff_key] = {};*/
						remove_buff(buff['buff_group_key']);
						//console.log('removed ' + buff['buff_name'])
					}
				});
			}
		}
	}
	
	return damage;
}

function receive_healing(unit_group, unit_group_string, unit_id, healing, fct_color, fct_size)
{
	if(unit_group[unit_id] != undefined)
	{
		if(healing < 0)
		{
			healing = 0;
		}
		healing = healing / (1 + (unit_group[unit_id]['level'] / 10));
		last_result_amount = healing;
		healing = round_by_percent(healing);
		$.each(unit_group[unit_id]['active_abilities'], function(akey, ability) {
			if(ability['current_cooldown'] <= 0 && ability['proc'] == 'receive_healing'){
				ability['current_cooldown'] = 0;
				process_ability(unit_id, unit_group[unit_id], unit_group_string, unit_group, akey, ability);
			}
		});
		//console.log(unit_group);
		unit_group[unit_id]['current_hp'] += healing;
		
		check_hp(unit_group, unit_group_string, unit_id);
		generate_fct('' + unit_group_string + '_' + unit_id, '+' + healing, fct_color, fct_size);
	}
}