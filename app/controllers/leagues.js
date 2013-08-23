/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , async = require('async')
  , League = mongoose.model('League')
  , _ = require('underscore')

/**
 * List of Leagues
 */
exports.all = function(req, res){
 League.find().populate('owner').populate('league').exec(function(err, leagues) {
   if (err) {
     res.render('error', {status: 500});
   } else {      
       res.jsonp(leagues);
   }
 });
}

/**
 * Create a league
 */
exports.create = function (req, res) {
  var league = new League(req.body)
  league.commissioner = req.user // the request user object is the owner
  league.save()
}