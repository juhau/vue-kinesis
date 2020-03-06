import getCenter from '../getCenter';

describe('getCenter', () => {
  it('getCenter no element', () => {
    expect(getCenter()).toStrictEqual({ x: 0, y: 0 });
  });

  it('getCenter no element', () => {
    const newDiv = document.createElement('div');
    const newContent = document.createTextNode('lorem ipsum');
    const el = newDiv.appendChild(newContent);
    document.body.appendChild(el);

    const myEl = document.querySelector('div');

    expect(document.body).toBe(1);
    // expect(myEl.getBoundingClientRect()).toBe(1);
    // expect(getCenter()).toStrictEqual({ x: 0, y: 0 });
  });
});
