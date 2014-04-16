
/*
 * GET users listing.
 */
var User = require("../models/user.js");

exports.list = function(req, res){
  User.find(function(err,users){
  	if(!err)
  	{
  		res.send(users);
  	}else{
  		console.log("Error:"+err);
  	}
  });
};

exports.addUser=function(req,res){
	console.log("POST");
	console.log(req.body);
	var user = new User({
		username:req.body.username,
		email:req.body.email,
		name:req.body.name,
		lastname:req.body.lastname,
		age:req.body.age
	});
	user.save(function(err){
		if(!err){
			console.log("Usuario creado!");
		}else{
			console.log("Error: "+err);
		}
	});
	res.send(user);
};

exports.findUser=function(req,res){
	User.find({username:req.params.username},function(err,user){
		if(!err)
		{
			res.send(user);
		}else{
			console.log("Error: "+err);
		}
	});
};
exports.updateUser=function(req,res){
	User.update({username:req.params.username},req.body,function(err,user){
		if(!err){
			console.log("Usuario Modificado.");
			res.send(user);
		}else{
			console.log("Error: "+err);
		}
	});
};