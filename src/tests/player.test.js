import player from "../factory/Player";

describe('player test', () => {
  test('check player turn', () => {
    expect(player.turnToPlay(playerTurn).toBe(playerTurn));
  });

  test('check ai turn', () => {
    expect(player.turnToPlay(aiTurn).toBe(aiTurn));
  });

})