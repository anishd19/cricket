const MAXTHROWS = 6;

class Game {
  constructor(playerOne, playerTwo) {
    this.pOne = playerOne;
    this.pTwo = playerTwo;
    this.noOfPlays = 0;
  }

  play(currentPlayer, otherPlayer) {
    let out = false;
    let score = 0;
    let msg = '';

    this.noOfPlays++;

    for (let i = 0; i < MAXTHROWS && !out; i++) {
      let currentPlayerGesture = currentPlayer.getGesture();
      let otherPlayerGesture = otherPlayer.getGesture();

      msg = `${currentPlayer.name} throws ${currentPlayerGesture}, `;
      msg += `${otherPlayer.name} throws ${otherPlayerGesture}.`;

      if (currentPlayerGesture === otherPlayerGesture) {
        out = true;
        msg += `${currentPlayer.name} is out`;
      } else {
        score += currentPlayerGesture;
        msg += `${currentPlayer.name}'s score is ${score}`;
      }
      console.log(msg);
      if ((this.noOfPlays > 1) && (score > otherPlayer.score)) {
        break;
      }
    }
    currentPlayer.setScore(score);
  }

  runMatch(firstPlayerName) {
    let first, second;
    if (firstPlayerName === this.pOne.name) {
      first = this.pOne;
      second = this.pTwo;
    } else if (firstPlayerName === this.pTwo.name) {
      first = this.pTwo;
      second = this.pOne;
    } else {
      throw new Error('invalid player name');
    }
    console.log(`Round 1: ${first.name} is batting`);
    this.play(first, second);
    console.log(`Round 2: ${second.name} is batting`);
    this.play(second, first);

    if (this.pOne.score === this.pTwo.score) {
      console.log('Game is a draw');
    } else if (this.pOne.score > this.pTwo.score) {
      console.log(`Game winner is ${this.pOne.name}`);
    } else {
      console.log(`Game winner is ${this.pTwo.name}`);
    }
  }
}

module.exports = Game;