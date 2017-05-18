var http = require('http');
var express = require('express');
var config = require('./config.json');

var server = express();


server.all('*', function(request, response, next) {
 console.log(request.method + " " + request.url);
 next();
})

server.use('/api/v1', require('./api/routes_v1'));
server.use('/api/v2', require('./api/routes_v2'));

server.listen(process.env.PORT || config.webPort, function(){
	console.log('De server luistert op port ' + config.webPort);
});
	
	module.exports = server;