const assert = require('assert');

describe('Destructuring Array Exercises', () => {
  it('should extract a value from array', () => {
    /*
      Task
        Create a destructured array
        Assign a value to it
        Read the assigned value
    */
    const initialValue = 1;
    let [firstValue] = [initialValue];
    const computed = firstValue;
    const expectation = initialValue;
    assert.strictEqual(computed, expectation);
  });

  it('should swap the two variables', () => {
    /*
      Task
        Swap the two variables using destructured arrays
    */
    const firstInitial = 1;
    const secondInitial = 3;
    let first = firstInitial;
    let second = secondInitial;
    [first, second] = [second, first];
    const computed1 = first;
    const computed2 = second;
    const expectation1 = secondInitial;
    const expectation2 = firstInitial;

    assert.equal(computed1, expectation1);
    assert.equal(computed2, expectation2);
  });

  it('should destructure the array using leading commas', () => {
    /*
      Task
        The array destructuring should be done using leading commas
    */
    const initial = ['ax', 'why', 'zet'];
    const [, , last] = initial;

    const computed = last;
    const expectation = initial[initial.length - 1];

    assert.equal(computed, expectation);
  });
});

describe('Destructuring String Exercises', () => {
  it('should destructure every character of a string', () => {
    /*
      Task
        Create a string
        Convert the string to an array using destructuring
    */
    let first, second, third;
    const initial = 'CAR';
    [first, second, third] = initial;
    const computed = [first, second, third];
    const expectation = ['C', 'A', 'R'];
    assert.deepEqual(computed, expectation);
  });
});

describe('Destructuring Object Exercises', () => {
  it('should create an object and access it value using destructuring', () => {
    /*
      Task
        Create an object having a key 'id'
        Access the assigned value to 'id' to it through destructuring
    */
    const initial = { id: 101 };
    const { id } = initial;

    const computed = id;
    const expectation = initial.id;

    assert.equal(computed, expectation);
  });

  it('should create an object and access it value using destructuring havig different variable names', () => {
    /*
     Task
       Create an object having a couple of keys 'x' and 'y'
       Access the assigned value to 'x' and 'y' using diferent variable names, through destructuring
   */
    const initial = { x: 100, y: 50 };
    const { x: horizontal, y: vertical } = initial;

    const computed1 = horizontal;
    const expectation1 = initial.x;

    const computed2 = vertical;
    const expectation2 = initial.y;

    assert.equal(computed1, expectation1);
    assert.equal(computed2, expectation2);
  });
});

describe('Destructuring Default Exercises', () => {
  it('should create an empty array with destructured being assigned an initial value', () => {
    /*
      Task
        Assign an empty array to a destructured variable with name 'flask'
        The value of the 'flask' should be 100
    */
    const emptyArray = [];
    const initial = 100;
    const [flask = initial] = emptyArray;
    const computed = flask;
    const expectation = initial;

    assert.equal(computed, expectation);
  });
});
