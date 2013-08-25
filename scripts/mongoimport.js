// mongoimport.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean-dev');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// var personnel = require('./personnel');
// var nflteams = require('./nflteams');
var positions = require('./positions');

// var NFLTeam = mongoose.model(
// 	'NFLTeam', 
// 	mongoose.Schema({
// 		"abbr": String,
// 		"name": String
// 	})
// );

// var Position = mongoose.model(
// 	'Position', 
// 	mongoose.Schema({
// 		"abbr": String,
// 		"name": String
// 	})
// );

var Player = mongoose.model(
	'Player', 
	mongoose.Schema({
		"pos": Number,
		"num": String,
		"name": String,
		"team": Number
	})
);

// Position.find({},function(err,dbpositions){

// 	for(var i=0; i<dbpositions.length; i++) {
// 		dbpositions[i].remove();
// 	}

// 	for(var i=0; i<positions.length; i++) {
// 		var position = new Position({ 
// 			"abbr":	positions[i].abbr,
// 			"pos": positions[i].pos
// 		});

// 		position.save(function(err,dbposition){
// 			if (err)
// 			console.log("Error on position save!");
// 		})
// 	}

// 	console.log("Position import finished!");
// })

// NFLTeam.find({},function(err,dbnflteams){

// 	for(var i=0; i<dbnflteams.length; i++) {
// 		dbnflteams[i].remove();
// 	}

// 	for(var i=0; i<nflteams.length; i++) {
// 		var nflteam = new NFLTeam({ 
// 			"abbr":	nflteams[i].abbr,
// 			"name": nflteams[i].team
// 		});

// 		nflteam.save(function(err,dbnflteam){
// 			if (err)
// 			console.log("Error on nflteam save!");
// 		})
// 	}

// 	console.log("NFLTeam import finished!");
// })


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
			console.log("Error on player save!");
		})
	}
	
	console.log("Player import finished!");
	// process.exit(0);
})
