var mongoose = require('mongoose')
  , async = require('async')
  , Player = mongoose.model('Player')
  , _ = require('underscore')

  /**
 * List of Players
 */
exports.all = function(req, res){
	Player.find(function(err, players) {
		if (err) {
			res.render('error', {status: 500});
		} else {			
  		res.jsonp(players);
  		// res.jsonp({'a':'b'});
		}
	});
}