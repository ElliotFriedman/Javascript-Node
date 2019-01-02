var path = require('path');
var express = require('express');
var app = express();

var dir = path.join(__dirname, 'public');

app.use(express.static(dir));

var http = require('http');
var fs = require('fs');

app.get('/', function (req, res) {

	fs.readFile('index.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();

	});
});

app.listen(3000, function () {
	console.log('Listening on http://localhost:3000/');
});
