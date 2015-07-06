var myApp = myApp || {};


(function($){

	myApp.TaskCollectionView = Backbone.View.extend({

		initialize: function(){
			this.$input = $('#new-todo');
			this.listenTo(this.collection, "reset", this.render);
			this.bind('add', this.addOne);
		},
		
		tagName: "ul",

		events: {
			'keypress #new-task':'create'
		},
		
		className: "tasks",
		
		render: function() {
			this.$el.html("");
			this.collection.each(function(task){
				var taskView = new myApp.TaskView({ model: task });
				this.$el.append(taskView.render().el);
			},this);

			return this;
		},

		addOne: function(task) {
			var title = this.$input.val().trim();
			var task_model = new myApp.Task({title: title})

			this.collection.add(task_model);
			var view = new myApp.TaskView({model: task_model});
			this.$el.append(view.render().el);
			// this.render();
		},

		create: function(e) {
			e.preventDefault();
			var title = this.$input.val().trim();
			var self = this;
			if (e.which === ENTER_KEY && title) {
				var task = new myApp.Task({});
				task.save({title: title, completed: false}, {
					success: function() {
						this.$input.val('');
						// this.render();
					}
				})
			}
		}
	});


})(jQuery);