window.app.factory("Leagues", function($resource){
	return $resource('leagues/:leagueId', {leagueId:'@_id'}, {update: {method: 'PUT'}})
}); 