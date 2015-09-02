var decode = require("./decode.js");

var sentence = "fill the proper tank for the cow";
var secret = superDecode(sentence, "odd-backwards");
console.log(secret);

function superDecode(sentence, optionStr) {

	var words = sentence.split(" ");
	var opts = optionStr.split("-");
	var choose = opts[0];
	var direction = opts[1];

	if (choose === "even") {

		// Assign a function in a variable and then use it
		var even = function(word, idx) {
			return idx % 2 == 1;
		};

		words = words.filter(even);

	} else if (choose === "odd") {

		// Here the function is "inlined"
		words = words.filter(function(word, idx) {
			return idx % 2 == 0;
		});
	}

	if (direction === "backwards") {
		words = words.reverse();
	}

	return decode(words);
}