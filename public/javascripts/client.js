var Task = Backbone.Model.extend({
	idAttribute:"_id",
	defaults: {
		title:'', 
		completed: false
	}

});

var taskCollection = Backbone.Model.extend({
	model: Task,
	url: "/"
});