function count_object(object){
	var count = 0;
	for (var k in object) {
	    if (object.hasOwnProperty(k)) {
	       ++count;
	    }
	}
	return count;
}

function round_by_percent(number){

  if(Math.floor(number) < number)
  {
    if((number - Math.floor(number) > Math.random()))
    {
      number = Math.ceil(number);
    }
    else
    {
      number = Math.floor(number);
    }
  }

  return number;
}

function round_decimals(number, decimals){
  if(decimals == undefined){decimals = 2;}
  var numbers_to_set_to_0 = number.toString().length - decimals;
  if(numbers_to_set_to_0 > 0)
  {
    var amount_to_round = to_the_nth(1, numbers_to_set_to_0, 10);
    number = Math.floor(number / amount_to_round) * amount_to_round;
  }
  return number;
}

function get_highest_key_in_object(object){
	var highest_key = 0;
	$.each(object, function(key, item) {
		highest_key = key;
	});
	return parseInt(highest_key);
}

function get_random_key_from_object(object){
  var object_count = count_object(object);
  var chosen_object = Math.floor(Math.random() * object_count) + 1;
  var chosen_key = false;
  $.each(object, function(key, item){
    chosen_object --;
    if(chosen_object == 0){
      chosen_key = key;
    }
  });
  return chosen_key;
}

function get_random_key_from_object_based_on_num_value(object){
  var object_count = 0;
  var found_one = false;
  $.each(object, function(key, item){
    object_count += item;
  });
  var chosen_object = Math.floor(Math.random() * object_count) + 1;
  var chosen_key;
  $.each(object, function(key, item){
    chosen_object -= item;
    if(chosen_object <= 0 && chosen_object > item * -1 && found_one == false){
      chosen_key = key;
      found_one = true;
    }
  });
  return chosen_key;
}

function match_array_values(array_1, array_2){
  var matched = false;
  if(typeof(array_1) != 'string' && typeof(array_1) != 'number')
  {
    $.each(array_1, function(key_1, value_1){
      if(typeof(array_2) != 'string' && typeof(array_2) != 'number')
      {
        $.each(array_2, function(key_2, value_2){
          if(value_1 == value_2)
          {
            matched = true;
          }
        });
      }
      else
      {
        if(value_1 == array_2)
        {
          matched = true;
        }
      }
    });
  }
  else
  {
    if(typeof(array_2) != 'string' && typeof(array_2) != 'number')
    {
      $.each(array_2, function(key_2, value_2){
        if(array_1 == value_2)
        {
          matched = true;
        }
      });
    }
    else
    {
      if(array_1 == array_2)
      {
        matched = true;
      }
    }
  }
  return matched;
};

function objecttoarray(myObj){
	var array = $.map(myObj, function(value, index) {
	    return [value];
	});
	return array;
}


function copyobject(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

sortObj = function(obj, type, caseSensitive) {
  var temp_array = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (!caseSensitive) {
        key = (key['toLowerCase'] ? key.toLowerCase() : key);
      }
      temp_array.push(key);
    }
  }
  if (typeof type === 'function') {
    temp_array.sort(type);
  } else if (type === 'value') {
    temp_array.sort(function(a,b) {
      var x = obj[a];
      var y = obj[b];
      if (!caseSensitive) {
        x = (x['toLowerCase'] ? x.toLowerCase() : x);
        y = (y['toLowerCase'] ? y.toLowerCase() : y);
      }
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  } else {
    temp_array.sort();
  }
  var temp_obj = {};
  for (var i=0; i<temp_array.length; i++) {
    temp_obj[temp_array[i]] = obj[temp_array[i]];
  }
  return temp_obj;
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function nFormatter(num, digits) {
  var si = [
    { value: 1, symbol: "" },
    { value: 1E3, symbol: "k" },
    { value: 1E6, symbol: "M" },
    { value: 1E9, symbol: "G" },
    { value: 1E12, symbol: "T" },
    { value: 1E15, symbol: "P" },
    { value: 1E18, symbol: "E" }
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function to_the_nth(number, factor, to_the){
  for (var i = factor - 1; i >= 0; i--) {
    number *= to_the;
  };
  return number;
}

function to_the_tenth(number, factor){
  for (var i = factor - 1; i >= 0; i--) {
    number *= 10;
  };
  return number;
}

function to_the_second(number, factor){
  for (var i = factor - 1; i >= 0; i--) {
    number *= 2;
  };
  return number;
}

function capitalizeFLetter(string) { 
  string = string[0].toUpperCase() + string.slice(1); 
  return string;
} 

function seconds_to_time(seconds, highest_only){
  var total_string = '';
  var string_completed = false;
  var years_in_seconds = 356*60*60*24;
  var days_in_seconds = 60*60*24;
  var hours_in_seconds = 60*60;
  var minutes_in_seconds = 60;
  var years = 0;
  var days = 0;
  var hours = 0;
  var minutes = 0;
  var max_numbers = 10;
  var shown_numbers = 0;
  if(highest_only != undefined)
  {
    max_numbers = highest_only;
  }
  if(max_numbers < 1)
  {
    max_numbers = 1;
  }
  if(Math.floor(seconds / years_in_seconds) > 0)
  {
    years = Math.floor(seconds / years_in_seconds);
    seconds -= years * years_in_seconds;
  }
  if(Math.floor(seconds / days_in_seconds) > 0)
  {
    days = Math.floor(seconds / days_in_seconds);
    seconds -= days * days_in_seconds;
  }
  if(Math.floor(seconds / hours_in_seconds) > 0)
  {
    hours = Math.floor(seconds / hours_in_seconds);
    seconds -= hours * hours_in_seconds;
  }
  if(Math.floor(seconds / minutes_in_seconds) > 0)
  {
    minutes = Math.floor(seconds / minutes_in_seconds);
    seconds -= minutes * minutes_in_seconds;
  }
  if((years > 0 || shown_numbers > 0) && shown_numbers < max_numbers)
  {
    total_string += nFormatter(years,2) + 'y ';
    shown_numbers++;
  }
  if((days > 0 || shown_numbers > 0) && shown_numbers < max_numbers)
  {
    total_string += days + 'd ';
    shown_numbers++;
  }
  if((hours > 0 || shown_numbers > 0) && shown_numbers < max_numbers)
  {
    total_string += hours + 'h ';
    shown_numbers++;
  }
  if((minutes > 0 || shown_numbers > 0) && shown_numbers < max_numbers)
  {
    total_string += minutes + 'm ';
    shown_numbers++;
  }
  if((seconds > 0 || total_string == '' || shown_numbers > 0) && shown_numbers < max_numbers)
  {
    total_string += seconds + 's ';
    shown_numbers++;
  }
  return total_string;
}

function current_time(){
  return (new Date() / 1000);
}

function true_copyobject(object){
  var new_object = {};
  $.each(object, function(id, value){
    if(typeof(value) == 'object')
    {
      new_object[id] = true_copyobject(value);
    }
    if(typeof(value) == 'string')
    {
      new_object[id] = value + '';
    }
    if(typeof(value) == 'number')
    {
      new_object[id] = value + 0;
    }
    if(typeof(value) == 'boolean')
    {
      new_object[id] = value;
    }
  });
  return new_object;
}

function true_sort_object(object, sort_by, ascending){
  var temp_array = [];
  var new_object = {};
  $.each(object, function(key, content){
    if(content[sort_by] != undefined)
    {
      if(ascending == undefined || ascending == true)
      {
        temp_array.push({key:key,value:content[sort_by]});
      }
      else
      {
        temp_array.push({key:key,value:content[sort_by] * -1});
      }
    }
    else
    {
      temp_array.push({key:key,value:1});
    }
  });
  //console.log(temp_array);
  temp_array.sort(dynamicSortMultiple("value"));
  $.each(temp_array, function(useless_key, data){
    new_object[data['key']] = true_copyobject(object[data['key']]);
  });
  return new_object;
}

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

function dynamicSortMultiple() {
    /*
     * save the arguments object as it will be overwritten
     * note that arguments object is an array-like object
     * consisting of the names of the properties to sort by
     */
    var props = arguments;
    return function (obj1, obj2) {
        var i = 0, result = 0, numberOfProperties = props.length;
        /* try getting a different result from 0 (equal)
         * as long as we have extra properties to compare
         */
        while(result === 0 && i < numberOfProperties) {
            result = dynamicSort(props[i])(obj1, obj2);
            i++;
        }
        return result;
    }
}

function nowint(){
  return Math.ceil((new Date().getTime()) / 1000);
}


var all_sounds = {};
var sound_counter = 0;
function play_sound(sound, sound_volume, sound_id){
  sound_counter++;
  

/*  all_sounds[sound_counter].pause();
*/  
  if(sound_volume == undefined){sound_volume = 1;}
  if(sound_id == undefined){sound_id = sound_counter;}
  if(all_sounds[sound_id] == undefined)
  {
    all_sounds[sound_id] = new Audio(sound);
  }
  /*all_sounds[sound_counter] = new Audio(sound);*/
  var current_sound = all_sounds[sound_id];
  current_sound.volume = sound_volume;
  current_sound.preload;
  current_sound.currentTime = 0;
  current_sound.play();
}