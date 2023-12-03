export default function createGameBoard(board) {
  
  for (let i = 0; i < 10; i++) {
    if (board == 'playerBoard') {
      const container = document.getElementById('player-cell-container');
      createVerticalContainer(container, 'player');
    } else if (board == 'aiBoard') {
      const container = document.getElementById('ai-cell-container');
      createVerticalContainer(container, 'ai');
    } else {
      throw new Error('something went wrong');
    }
  }
  
  const verticals = document.querySelectorAll('#player-vertical-container');
  verticals.forEach((cell) => {
    for (let i = 0; i < 10; i++) {
      createCell(cell, i);
    }
  })

  // this needs fixing for later, should be 10 instead of 5
  
  const verticalsAi = document.querySelectorAll('#ai-vertical-container')
  verticalsAi.forEach((cell) => {
    for (let i = 0; i < 5; i++) {
      createCell(cell, i);
    }
  })

  function createVerticalContainer(container, type) {
    const verticalContainer = document.createElement('div');
    verticalContainer.setAttribute('id', `${type}-vertical-container`);
    container.appendChild(verticalContainer);
  }

  function createCell(container, i) {
    const cell = document.createElement('div');
    cell.setAttribute('id', `cell${i + 1}`);
    container.appendChild(cell);
  }
}

