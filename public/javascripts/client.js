var myApp = myApp || {};

var AppRouter = Backbone.Router.extend({
	
	initialize: function() {
		this._setupCollection();
	},

	_setupCollection: function() {
		if (this.collection) {
			return;
		}else {
			var data = $('#initialize_content').html();
			this.collection = new myApp.TaskCollection(JSON.parse(data));	
		}
	},

	_renderView: function(view) {
		$('.app').html(view.render().el);
	},

	routes: {
		"":"index"
	},

	index: function() {
		var view = new myApp.TaskCollectionView({collection: this.collection});
		this._renderView(view);
	}
});