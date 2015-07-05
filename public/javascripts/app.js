var myApp = myApp || {};

$(function(){
	// Initialize client with backbone
	myApp.AppRouter = new AppRouter();
	Backbone.history.start();
	
})();