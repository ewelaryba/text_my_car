// Filename: router.js
define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	var AppRouter = Backbone.Router.extend({
		routes : {

			// Define some URL routes
			'signup' : 'signup',
			'configuration' : 'configuration',
			'home': 'home',

			// Default
			'*actions' : 'defaultAction'
		},
		home: function() {
			require(['js/controller/homeview.js'], function(view) {
				view.init();
			});
		},
		signup : function() {
			require(['js/controller/signupview.js'], function(view) {
				view.init();
			});
		},
		configuration : function() {
			console.log("configuration");
		},
		defaultAction : function() {
			this.navigate("home", {replace: true});
		}
	});

	var initialize = function() {
		window.app_router = new AppRouter();
		Backbone.history.start();
	};
	return {
		initialize : initialize
	};
}); 