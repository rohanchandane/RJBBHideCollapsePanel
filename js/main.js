
require.config({
  baseUrl: 'js/lib',
  paths: {
  	modules: '../modules'
  	/*,
    jQuery: 'lib/jquery',
    /*Underscore: 'lib/underscore',
    Backbone: 'lib/backbone'
    */
  },
  shim: {
  	jquery: {
    	exports: '$'
    },
  	underscore: {
  		deps: ['jquery'],
  		exports: '_'
  	},
  	backbone: {
  		deps: ['jquery', 'underscore'],
  		exports: 'Backbone'
  	}
  }
});


require(["modules/app"], function(App) {
	console.log("main loaded");
	
	App.initialize();
	
	
});