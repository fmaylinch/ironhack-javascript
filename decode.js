
function decode(words) {

	var secret = "";

	for (var i=0; i<words.length; i++) {
		var word = words[i];
		var letter = word.charAt(i % 5);
		secret += letter;
	}

	return secret;
}

module.exports = decode;