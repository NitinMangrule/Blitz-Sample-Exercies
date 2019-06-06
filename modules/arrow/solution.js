const assert = require("assert");

describe("Arrow functions Exercies", () => {
  it('should define an arrow method that logs whether the input is odd/even and returns the same', () => {
    /*
      Task
          Create an arrow method to test the conditions both for true and false conditons.
    */
    const func = (num) => {
      const numType = num % 2 === 0 ? 'even' : 'odd';
      return numType;
    }
    const computed1 = func(4);
    const computed2 = func(1235);
    const expected1 = 'even';
    const expected2 = 'odd';

    assert.equal(computed1, expected1);
    assert.equal(computed2, expected2);
  });

  it('should define an arrow method that logs whether an input is odd or even, without parenthesis', () => {
    /*
      Task
          Create an arrow method to test the conditions both for true and false conditons.
    */
    const func = num => {
      const numType = num % 2 === 0 ? 'even' : 'odd';
      return numType;
    }
    const computed1 = func(4);
    const computed2 = func(1235);
    const expected1 = 'even';
    const expected2 = 'odd';

    assert.equal(computed1, expected1);
    assert.equal(computed2, expected2);
  });

  it('should define an arrow method that returns true if the multiplication of the 2 inputs is even', () => {
    /*
      Task
          Create an arrow method to test the conditions both for true and false conditons.
    */
    const func = (num1, num2) => {
      return (num1 * num2) % 2 === 0
    }
    const computed1 = func(34, 23);
    const computed2 = func(53, 21);
    const expected1 = true;
    const expected2 = false;

    assert.equal(computed1, expected1);
    assert.equal(computed2, expected2);
  });

  it('should define a method with implicit return, that does not have curly braces', () => {
    /*
      Task
        1. Write a method that returns the input (4) multiplied by 2, without curly braces
        2. Write a method that returns an object {id: 123}
    */

    const func1 = num1 => num1 * 2
    const computed1 = func1(4);
    const expected1 = 8;
    assert.deepEqual(computed1, expected1);

    const func2 = _ => ({ id: 123 })
    const computed2 = func2().hasOwnProperty('id');
    const expected2 = true;
    assert.deepEqual(computed2, expected2);
  });
});
