const assert = require('assert');

describe('default parameters make function parameters more flexible', () => {
  it('has a default param', function () {
    let number = (int = 0) => int;

    assert.equal(number(), 0);
  });

  it('uses default param when no value or undefined is passed', function () {
    let number = (int = 23) => int;
    const param = undefined;

    assert.equal(number(param), 23);
  });
});
