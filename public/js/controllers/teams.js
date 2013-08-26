function TeamsController($scope, $routeParams, $location, Global, Leagues, FantasyTeams) {
	$scope.global = Global;

	$scope.populateLeagues = function(query) {
		Leagues.query(query, function (leagues) {
			$scope.leagues = leagues;
		});
	};

	$scope.create = function () {
		var fantasyteam = new FantasyTeams({ 
			// owner: this.owner, 
			league: this.newteam.league,
			name: this.newteam.name,
			players: this.players 
		});

		fantasyteam.$save(function (response) {
			$location.path("teams");// + response._id);
			// $location.path("/");
		});

		// this.owner = "";
		this.league = "";
		this.name = "";
		// this.players = [];
	};

	$scope.find = function (query) {
		FantasyTeams.query(query, function (teams) {
			$scope.teams = teams;
		});
	};

	$scope.findOne = function () {
		FantasyTeams.get({ fantasyTeamId: $routeParams.fantasyTeamId }, function (fantasyteam) {
			$scope.fantasyteam = fantasyteam;
		});
	};
}