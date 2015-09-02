
var fs = require("fs");

function logContent(error, content) {
	if (error) {
		console.error("Oh, an error occurred while reading file");
		console.error(JSON.stringify(error, null, 2)); // spacing level = 2
	} else {
		// Here I will print the lines
		var lines = content.split("\n");
		for (var i=0; i<lines.length; i++) {
			console.log("Line " + (i+1) + ": " + lines[i]);
		}
	}
}

// http://stackoverflow.com/questions/4351521/how-to-pass-command-line-arguments-to-node-js
var args = process.argv.slice(2);

if (args.length != 1) {
	console.log("Run this script with one argument: the file you want to read");
	return;
}

var file = args[0];

console.log("Displaying contents of '" + file + "':");

fs.readFile(file, "utf8", logContent);
