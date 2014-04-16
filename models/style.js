var mongoose = require("mongoose");
var Schema = mongoose.Schema;


exports.styleSchema = new Schema({
	style_name:{type:String,required:true,unique: true},
});

module.exports = mongoose.model("Style",exports.styleSchema);