function LeaguesController($scope, $routeParams, $location, Global, Leagues) {
	$scope.global = Global;

	$scope.create = function () {
		var league = new Leagues({ 
			name: this.name,
			commissioner: this.commissioner, 
			teams: this.teams 
		});

		league.$save(function (response) {
			// $location.path("leagues/" + response._id);
			$location.path("/");
		});

		this.name = "";
		this.commissioner = "";
		this.teams = [];
	};

	$scope.find = function (query) {
		Leagues.query(query, function (leagues) {
			$scope.leagues = leagues;
		});
	};
}