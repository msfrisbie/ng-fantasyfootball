window.app.factory("FantasyTeams", function($resource){
	return $resource(
		'fantasyteams/:fantasyTeamId', 
		{
			fantasyTeamId:'@_id',
			leagueId:'@league._id'
		}, 
		{
			update: {method: 'PUT'}
		}
	)
});