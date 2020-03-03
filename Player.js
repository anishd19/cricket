const { randomIntFromInterval } = require('./utils');

const SCORES = [0,1,2,3,4,6];

class Player {
    constructor(name) {
      this.name = name;
      this.score = 0;
    }

    setScore(score) {
      this.score = score;
    }

    getScore() {
      return this.score;
    }

    getName() {
      return this.name;
    }

    getGesture() {
      return SCORES[randomIntFromInterval(0, 5)];
    }
}

module.exports = Player;