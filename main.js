import { Board } from "./Objects/Board.js";
import promptSync from "prompt-sync";

const prompt = promptSync();
let temp = 0;

const size = prompt("Size of the board: ");
const board = new Board(size);

while(temp < size*size){
    const coordinates = prompt("Type the coordinates of place you wish to play (ex.: 2 1): ");
    const x = parseInt(coordinates.slice(0, 1), 10);
    const y = parseInt(coordinates.slice(2), 10);

    console.log(`"${x}" "${y}"`);

    board.updateBoard(x, y);
    board.printBoard();

    temp++;
}

console.log("END");