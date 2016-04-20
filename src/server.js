
var websocker_server = function() {

	"use strict";

	var port = 8888;

	console.log('listening on    localhost:' + port + '\n');

	var WebSocketServer = require('ws').Server;

	var wss = new WebSocketServer({ port: port });
	 
	wss.on('connection', function connection(ws) {

		ws.send('this message was sent from server side to client');


		ws.on('message', function incoming(message) {
		console.log('received: %s', message);
		});

	    // ---

	    ws.on("error", function(event) {

	        var error_msg = "ERROR on on on error : " + event;
	        console.error(error_msg);
	    });

	    // ---

	    ws.on("close", function() {

	        console.log("websocket connection close");
	    });

	});

}(); //  websocker_server = function()

