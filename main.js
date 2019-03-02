var app=angular.module("bon", ["ngRoute", "ui.bootstrap"]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true);

	$routeProvider.when("/", {
	
		templateUrl: "views/home.htm",
		controller: "HomeController"
	
	}).when("/about", {
	
		templateUrl: "views/about.htm",
		controller: "HomeController"
	
	}).otherwise({
	
		redirectTo:"/"
	
	});

}]);


app.run(['$rootScope', function($rootScope){
	$rootScope.items = [
		'The first choice!',
		'And another choice for you.',
		'but wait! A third!'
	];
}]);
