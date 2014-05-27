
/*
 * GET users listing.
 */
var User = require("../models/user.js");
var Style = require("../models/style.js");

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
	estilos=req.body.styles.split(",");
	aux=[];
	estilos.forEach(function(estilo){
		style= new Style({
			style_name:estilo,
		});
		aux.push(style);
	});
	var user = new User({
		username:req.body.username,
		email:req.body.email,
		name:req.body.name,
		lastname:req.body.lastname,
		age:req.body.age,
		styles:aux
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
	User.find({username:req.params.username,password:req.params.password},function(err,user){
		if(!err)
		{
			res.send(user);
		}else{
			console.log("Error: "+err);
			res.send(0);
		}
	});
};
exports.login=function(req,res){
	User.find({username:req.body.username,password:req.body.password},function(err,user){
		if(!err)
		{
			res.send(user);
		}else{
			console.log("Error: "+err);
			res.send(0);
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