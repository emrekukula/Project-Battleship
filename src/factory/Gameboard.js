import ship from "./Ship"

export default function gameBoard() {

  function craftShips() {
    const carrier = ship(5);
    const battleship = ship(4);
    const cruiser1 = ship(3); 
    const cruiser2 = ship(3); 
    const destroyer1 = ship(2); 
    const destroyer2 = ship(2); 

    return {
      carrier,
      battleship,
      cruiser1,
      cruiser2,
      destroyer1,
      destroyer2,
    }
  }
  craftShips();


  function shipCoords(length, x, y) {
    let arr = [];
    let obj = {};

    for (let i = 0; i < length; i++) {
      obj[i] = {X: x , Y: y + i};
    }
    arr.push(obj);
    console.log(arr);
    return arr;
  }
  console.log(shipCoords(3, 3, 1))

  let missedShots = [];

  function receiveAttack(x, y) {
    if (craftShips.cruiser1.coords[0].X == x && craftShips.cruiser1.coords[0].Y == y) {
      console.log('shot')
      craftShips.cruiser1.hit();
    } else {
      missedShots.push({x, y});
    }
  }

  function reportEnd() {
    if (craftShips.cruiser1.hitNumber == 3) {
      console.log('game ended');
      return true;
    }
  }

  return {
    receiveAttack,
    reportEnd,
    missedShots,
  }
}