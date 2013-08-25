function TeamsController($scope, $routeParams, $location, Global, FantasyTeams) {
	$scope.global = Global;

	$scope.create = function () {
		var fantasyteam = new FantasyTeams({ 
			owner: this.owner, 
			league: this.league,
			name: this.name,
			players: this.players 
		});

		fantasyteam.$save(function (response) {
			$location.path("teams");// + response._id);
			// $location.path("/");
		});

		this.owner = "";
		this.league = "";
		this.name = "";
		this.players = [];
	};

	$scope.find = function (query) {
		FantasyTeams.query(query, function (teams) {
			$scope.teams = teams;
		});
	};
}