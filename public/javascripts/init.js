$(function(){
	// Initialize client with backbone
	var collection = new TaskCollection();
	collection.fetch({
		success:function(data) {
			var view = new TaskCollectionView({collection: data});
			// will change where tasks will be appended to
			$('body').append(view.render().el)
		}
	})
});