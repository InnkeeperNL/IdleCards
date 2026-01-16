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

function round_down_by_percent(number){

  if(Math.floor(number) < number)
  {
    if((number - Math.floor(number) > (Math.random() * -1)))
    {
      number = Math.floor(number);
    }
    else
    {
      number = Math.ceil(number);
    }
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

var showText = function (target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}