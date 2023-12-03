export default function player() {

  function turnToPlay(turn) {
    if ( turn == playerTurn) {
      return playerTurn;
    } else if ( turn == aiTurn) {
      return aiTurn;
    } else {
      return;
    }
  }

  function playerTurn() {
    
  }

  function aiTurn() {
    let randomX = Math.floor(Math.random() * 11);
    let randomY = Math.floor(Math.random() * 11);

    return {randomX, randomY};
  }

  let i = 1;
  switch ( i < 200 ) {
    case i % 2 == 1: 
      turnToPlay(playerTurn);
      break;
    
    case i % 2 == 0:
      turnToPlay(aiTurn);
      break;
  }

  return {
    turnToPlay,
    aiTurn,
  }
}