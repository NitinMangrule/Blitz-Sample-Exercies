const assert = require('assert');

describe('destructuring arrays makes shorter code', () => {
  it('extracts value from array', () => {
    let [firstValue] = [1];
    assert.strictEqual(firstValue, 1);
  });

  it('makes swapping variables easier', () => {
    let a = 1;
    let b = 3;
    [a, b] = [b, a];
    assert.equal(a, 3);
    assert.equal(b, 1);
  });

  it('leading commas', () => {
    const all = ['ax', 'why', 'zet'];
    const [, , z] = all;
    assert.equal(z, 'zet');
  });
});

describe('destructuring also works on strings', () => {
  it('destructure every character', () => {
    let a, b, c;
    const str = 'abc';
    [a, b, c] = str;
    assert.deepEqual([a, b, c], ['a', 'b', 'c']);
  });
});

describe('destructuring objects', () => {
  it('is simple', () => {
    const { x } = { x: 1 };
    assert.equal(x, 1);
  });

  it('can have different variable names', () => {
    const o = {p: 42, q: true};
    const {p: foo, q: bar} = o;
    assert.equal(foo, 42);
    assert.equal(bar, true);
  });
});

describe('destructuring can also have default values', () => {
  it('for an empty array', () => {
    const [a = 1] = [];
    assert.equal(a, 1);
  });
});
