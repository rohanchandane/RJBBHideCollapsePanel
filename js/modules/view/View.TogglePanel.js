define(["backbone"], function() {
	
	var TogglePanel = Backbone.View.extend({
		
		events: {
			"click #contentLink":  "_toggleBlock",
		},
		
		initialize: function() {
			_.bindAll(this, '_toggleBlock');
		},
		
		_toggleBlock: function() {
			
			if(this.el.find('#contentBox').css('display') === 'block') {
				this.el.find('#contentBox').hide();
			} else {
				this.el.find('#contentBox').show();
			}
		}
	});
	
	return TogglePanel;
});