//Setting up route
window.app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	// when('/articles', { templateUrl: 'views/articles/list.html' }).
	// when('/articles/create', { templateUrl: 'views/articles/create.html' }).
	// when('/articles/:articleId/edit', { templateUrl: 'views/articles/edit.html' }).
	// when('/articles/:articleId', { templateUrl: 'views/articles/view.html' }).
	.when('/',
  {
    controller: "Ctrl",
    templateUrl: "views/main.html"
  })
  .when('/test', 
  {
    template: 'TEST'
  })
  .when('/leagues', 
  { 
    templateUrl: 'views/leagues/list.html' 
  })
  .when('/leagues/create', 
  { 
    templateUrl: 'views/leagues/create.html' 
  })
  .when('/teams', 
  {
    templateUrl: 'views/teams/list.html'
  })
  .when('/teams/create', 
  { 
    templateUrl: 'views/teams/create.html' 
  })
  .when('/leagues/:leagueId/edit', 
  { 
    templateUrl: 'views/leagues/edit.html' 
  })
  .when('/leagues/:leagueId', 
  { 
    templateUrl: 'views/leagues/view.html' 
  })
  
  // .when('players',
  // {

  // })
  .when('/player/:pid',
  {
    controller: "PlayerCtrl",
    templateUrl: "partials/_player.html"
  })
  .when('/nflteams',
  {
    controller: "TeamCtrl",
    templateUrl: "partials/_nflteams.html"
  })
  .when('/nflteams/:tid',
  {
    controller: "TeamCtrl",
    templateUrl: "partials/_nflteam.html"
  })
	// .when('/', { templateUrl: 'views/index.html' }).
	.otherwise(
  {
    redirectTo: '/'
  });
}]);

//Removing tomcat unspported headers
window.app.config(['$httpProvider', function($httpProvider, Configuration) {
    //delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider', function($locationProvider) {
    // $locationProvider.html5Mode(true);
    // $locationProvider.hashPrefix("!");
}]);

// app.config(function($locationProvider, $routeProvider) {
//   // turning html5mode on breaks the app
//   $locationProvider.html5Mode(false);

//   $routeProvider
//   .when('/',
//   {
//     controller: "Ctrl",
//     templateUrl: "views/main.html"
//   })
//   // .when('players',
//   // {

//   // })
//   .when('/player/:pid',
//   {
//     controller: "PlayerCtrl",
//     templateUrl: "partials/_player.html"
//   })
//   .when('/team/:tid',
//   {
//     controller: "TeamCtrl",
//     templateUrl: "partials/_team.html"
//   });
//   // CRUD players
//   // CRUD team
//   // 
// });