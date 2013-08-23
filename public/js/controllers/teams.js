function TeamsController($scope, $routeParams, $location, Global, Teams) {
	$scope.global = Global;

	$scope.create = function () {
		var team = new Teams({ 
			owner: this.owner, 
			league: this.league,
			name: this.name,
			players: this.players 
		});

		team.$save(function (response) {
			// $location.path("teams/" + response._id);
			$location.path("/");
		});

		this.owner = "";
		this.league = "";
		this.name = "";
		this.players = [];
	};

	$scope.find = function (query) {
		Teams.query(query, function (teams) {
			$scope.teams = teams;
		});
	};
}