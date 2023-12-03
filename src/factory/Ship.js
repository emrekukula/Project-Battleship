export default function ship(length) {
  let hitNumber = 0;

  function checkSunk() {
    if (this.hitNumber >= this.length) {
      this.isSunk = true;
    }
  }

  function hit() {
    this.hitNumber += 1;

    // give hit function's this to checkSunk function and call checkSunk;
    checkSunk.call(this); 
  }

  return {
    checkSunk,
    length,
    hitNumber,
    isSunk: false,
    hit,
  }
}