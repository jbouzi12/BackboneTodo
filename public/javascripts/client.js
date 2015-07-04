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

	initialize: function(){
		this.listenTo(this.collection, "reset", this.render);
	},
	
	tagName: "ul",
	
	className: "tasks",
	
	render: function() {
		this.$el.html("");
		this.collection.each(function(task){
			var taskView = new TaskView({ model: task });
			this.$el.append(taskView.render().el);
		},this);

		return this;
	}
});

var AppRouter = Backbone.Router.extend({
	routes: {
		"":"index"
	},
	index: function() {
		var data = JSON.parse($('#initialize_content').html());
		var collection = new TaskCollection(data);
		var view = new TaskCollectionView({collection: collection});
		$('.app').html(view.render().el);
	}
});