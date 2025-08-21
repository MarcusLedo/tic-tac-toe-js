class Board {
  #rows = 3;
  #columns = 3;
  #gameBoard;

  constructor(size) {
    this.#rows = size;
    this.#columns = size;

    this.#gameBoard = this.buildBoard(size);
  }

  /**
   * buildBoard monta/inicializa o tabuleiro
   * de maneira dinâmica de acordo com tamanho.
   * Isso inclui as células vazias e os
   * caracteres (-, +, |).
   */
  buildBoard(size) {
    // Fazemos o cálculo size * 2 - 1 para levar em conta os caractres
    const rows = size * 2 - 1;
    const columns = size * 2 - 1;
    const gameBoard = [];

    for (let i = 0; i < rows; i++) {
      gameBoard.push([]);
      //Linhas pares (contando de 0)
      if (i % 2 === 0) {
        for (let j = 0; j < columns; j++) {
          //Coluna Par (contando de 0)
          if (j % 2 === 0) gameBoard[i].push(" ");
          //Coluna Ímpar (contando de 0)
          else gameBoard[i].push("|");
        }
        //Linhas ímpares (contando de 0)
      } else {
        for (let j = 0; j < columns; j++) {
          //Coluna Par (contando de 0)
          if (j % 2 === 0) gameBoard[i].push("—");
          //Coluna Ímpar (contando de 0)
          else gameBoard[i].push("+");
        }
      }
    }

    return gameBoard;
  }

  printBoard() {
    this.#gameBoard.forEach((elem) => console.log(...elem));
  }

  getBoard() {
    const board = this.#gameBoard;
    return board;
  }
}

export { Board };
