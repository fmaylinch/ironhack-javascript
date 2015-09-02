
var str = '{ "name": "THE NAME" }';

// parse converts from string to object
var episode = JSON.parse(str);

console.log(episode.name);

// stringify converts from object to string
console.log(JSON.stringify(episode));