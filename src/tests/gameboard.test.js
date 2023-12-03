import gameBoard from '../factory/Gameboard'
import ship from '../factory/Ship'


describe('gameboard tests', () => {
  const gameboard =  gameBoard();
  
  test('endgame report', () => {
    gameboard.cruiser1.hit();
    gameboard.cruiser1.hit();
    gameboard.cruiser1.hit();

    expect(gameboard.craftShips.cruiser1.isSunk).toBe(true);
  })
})