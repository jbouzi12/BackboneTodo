var myApp = myApp || {};

(function() {
	
	myApp.TaskCollection = Backbone.Collection.extend({
		model: Task,
		url: "/todos"
	});

})();