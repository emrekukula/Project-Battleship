import ship from '../factory/Ship'

// use npm run test to test

describe('ship tests', () => {
  const cruiser = ship(3);

  test('length', () => {
    expect(cruiser.length).toBe(3);
  });

  test('hit number', () => {
    expect(cruiser.hitNumber).toBe(0);
  });

  test('check if sunk', () => {
    expect(cruiser.isSunk).toBe(false);
  });

  test('gets hit', () => {
    cruiser.hit();
    
    expect(cruiser.hitNumber).toEqual(1);
  });
  
  test('sunk after 3 hits', () => {
    cruiser.hit();
    cruiser.hit();

    expect(cruiser.isSunk).toBe(true);
  })
})