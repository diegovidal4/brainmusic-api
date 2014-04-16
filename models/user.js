var style = require("./style.js");

var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var userSchema = new Schema({
	username:{type:String,required:true,unique: true},
	email:{type:String,required:true,unique: true},
	name:{type:String,required:true},
	lastname:{type:String,required:true},
	age:{type:Number,required:true},
	styles:[style.styleScheme]
});

module.exports = mongoose.model("User",userSchema);