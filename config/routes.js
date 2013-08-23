
var async = require('async')

module.exports = function (app, passport, auth) {

  // user routes
  var users = require('../app/controllers/users')
  app.get('/signin', users.signin)
  app.get('/signup', users.signup)
  app.get('/signout', users.signout)
  app.post('/users', users.create)
  app.post('/users/session', passport.authenticate('local', {failureRedirect: '/signin', failureFlash: 'Invalid email or password.'}), users.session)
  app.get('/users/me', users.me)
  app.get('/users/:userId', users.show)
  
  app.param('userId', users.user)
  
  var leagues = require('../app/controllers/leagues')  
  app.get('/leagues', leagues.all)
  app.post('/leagues', auth.requiresLogin, leagues.create)

  // app.param('leagueId', leagues.league)

  var teams = require('../app/controllers/teams')  
  app.get('/teams', teams.all)
  app.post('/teams', auth.requiresLogin, teams.create)

  // app.param('teamId', teams.team)

  var players = require('../app/controllers/players')
  app.get('/players', players.all)

  // home route
  var index = require('../app/controllers/index')
  app.get('/', index.render)

}
