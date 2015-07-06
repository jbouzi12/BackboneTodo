var myApp = myApp || {};

(function($){

	myApp.TaskView = Backbone.View.extend({
		
		tagName: "li",

		className: "task",

		events: {
			'click .destroy': 'deleteTask',
			'click .complete': 'completeTask'
		},

		initialize: function() {
			this.listenTo(this.model, 'destroy', this.remove);
			this.listenTo(this.model, 'change', this.render)
		},

		deleteTask: function() {
			this.model.destroy();
		},
		
		completeTask: function() {

			if (this.model.get('completed') == true) {
				alert('You have already completed this task. Try getting the others done');
				return;
			} else {
				this.model.markOff();
				// this.model.trigger('change');
				this.$el.addClass('completed');
			}
		},

		isComplete: function() {
			if (this.model.get('completed') == true) {
				this.$el.addClass('completed');
			}
		},

		render: function(){
	      var template = $('#tasktemplate').html();
	      var compiled = Handlebars.compile(template);
	      var html = compiled(this.model.attributes);
	      this.$el.html(html);
	      console.log(this);
	      return this;
		}
	});


})(jQuery);