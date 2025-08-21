class Board {
  #rows = 3;
  #columns = 3;
  #gameBoard;
  validSpaces;

  constructor(size) {
    this.#rows = size;
    this.#columns = size;

    this.#gameBoard = this.#buildBoard(size);
  }

  /**
   * buildBoard
   * monta/inicializa o tabuleiro
   * de maneira dinâmica de acordo com tamanho.
   * Isso inclui as células vazias e os
   * caracteres (—, +, |).
   *
   * sim... isso '—' é um em dash. Não estou usando AI!!!
   */
  #buildBoard(size) {
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
    console.log("\n");
  }

  getBoard() {
    const board = this.#gameBoard;
    return board;
  }

  /**
   * updateBoard
   * Recebe uma coordenda (x, y) e
   * atualiza a posição com X ou O
   */
  updateBoard(x, y) {
    const [coordX, coordY] = this.convertCoordinates([x, y]);
    this.#gameBoard[coordX][coordY] = "X";
  }

  /**
   * convertCoordinates
   * Converte um array de coordenada (x, y)
   * para se adequar a nossa matriz, que leva em
   * conta os caracteres (—, +, |)
   */
  convertCoordinates(coordinates) {
    let coordX = coordinates[0];
    let coordY = coordinates[1];

    // X
    coordinates[0] = coordX * 2 - 2;

    // Y
    coordinates[1] = coordY * 2 - 2;

    return coordinates;
  }
}

export { Board };
