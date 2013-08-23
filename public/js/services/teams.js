window.app.factory("Teams", function($resource){
	return $resource('teams/:teamId', {teamId:'@_id'}, {update: {method: 'PUT'}})
});