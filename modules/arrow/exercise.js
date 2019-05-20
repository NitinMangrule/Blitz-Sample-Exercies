const assert = require('assert');

describe('arrow functions', function() {

  it('is an arrow function that logs whether the input is odd/even and returns the same', function() {
    // write your function here and assign it to a variable func
    assert.equal(func(4), 'even');
    assert.equal(func(1235), 'odd');
  });

  it('is a function that works w/o parens', () => {
    // write the same function but this time w/o parens around params
    assert.equal(func(4), 'even');
    assert.equal(func(1235), 'odd');
  });

  it('is an arrow function that returns true if the multiplication of the 2 inputs is even', () => {
    // write your function here and assign it to func.
    assert.equal(func(34, 23), true);
    assert.equal(func(53, 21), false);
  });

  it('is a fn that does not have curly braces', () => {
    // write a fn func1 that returns the input multiplied by 2 w/o curly braces
    assert.deepEqual(func1(4), 8);

    // write a fn func2 that returns an object {id: 123}
    assert.deepEqual(func2().hasOwnProperty('id'), true);
  });

  /**
   * code to run in console
    window.name = "global";

    var obj = {
      name: "obj",

      who1: function () {
        console.log("this is ", this.name);
      },
      who2: () => {
        console.log("this is ", this.name);
      },
      who3() {
        console.log("this is ", this.name);
      }
    };
  */
});
