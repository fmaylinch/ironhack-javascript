// Define a Car "class"
// With two properties: brand, speed
// With two methods: accelerate(inc), brake(dec)
// Add another method: getState ("Ferrari at 200 km/h")
// Then create one instance and play with it

// initialise

var Car = function(brand) {
	this.brand = brand;
	this.speed = 0;
}

// other methods

Car.prototype.accelerate = function (increment) {
	this.speed += increment;
};

Car.prototype.brake = function (decrement) {
	if (decrement <= this.speed) {
		this.speed -= decrement;
	} else {
		this.speed = 0;
	}
};

Car.prototype.getState = function() {
	return this.brand + " running at " + this.speed;
}

module.exports = Car;

