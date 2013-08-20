window.app.factory("Players", function($resource){
	return $resource('players/:playerId', {playerId:'@_id'}, {update: {method: 'PUT'}})
});