// factorial(5) = 5 * 4 * 3 * 2 * 1
// factorial(5) = 5 * factorial(4)
// factorial(4) =     4 * 3 * 2 * 1
// factorial(N) = N * factorial(N-1)
// factorial(1) = 1
// factorial(0) = 1
function factorial(x) {
	if (x === 0) {
		// exit way
		return 1;
	} else {
		// recursive way
		return x * factorial(x-1); // careful!!!
	}
}

console.log( "4! = " + factorial(4) );
