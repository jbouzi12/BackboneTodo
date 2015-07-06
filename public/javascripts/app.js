var myApp = myApp || {};
var ENTER_KEY = 13;

(function(){
	// Initialize client with backbone
	myApp.AppRouter = new AppRouter();
	Backbone.history.start();
	
})();