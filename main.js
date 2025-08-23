import { Game } from "./Objects/Game.js";
import promptSync from "prompt-sync";

//------------------------------ MAIN ------------------------------

const prompt = promptSync();

const size = prompt("Size of the board: ");
const p1Name = prompt("Player 1 name: ");
const p2Name = prompt("Player 2 name: ");
const game = new Game(size, p1Name, p2Name);

while (game.isGameInProgress()) {
  const [x, y] = getPlay();
  const symbol = game.getActivePlayerSymbol();

  game.board.updateBoard(x, y, symbol);

  game.switchActivePlayer();
  game.incrementTurn();
}

console.log("END");

//------------------------------ FUNCTIONS ------------------------------

/**a
 * getPlay
 * Valida a jogada para que o board possa
 * ser atualizado sem causar nenhum tipo de bug
 */
function getPlay() {
  let x, y;
  do {
    game.board.printBoard();
    if (game.player1.isActive()) {
      console.log(`---> PLAYER 1 TURN (${game.player1.getName()}) \n`);
    } else {
      console.log(`---> PLAYER 2 TURN (${game.player2.getName()})\n`);
    }
    const coordinates = prompt(
      "Type the coordinates of place you wish to play (ex.: 2 1): "
    );
    x = parseInt(coordinates.slice(0, 1), 10);
    y = parseInt(coordinates.slice(2), 10);

    if (!game.isPlayValid(x, y)) console.log("\n ERROR - INVALID PLAY \n");
  } while (!game.isPlayValid(x, y));

  return [x, y];
}
