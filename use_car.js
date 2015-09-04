
var Car = require("./car.js")

var c1 = new Car("BMW");
console.log(c1.getState());
c1.accelerate(50);
console.log(c1.getState());
c1.brake(60);
console.log(c1.getState());

var c2 = new Car("Ferrari");

