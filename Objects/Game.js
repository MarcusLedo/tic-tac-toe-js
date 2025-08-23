import { Board } from "./Board.js";
import { Player } from "./Player.js";

class Game {
  board;
  player1;
  player2;
  #turnCounter;

  constructor(size, p1Name, p2Name) {
    this.board = new Board(size);
    this.player1 = new Player(p1Name, true, "X");
    this.player2 = new Player(p2Name, false, "O");
    this.#turnCounter = 0;
  }

  isPositionEmpty(x, y) {
    const position = this.board.getPostion(x, y);
    if (position === " ") return true;
    else return false;
  }

  isPostionOutOfBounds(x, y) {
    const [coordX, coordY] = this.board.convertCoordinates([x, y]);
    const [dimensionX, dimensionY] = this.board.getDimensions();

    if (coordX > dimensionX || coordX < 0 || coordY > dimensionY || coordY < 0)
      return true;
    else return false;
  }

  isPlayValid(x, y) {
    if (this.isPostionOutOfBounds(x, y)) {
      return false;
    } else if (!this.isPositionEmpty(x, y)) {
      return false;
    }

    return true;
  }

  isGameInProgress() {
    if (this.#turnCounter === this.board.getRows() * this.board.getColumns())
      return false;
    else return true;
  }

  incrementTurn() {
    this.#turnCounter++;
  }

  getActivePlayerSymbol() {
    if (this.player1.active === true) return this.player1.getSymbol();
    else return this.player2.getSymbol();
  }

  switchActivePlayer() {
    if (this.player1.isActive()) {
      this.player1.active = false;
      this.player2.active = true;
    } else {
      this.player1.active = true;
      this.player2.active = false;
    }
  }
}

export { Game };
