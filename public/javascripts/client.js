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

var TaskView = Backbone.View.extend({
	tagName: "li",

	className: "task",
	
	template: _.template($(#tasktemplate).html()),
	
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this

	}
});