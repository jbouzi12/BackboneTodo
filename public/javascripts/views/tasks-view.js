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
				taskView.isComplete();
				this.$el.append(taskView.render().el);
			},this);

			return this;
		},

		addOne: function(task) {
			var title = this.$input.val().trim();
			var task_model = new myApp.Task({title: title})
			var possibleMatch = this.collection.where({titlel: title});

			if (title == possibleMatch.title) {
				alert("You've already completed that task. Enter a new one");
				return;
			} else {
				this.collection.add(task_model);
				var view = new myApp.TaskView({model: task_model});
				this.$el.append(view.render().el);

				
			}

			// this.render();
		},

		create: function(e) {
			e.preventDefault();
			var self = this;
			var title = self.$input.val().trim();
			var possibleMatch = self.collection.where({title: title});

			if (e.which === ENTER_KEY && title) {
				if (title == possibleMatch.title) {
					alert("You've already completed that task. Enter a new one");
					return;
				} else {
					var task = new myApp.Task({});
					task.save({title: title, completed: false}, {
						success: function() {
							self.$input.val('');
							// this.render();
						}
					})
					
				}
			}
		}
	});


})(jQuery);