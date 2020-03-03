const Game = require('./Game');
const Player = require('./Player');

let game = new Game(new Player('Harry'), new Player('Ron'));

game.runMatch('Harry');