import getCoordinates from '../getCoordinates';

describe('getCoordinates', () => {
  it('getCoordinates', () => {
    expect(getCoordinates(5, 5)).toStrictEqual({
      x: 5,
      y: 5,
    });
  });
});
