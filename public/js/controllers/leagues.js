function LeaguesController($scope, $routeParams, $location, Global, Leagues, FantasyTeams) {
	$scope.global = Global;

	$scope.populateFantasyTeams = function(query) {
		FantasyTeams.query(query, function (fantasyteams) {
			$scope.fantasyteams = fantasyteams;
		});
	};

	$scope.create = function () {
		var league = new Leagues({ 
			name: this.name,
			// commissioner: this.commissioner, 
			teams: this.teams 
		});

		league.$save(function (response) {
			$location.path("leagues/" + response._id);
			// $location.path("leagues");
		});

		this.name = "";
		this.commissioner = "";
		this.teams = [];
	};

	$scope.update = function () {
		var league = $scope.league;
		if (!league.updated) {
			league.updated = [];
		}
		league.updated.push(new Date().getTime());

		league.$update(function () {
			$location.path('leagues/' + league._id);
		});
	};

	$scope.find = function (query) {
		Leagues.query(query, function (leagues) {
			$scope.leagues = leagues;
		});
	};

	$scope.findOne = function () {
		Leagues.get({ leagueId: $routeParams.leagueId }, function (league) {
			$scope.league = league;
		});
	};
}