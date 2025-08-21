import { Board } from "./Objects/Board.js";
import promptSync from "prompt-sync";

const board = new Board(4);
const prompt = promptSync();

const myName = prompt("Who are you: ");

console.log(myName);

//console.log(board.getBoard());

board.printBoard();
