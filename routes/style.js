var Style = require("../models/style.js");

exports.list = function(req, res){
  Style.find(function(err,estilos){
  	if(!err)
  	{
  		res.send(estilos);
  	}else{
  		console.log("Error:"+err);
  	}
  });
};
exports.addStyle=function(req,res){
	console.log("POST");
	console.log(req.body);
	var style = new Style({
		style_name:req.body.name,
	});
	style.save(function(err){
		if(!err){
			console.log("Estilo de musica creado!");
		}else{
			console.log("Error: "+err);
		}
	});
	res.send(style);
};