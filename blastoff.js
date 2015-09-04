
function blastOff(count) { // count = 5

	var currentCount = count; // 0

    // recursive function
	function callback() {
		if (currentCount === 0) {
			console.log("FIRE!"); // exit way of recursion
		} else { // currentCount is > 0
			console.log(currentCount);
			currentCount -= 1;
			setTimeout(callback, 1000); // recursive way
		}
	}

	callback();
}

blastOff(5);