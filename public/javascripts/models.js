var myApp = myApp || {};

(function() {

	myApp.Task = Backbone.Model.extend({
		idAttribute:"_id",
		defaults: {
			title:'', 
			completed: false
		}

	});


})();