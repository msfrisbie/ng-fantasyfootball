window.app.factory("FantasyTeams", function($resource){
	return $resource('fantasyteams/:fantasyTeamId', {teamId:'@_id'}, {update: {method: 'PUT'}})
});