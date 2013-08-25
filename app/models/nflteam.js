var mongoose = require('mongoose')
  , env = process.env.NODE_ENV || 'development'
  , config = require('../../config/config')[env]
  , Schema = mongoose.Schema;

var NFLTeamSchema = new Schema({
	name: {type: String},
	abbr: {type: String}
});

mongoose.model('NFLTeam', NFLTeamSchema);