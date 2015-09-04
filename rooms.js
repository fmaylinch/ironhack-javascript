

// Classes

var Exit = function(room, description) {
  this.description = description; // what you see from the current room
  this.room = room;               // destination room
};


var Room = function(description) {
  this.description = description; // what you see in this room
  this.items = [];  // items in this room
  this.exits = {};  // exits from this room
};

// Sets exit in given direction
Room.prototype.setExit = function(direction, exit) {
  this.exits[direction] = exit;
};

Room.prototype.describe = function() {
  console.log("You're in " + this.description + ".");
  
  var exits = this.exits;
  var exitOptions = Object.keys(this.exits).map(function (direction) {
    var exit = exits[direction];
    return exit.description + " to the " + direction;
  });

  console.log("You see " + exitOptions.join(", ") + ".");
};


var Game = function (entryRoom) {

  this.currentRoom = entryRoom;

  // Prepare terminal
  var readline = require('readline');
  this.terminal = readline.createInterface(process.stdin, process.stdout);
  this.terminal.setPrompt('action> ');
};

Game.prototype.start = function() {

  this.printState();
  this.terminal.prompt();

  var self = this; // because "this" inside function refers to the function
  this.terminal.on('line', function(line) {
      self.processCommand(line);
      self.terminal.prompt();
  }).on('close',function(){
      process.exit(0);
  });
};

Game.prototype.printState = function() {
  this.currentRoom.describe();
};

Game.prototype.processCommand = function(command) {

  command = command.trim().toUpperCase();

  if (command === "N" || command === "S" || command === "E" || command === "W") {
    var direction = command;
    var exit = this.currentRoom.exits[direction];
    if (exit) {
      this.currentRoom = exit.room;
      this.printState();
    } else {
      console.log("There's no exit to the " + direction + ".");
    }
  } else if (command === "L") {
    this.printState();
  } else if (command === "X") {
    this.terminal.close();
  } else if (command) {
    console.log("Sorry, I don't understand the command. Use one of: N, S, E, W, L (look), X (exit).");
  }
};


// Prepare rooms

var entry = new Room("a place with small tables. There's a bar but no waiter");
var main = new Room("a big room with big tables where people pretend they're working");
var toilet = new Room("a small toilet. There's no paper");
var basement = new Room("a big area with tables, a projector and a kitchen");
var studentRoom = new Room("a small room with people sleeping. There's food and drinks all over the place");
var ironhack = new Room("a room with people working with computers or playing table tennis. They don't seem to notice you");

function setExits(room1, direction1, room2, direction2, description) {
  room1.setExit(direction1, new Exit(room2, description));
  room2.setExit(direction2, new Exit(room1, description));
}

setExits(entry, "W", main, "E", "a glass door");
setExits(main, "S", toilet, "N", "a white wooden door");
setExits(main, "N", basement, "N", "stairs");
setExits(basement, "S", studentRoom, "N", "an open door");
setExits(basement, "E", ironhack, "N", "a metal door");


// Start game

var game = new Game(entry);
game.start();
