var myApp = myApp || {};


(function($){

	myApp.TaskCollectionView = Backbone.View.extend({

		initialize: function(){
			this.listenTo(this.collection, "reset", this.render);
		},
		
		tagName: "ul",
		
		className: "tasks",
		
		render: function() {
			this.$el.html("");
			this.collection.each(function(task){
				var taskView = new myApp.TaskView({ model: task });
				this.$el.append(taskView.render().el);
			},this);

			return this;
		}
	});


})(jQuery);