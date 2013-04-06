define(['knockout', 'knockback'], function(ko, kb) {
	var view = Backbone.View.extend({

		events : {
			"ready": "onReady"
		},
		onReady: function() {
			
		},

		initialize : function() {
			
		},

		render : function() {
			$(this.el).load("views/homeview.html");
		}
	});
	
	return {
		init: function() {
			
			//get model
			var viewInstance = new view({el: $(".main-content")});
			viewInstance.render();
		}
	}

});
