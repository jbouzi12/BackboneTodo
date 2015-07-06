var myApp = myApp || {};

(function() {

	myApp.Task = Backbone.Model.extend({
		idAttribute:"_id",
		defaults: {
			title:'', 
			completed: false
		},

		markOff: function() {
			this.save({ completed: true });
		}

	});


})();