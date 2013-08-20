function PlayersController($scope, $routeParams, $location, Global, Players) {
	$scope.global = Global;

	$scope.find = function(query) {
		Players.query(query, function(players){
			$scope.players = players;
		});
	};
}