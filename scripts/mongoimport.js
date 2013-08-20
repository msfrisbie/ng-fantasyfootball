// mongoimport.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean-dev');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var personnel = require('./personnel');
var teams = require('./teams');
var positions = require('./positions');

var Team = mongoose.model(
	'Team', 
	mongoose.Schema({
		"abbr": String,
		"name": String
	})
);

var Position = mongoose.model(
	'Position', 
	mongoose.Schema({
		"abbr": String,
		"name": String
	})
);

var Player = mongoose.model(
	'Player', 
	mongoose.Schema({
		"pos": String,
		"num": String,
		"name": String,
		"team": String
	})
);

Team.find({},function(err,dbteams){

	for(var i=0; i<dbteams.length; i++) {
		dbteams[i].remove();
	}

	for(var i=0; i<teams.length; i++) {
		var team = new Team({ 
			"abbr":	teams[i].abbr,
			"name": teams[i].team
		});

		team.save(function(err,dbteam){
			if (err)
			console.log("Error on team save!");
		})
	}
})


Player.find({},function(err,dbplayers){

	for(var i=0; i<dbplayers.length; i++) {
		dbplayers[i].remove();
	}

	for(var i=0; i<personnel.length; i++) {
		var player = new Player({
			"pos": personnel[i].pos,
			"num": personnel[i].num,
			"name": personnel[i].name,
			"team": personnel[i].team
		})

		player.save(function(err,dbplayer){
			if (err)
			console.log("Error on player save!")
		})
	}
	
	// process.exit(0);
})
