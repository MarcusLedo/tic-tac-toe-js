import { Game } from "./Objects/Game.js";
import promptSync from "prompt-sync";

const prompt = promptSync();

const size = prompt("Size of the board: ");
const game = new Game(size);
game.board.printBoard();

while (game.isGameInProgress()) {
  const [x, y] = getPlay();

  game.board.updateBoard(x, y);
  game.board.printBoard();

  game.incrementTurn();
}

console.log("END");

function getPlay() {
  let x, y;
  do {
    const coordinates = prompt(
      "Type the coordinates of place you wish to play (ex.: 2 1): "
    );
    x = parseInt(coordinates.slice(0, 1), 10);
    y = parseInt(coordinates.slice(2), 10);

    if (!game.isPlayValid(x, y)) console.log("ERROR - INVALID PLAY");
  } while (!game.isPlayValid(x, y));

  return [x, y];
}
