const assert = require("assert");

describe("arrow functions", function () {
  it('is an arrow function that logs whether the input is odd/even and returns the same', function () {
    // write your function here and assign it to a variable func
    const func = (num) => {
      const numType = num % 2 === 0 ? 'even' : 'odd';
      console.log(numType);
      return numType;
    }
    assert.equal(func(4), 'even');
    assert.equal(func(1235), 'odd');
  });

  it('is a function that works w/o parens', () => {
    // write the same function but this time w/o parens around params
    const func = num => {
      const numType = num % 2 === 0 ? 'even' : 'odd';
      console.log(numType);
      return numType;
    }
    assert.equal(func(4), 'even');
    assert.equal(func(1235), 'odd');
  });

  it('is an arrow function that returns true if the multiplication of the 2 inputs is even', () => {
    // write your function here and assign it to func.
    const func = (num1, num2) => {
      return (num1 * num2) % 2 === 0
    }
    assert.equal(func(34, 23), true);
    assert.equal(func(53, 21), false);
  });

  it('is a fn with implicit return that does not have curly braces', () => {
    // write a fn func1 that returns the input multiplied by 2 w/o curly braces
    const func1 = num1 => num1 * 2
    assert.deepEqual(func1(4), 8);

    // write a fn func2 that returns an object {id: 123}
    const func2 = _ => ({id: 123})
    assert.deepEqual(func2().hasOwnProperty('id'), true);
  });
});
