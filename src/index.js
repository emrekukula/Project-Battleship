// import "./styles.css";
import "./factory/Ship";
import gameBoard from './factory/Gameboard'
import "./factory/Player"
import createGameBoard from './dom/dom'

console.log(gameBoard());

const aiBoard = createGameBoard('aiBoard');
const playerBoard = createGameBoard('playerBoard');

