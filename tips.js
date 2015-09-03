
console.log(
	"When you start a program, or when you get stuck," + "\n" +
	"read these tips again. They may help you." + "\n");

var tips = [
 1 + " Functions may return or print (or both) ",
 2 + " Comment function before doing it. ",
 3 + " Inside a function, only use the parameters it receives. ",
 4 + " Think of good names. ",
 5 + " Respect indentation. "
];


console.log(tips);
console.log("\n---\n");


// More about those tips:


// 1 - Functions may return or print (or both).

function sayHi(name) {
	console.log("hi " + name + "!");
}

function getSomeName() {
	return "Jess";
}

// What can you do with a function that returns something?

var name = getSomeName(); // Assign result to a variable

sayHi( getSomeName() ); // Pass result as an argument when calling a function

// The same but with other values in an expression:

var completeName = getSomeName() + " Smith"; // Assign to variable

sayHi( getSomeName() + " Smith" ); // Pass as argument



// 2 - Comment function before doing it.

// To understand what it has to do, what data it needs (parameters) and
// if it prints or returns something. If it's too difficult to describe
// it's a bad sign: maybe you should divide it in a couple of simpler functions.

// Returns a string made by repeating 'str' the given number of 'times'
// Example: repeatString("A", 3) returns "AAA"
function repeatString(str, times) {
	var result = "";
	for (var i = 0; i < times; i++) {
		result += str;
	}
	return result;
}



// 3 - Inside a function, you usually only use the parameters it receives.

// Focus on what the function has to do with the parameters
// (that should be described in the comment).

// Prints information about the 'episode'
function printEpisode(episode) {
	// use only episode variable here
	// (or other variables declared inside the function)
	console.log(episode.title);
	console.log(episode.description);
	console.log(episode.rating);
}



// 4 - Think of good names.

// Before naming a variable, function or class, think what it IS or DOES exactly
// and try to find a descriptive name (preferably short if you can).
// It doesn't matter if you change it later: that's a good sign, it means
// you understand the program better.

// Reverses the words in a string sentence
// Example: reverseWords("this is it") returns "it is this"
function reverseWords(sentence) {
	var words = sentence.split(" ");
	return words.reverse();
}



// 5 - Respect indentation.

// Important for the code to be readable, avoid mistakes and spot missing things.

var money = 100;

if (money > 0) {

	console.log("You have some money");

	if (money > 1000000) {
		console.log("You're millionaire!");
	} else {
		console.log("You're not a millionaire");
	}
}
