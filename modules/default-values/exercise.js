const assert = require('assert');

describe('default parameters make function parameters more flexible', () => {
  it('has a default param', function() {
    let number = int => int;
    // pass the test case with default param.
    assert.equal(number(), 0);
  });

  it('uses default param when no value or undefined is passed', function() {
    let number = (int = 23) => int;
    const param = 42;
    // fix param's value to pass the test case.
    assert.equal(number(param), 23);
  });
});
