function eachoa(object, func){
  for (var k in object) {
      func(k, object[k]);
  }
}

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

function check_plural(text, amount){
  if(amount == 1)
  {
    text = text.split("(s)").join('');
  }
  else
  {
    text = text.split("(s)").join('s');
  }
  return text;
}

function sqr(number){
  var result = number * number;
  return result;
}

function nowint(){
  return Math.ceil((new Date().getTime()) / 1);
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
  var chosen_key;
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
  var chosen_object = (Math.random() * object_count);
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

function to_the_nth(number, factor, to_the){
  for (var i = factor - 1; i >= 0; i--) {
    number *= to_the;
  };
  return number;
}

function match_array_values(array_1, array_2, give_count){
  var matched = false;
  var total_match = 0;
  if(typeof(array_1) != 'string' && typeof(array_1) != 'number')
  {
    $.each(array_1, function(key_1, value_1){
      if(typeof(array_2) != 'string' && typeof(array_2) != 'number')
      {
        $.each(array_2, function(key_2, value_2){
          if(value_1 == value_2)
          {
            matched = true;
            total_match++;
          }
        });
      }
      else
      {
        if(value_1 == array_2)
        {
          matched = true;
          total_match++;
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
          total_match++;
        }
      });
    }
    else
    {
      if(array_1 == array_2)
      {
        matched = true;
        total_match++;
      }
    }
  }
  if(give_count != undefined && give_count == true)
  {
    return total_match;
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

function true_copyobject(object){
  if(typeof(object) == 'object')
  {
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
  else
  {
    return object;
  }
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

function togglecheckbox(checkbox_class){
  if ($('.' + checkbox_class).prop('checked')) {
       $('.' + checkbox_class).prop("checked", false);
   }
   else {
       $('.' + checkbox_class).prop("checked", true);
   }
}

function findLongestWord(str) {
  var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
  return longestWord[0].length;
}

Date.prototype.addHours = function(h) {
  this.setTime(this.getTime() + (h*60*60*1000));
  return this;
}

Date.prototype.addMinutes = function(m) {
  this.setTime(this.getTime() + (m*60*1000));
  return this;
}

function romanize (num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

function check_window_orientation(){
  var window_width = $('.main_window').width();
  var window_height = $('.main_window').height();
  if(window_height < window_width)
  {
    $('.main_window').addClass('landscape');
    $('.main_window').removeClass('portrait');
  }
  else
  {
    $('.main_window').removeClass('landscape');
    $('.main_window').addClass('portrait');
  }
}

$(window).resize(function(){
  check_window_orientation();
});

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function copyToClipboard(element){
  // Get the text field
  var copyText = document.getElementById(element);

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 9999999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  //alert("Copied the text: " + copyText.value);
}