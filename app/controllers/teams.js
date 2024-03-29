/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , async = require('async')
  , Team = mongoose.model('Team')
  , _ = require('underscore')

/**
 * List of Teams
 */
exports.all = function(req, res){
 Team.find().populate('owner').populate('league').exec(function(err, teams) {
   if (err) {
     res.render('error', {status: 500});
   } else {      
       res.jsonp(teams);
   }
 });
}

/**
 * Create a team
 */
exports.create = function (req, res) {
  var team = new Team(req.body)
  team.user = req.user // the request user object is the owner
  team.save()
  res.jsonp(team)
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