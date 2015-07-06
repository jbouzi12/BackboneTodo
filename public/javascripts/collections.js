var myApp = myApp || {};

(function() {
	
	myApp.TaskCollection = Backbone.Collection.extend({
		model: myApp.Task,
		url: "/todos"
	});

})();