const crypto = require('crypto'),
  Exec = require('child_process').exec,
  spawn = require('child_process').spawn,
  http = require('http'),
	url = require('url'),
	SerialPort = require('serialport'),
	port = new SerialPort('/dev/ttyUSB0', { baudRate: 115200 }),
  os = require('os'),
	fs = require('fs'),
	io = require('socket.io')(http),
	socketPort = 3030,
	TAG = "[index.js]";

// --- webserver --- //
var server= http.createServer(function(request,response){
var path = url.parse(request.url).pathname;

    switch(path) {
        case '/' :
            response.writeHead(200,{'Content-Type':'text/html'})
            response.write('Hello World, Welcome to Socket Programming');
            response.end();
            break;
        case '/chatexample.html' :
            fs.readFile(__dirname + path,function(error,data){
                if(error)
                {
                   response.writeHead(404);
                   response.write(error);
                   response.end();
                } else {
                    response.writeHead(200,{'Content-Type':'text/html'});
                    response.write(data);
                    response.end();
                }
            });
            break;
        default :
            response.writeHead(404);
            response.write("opps this doesn't exist - 404");
            response.end();
            break;
    }

});
server.listen(socketPort);
var listener = io.listen(server);
listener.sockets.on('connection',function(socket){
	console.log(TAG, "Client connected.");

	socket.on('disconnect',function(socket){
		console.log(TAG, "Client disconnected.");
	});
});


	// ------------------------------- //
	function isJson(str) {
	    try {
	        JSON.parse(str);
	    } catch (e) {
	        return false;
	    }
	    return true;
	}

	function parseMessage(msg) {
		console.log(TAG, msg);

		io.emit('j1850', msg);

		if (msg.ignition === "off") {
	  	Exec("gnome-session-quit --power-off");
		}

		if (msg.ignition === "on") {
			Exec("xdotool key 0xff1b");
		}
	}

console.log(TAG, "Starting dash service on port", socketPort);

	let buffer = '';

	port.on('readable', function () {
		buffer += port.read().toString('utf8');
		if (buffer.slice(-1) === "\n") {
		  let lines = buffer.split('\n');
			for (let i=0; i < lines.length; i++) {
				let line = lines[i];
				if (isJson(line)) {
					let message = JSON.parse(line);
					parseMessage(message)
				} else {
					// console.log(TAG, "[NOT JSON]", line);
				}
			}
			buffer = '';
		}
	})