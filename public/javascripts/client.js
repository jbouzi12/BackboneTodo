var Task = Backbone.Model.extend({
	idAttribute:"_id",
	defaults: {
		title:'', 
		completed: false
	}

});

var TaskCollection = Backbone.Collection.extend({
	model: Task,
	url: "/todos"
});

var TaskView = Backbone.View.extend({
	
	tagName: "li",

	className: "task",
	
	render: function(){
      var template = $('#tasktemplate').html();
      var compiled = Handlebars.compile(template);
      var html = compiled(this.model.attributes);
      this.$el.html(html);
      console.log(this);
      return this;
	}
});

var TaskCollectionView = Backbone.View.extend({
	
	tagName: "ul",
	
	className: "tasks",
	
	render: function() {
		this.collection.each(function(task){
			var taskView = new TaskView({ model: task });
			this.$el.append(taskView.render().el);
		},this);

		return this;
	}
});