var mongoose = require('mongoose')
  , env = process.env.NODE_ENV || 'development'
  , config = require('../../config/config')[env]
  , Schema = mongoose.Schema;

var LeagueSchema = new Schema({
	name: {type: String},
	commissioner: {type: Schema.ObjectId, ref: 'User'},
	teams: [{type: Schema.ObjectId, ref: 'Team'}]
});

mongoose.model('League', LeagueSchema);