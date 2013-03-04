define(function() {
	console.log("app loaded");
	
	var init = function(){
        // you can use $, _ or Backbone here
        console.log("App init");
        
        require(["jquery", "underscore", "backbone", "modules/view/View.TogglePanel"], function($, _, backbone, TogglePanel){
        	//console.log("Lib loaded: ", $, _, backbone, TogglePanel);
        	
			var toggleView = new TogglePanel({
                el: $("#content")
            });
            
        });	
    }
	
	return {
        initialize: init
    };
	
});