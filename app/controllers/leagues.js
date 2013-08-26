/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , async = require('async')
  , League = mongoose.model('League')
  , _ = require('underscore')


exports.league = function(req, res, next, id){
  var League = mongoose.model('League')

  League.load(id, function (err, league) {
    if (err) return next(err)
    if (!league) return next(new Error('Failed to load league ' + id))
    req.league = league
    next()
  })
}


/**
 * Create a league
 */
exports.create = function (req, res) {
  var league = new League(req.body)
  debugger;
  league.commissioner = req.user // the request user object is the owner
  league.save()
  res.jsonp(league)
}

/**
 * Update a league
 */
exports.update = function(req, res){
  var league = req.league
  league = _.extend(league, req.body)

  league.save(function(err) {
    res.jsonp(league)
  })
}

/**
 * Delete an league
 */
exports.destroy = function(req, res){
  var league = req.league
  league.remove(function(err){
    if (err) {
      res.render('error', {status: 500});
    } else {      
      res.jsonp(league);
    }
  })
}

/**
 * Show an league
 */
exports.show = function(req, res){
  res.jsonp(req.league);
}

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