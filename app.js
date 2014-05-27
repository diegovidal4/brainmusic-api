
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var style = require('./routes/style');
var http = require('http');
var path = require('path');
var mongoose=require("mongoose");


var app = express();

// all environments
// Si se quiere utilizar en local, comentar port y ip y descomentar la linea de abajo.
//app.set('port', process.env.PORT || 3000);
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//Detectar conexion con mongodb


//app.get('/', routes.index);
//app.get('/users', user.list);
app.post("/users",user.addUser);
app.post("/login",user.login);
app.get("/users/:username",user.findUser);
app.put("/users/:username",user.updateUser);
app.get("/styles",style.list);
app.post("/styles",style.addStyle);

console.log("Conectando a la base de datos en mongolab...");
mongoose.connect("mongodb://brainmusic:brainmusic1@ds039027.mongolab.com:39027/brainmusic",function(err,res){
	if(err){
		console.log("Error de conexion a la base de datos: "+err);
	}else{
		console.log("Conexion realizada!");
		//Si se quiere utilizar en local, eliminar el argumento app.get('ip')!!
		http.createServer(app).listen(app.get('port'),app.get('ip'), function(){
		  console.log('Express server listening on port ' + app.get('port'));
		});
	}

});

