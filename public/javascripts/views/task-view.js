var myApp = myApp || {};

(function($){

	myApp.TaskView = Backbone.View.extend({
		
		tagName: "li",

		className: "task",

		events: {
			'click .destroy': 'deleteTask'
		},

		initialize: function() {
			this.listenTo(this.model, 'destroy', this.remove);
		},

		deleteTask: function() {
			this.model.destroy();
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