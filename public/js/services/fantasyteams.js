window.app.factory("FantasyTeams", function($resource){
	return $resource(
		'fantasyteams/:fantasyTeamId', 
		{
			teamId:'@_id',
			leagueId:'@league'
		}, 
		{
			update: {method: 'PUT'}
		}
	)
});