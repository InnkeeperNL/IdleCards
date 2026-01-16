function loadScript(path, callback) {

    var done = false;
    var scr = document.createElement('script');

    scr.onload = handleLoad;
    scr.onreadystatechange = handleReadyStateChange;
    scr.onerror = handleError;
    scr.src = path;
    document.body.appendChild(scr);

    function handleLoad() {
        if (!done) {
            done = true;
            callback(path, "ok");
        }
    }

    function handleReadyStateChange() {
        var state;

        if (!done) {
            state = scr.readyState;
            if (state === "complete") {
                handleLoad();
            }
        }
    }
    function handleError() {
        if (!done) {
            done = true;
            callback(path, "error");
        }
    }
}

var data_unloaded = 0;

function loadScripts(files){
   data_unloaded = count_object(files);
   var directory = 'js/data/';
   var extension = '.js';
   //var files = ['model', 'view', 'controller'];  
   for (var file of files){ 
       var path = directory + file + extension; 
       loadScript(path, function(data){data_unloaded--;});
       /*var script = document.createElement("script");
       script.src = path;
       document.body.appendChild(script);*/
   } 
   //data_loaded = true;
   //console.log('data_loaded');
 }

var all_files = [
   'config',
   'sounds',
   'all_activities',
   'all_items',
      'items/gear',
      'items/consumables',
      'items/quest_items',
   'all_abilities',
   'all_recipes',
   'all_locations',
   'all_units',
   'all_actions',
      'locations/maywell/actions',
      'locations/maywell/clara_baeumont',
         'locations/maywell/maywell_keep/actions',
         'locations/maywell/maywell_keep/garry_the_guard',
         'locations/maywell/slums/actions',
         'locations/maywell/slums/fights',
         'locations/maywell/slums/little_johnny',
         'locations/maywell/herb_garden/actions',
         

];

loadScripts(all_files);