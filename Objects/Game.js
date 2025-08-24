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

  getActivePlayer() {
    if (this.player1.isActive()) return this.player1;
    else return this.player2;
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

  isWinPlay(play) {
    const [x, y] = play;
    const sizeRow = this.board.getRows();
    const sizeColumns = this.board.getColumns();

    if (this.isRowEqual(x)) return true;
    if (this.isColumnEqual(y)) return true;

    if (this.isDiagonalEqual(x)) return true;

    return false;
  }

  isRowEqual(row) {
    const x = row;
    const sizeRow = this.board.getRows();
    const sizeColumns = this.board.getColumns();
    const rowAux = [];

    for (let j = 1; j <= sizeColumns; j++) {
      rowAux.push(this.board.getPostion(x, j));
    }

    if (rowAux[0] !== " ")
      return rowAux.every((elem, i, arr) => elem === arr[0]);

    return false;
  }

  isColumnEqual(column) {
    const y = column;
    const sizeRow = this.board.getRows();
    const sizeColumns = this.board.getColumns();
    const columnAux = [];

    for (let i = 1; i <= sizeRow; i++) {
      columnAux.push(this.board.getPostion(i, y));
    }

    if (columnAux[0] !== " ")
      return columnAux.every((elem, i, arr) => elem === arr[0]);

    return false;
  }

  isDiagonalEqual(diagonal) {
    const z = diagonal;
    const sizeRow = this.board.getRows();
    const sizeColumns = this.board.getColumns();
    const DP = []; //Diagonal Principal
    const DS = []; //Diagonal Secundária

    //Checando DP e DS
    let j = sizeRow;
    for (let i = 1; i <= sizeRow; i++) {
      DP.push(this.board.getPostion(i, i));
      DS.push(this.board.getPostion(i, j));
      j--;
    }

    if (DP.every((elem, i, arr) => elem === arr[0]) && DP[0] !== " ")
      return true;
    if (DS.every((elem, i, arr) => elem === arr[0]) && DS[0] !== " ")
      return true;

    return false;
  }

  printWinScreen() {
    const winner = this.getActivePlayer();

    console.log(`${winner.getName()} ('${winner.getSymbol()}') WON!!`);
  }
}

export { Game };
