import elementMovement from '../elementMovement';

describe('elementMovement', () => {
  it('elementMovement default', () => {
    expect(elementMovement({
      x: 1000,
      y: 100,
      target: null,
      originX: 50,
      originY: 50,
      strength: 10,
    })).toEqual({
      target: null,
      x: 9990,
      y: 990,
    });
  });

  it('elementMovement custom strength', () => {
    expect(elementMovement({
      x: 1000,
      y: 100,
      target: null,
      strength: 20,
    })).toEqual({
      target: null,
      x: 19980,
      y: 1980,
    });
  });

  it('elementMovement custom origin', () => {
    expect(elementMovement({
      x: 1000,
      y: 100,
      target: null,
      originX: 0,
      originY: 0,
    })).toEqual({
      target: null,
      x: 10000,
      y: 1000,
    });
  });
});
