var mongoose = require('mongoose')
  , env = process.env.NODE_ENV || 'development'
  , config = require('../../config/config')[env]
  , Schema = mongoose.Schema;

var PlayerSchema = new Schema({
	pro: {type : String},
	num: {type : String},
	name: {type : String},
	team: {type : String}
});

// PlayerSchema.statics = {
//   load: function (id, cb) {
//     this.findOne({ _id : id }).populate('user').exec(cb);
//   }
// };

mongoose.model('Player', PlayerSchema);