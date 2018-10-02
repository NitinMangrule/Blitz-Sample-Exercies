const assert = require('assert');

describe('destructuring arrays makes shorter code', () => {
  it('extracts value from array', () => {
    let firstValue = [1];
    // fix the code above to assign the first element to firstValue and pass the test case.
    assert.strictEqual(firstValue, 1);
  });

  it('makes swapping variables easier', () => {
    let a = 1;
    let b = 3;
    // use destructuring to swap variables.
    assert.equal(a, 3);
    assert.equal(b, 1);
  });

  it('leading commas', () => {
    const all = ['ax', 'why', 'zet'];
    // use leading commas to assign 3rd element in variable z
    assert.equal(z, 'zet');
  });
});

describe('destructuring also works on strings', () => {
  it('destructure every character', () => {
    let a, b, c;
    const str = 'abc';
    // destructure the chars in the string into a, b, and c.
    assert.deepEqual([a, b, c], ['a', 'b', 'c']);
  });
});

describe('destructuring objects', () => {
  it('is simple', () => {
    const x = { x: 1 };
    // pass the test case.
    assert.equal(x, 1);
  });

  it('can have different variable names', () => {
    const o = {p: 42, q: true};
    let foo, bar;
    // destructure the values into foo and bar variables.
    assert.equal(foo, 42);
    assert.equal(bar, true);
  });
});

describe('destructuring can also have default values', () => {
  it('for an empty array', () => {
    const [a] = [];
    // pass the test case using default value
    assert.equal(a, 1);
  });
});
