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
	
	template: _.template($('#tasktemplate').html()),
	
	render: function(){
      var compiled = Handlebars.compile(this.template);
      var html = compiled(this.model.attributes);
      this.$el.html(html);
      return this;
	}
});