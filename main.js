import { Board } from "./Objects/Board.js";
import promptSync from "prompt-sync";

const board = new Board(8);
const prompt = promptSync();

//const myName = prompt("Who are you: ");

//console.log(board.getBoard());

board.printBoard();

board.updateBoard(7, 5);

board.printBoard();
