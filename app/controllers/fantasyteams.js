/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , async = require('async')
  , FantasyTeam = mongoose.model('FantasyTeam')
  , _ = require('underscore')

exports.fantasyteam = function(req, res, next, id){
  var FantasyTeam = mongoose.model('FantasyTeam')

  FantasyTeam.load(id, function (err, fantasyteam) {
    if (err) return next(err)
    if (!fantasyteam) return next(new Error('Failed to load fantasy team ' + id))
    req.fantasyteam = fantasyteam
    next()
  })
}

/**
 * List of Teams
 */
exports.all = function(req, res){
 FantasyTeam.find().populate('owner').populate('league').exec(function(err, fantasyteams) {
   if (err) {
      res.render('error', {status: 500});
   } else {      
      res.jsonp(fantasyteams);
   }
 });
}

/**
 * Create a team
 */
exports.create = function (req, res) {
  var fantasyteam = new FantasyTeam(req.body)
  debugger;
  fantasyteam.owner = req.user // the request user object is the owner
  fantasyteam.league = req.body.league
  fantasyteam.save()
  res.jsonp(fantasyteam)
}

exports.show = function(req, res){
  res.jsonp(req.fantasyteam);
}


/**
 * Update a fantasy team
 */
exports.update = function(req, res){
  debugger;
  var fantasyteam = req.fantasyteam
  fantasyteam = _.extend(fantasyteam, req.body)

  fantasyteam.save(function(err) {
   res.jsonp(fantasyteam)
  })
}

/**
 * Delete an fantasy team
 */
exports.destroy = function(req, res){
  var fantasyteam = req.fantasyteam
  fantasyteam.remove(function(err){
    if (err) {
     res.render('error', {status: 500});
   } else {      
     res.jsonp(fantasyteam);
   }
  })
}

// /**
//  * Find article by id
//  */

// exports.article = function(req, res, next, id){
//   var User = mongoose.model('User')

//   Article.load(id, function (err, article) {
//     if (err) return next(err)
//     if (!article) return next(new Error('Failed to load article ' + id))
//     req.article = article
//     next()
//   })
// }

// /**
//  * Create a article
//  */
// exports.create = function (req, res) {
//   var article = new Article(req.body)
//   article.user = req.user
//   article.save()
//   res.jsonp(article)
// }

// /**
//  * Update a article
//  */
// exports.update = function(req, res){
//   var article = req.article
//   article = _.extend(article, req.body)

//   article.save(function(err) {
//   	res.jsonp(article)
//   })
// }

// /**
//  * Delete an article
//  */
// exports.destroy = function(req, res){
//   var article = req.article
//   article.remove(function(err){
//     if (err) {
// 		res.render('error', {status: 500});
// 	} else {			
// 		res.jsonp(article);
// 	}
//   })
// }

// /**
//  * Show an article
//  */
// exports.show = function(req, res){
//   res.jsonp(req.article);
// }

// /**
//  * List of Articles
//  */
// exports.all = function(req, res){
// 	Article.find().sort('-created').populate('user').exec(function(err, articles) {
// 		if (err) {
// 			res.render('error', {status: 500});
// 		} else {			
//   			res.jsonp(articles);
// 		}
// 	});
// }