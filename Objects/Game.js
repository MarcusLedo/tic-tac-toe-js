import { Board } from "./Board.js";

class Game {
  board;
  player1;
  player2;
  #turn;

  constructor(size) {
    this.board = new Board(size);
    //this.player1 = player1;
    //this.player2 = player2;
    this.#turn = 0;
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
    if (this.#turn === this.board.getRows() * this.board.getColumns())
      return false;
    else return true;
  }

  incrementTurn() {
    this.#turn++;
  }
}

export { Game };
