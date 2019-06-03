const assert = require('assert');

describe('Default Values Exercies', () => {
  describe('should define a default parametrized method to make is more flexible', () => {
    it('should have a default param', () => {
      /*
        Task
          Define a variable using ES6 special method, having an unassigned value
          Execute the same
          Verify the return value
      */
      let number = int => int;
      const computed = number();
      const expectation = undefined;
      assert.strictEqual(computed, expectation);
    });

    it('should utilize the default param when a value is not passed', () => {
      /*
        Task
          Define a variable using ES6 special method, having a default value - '23'
          Execute the same by passing a different value other the one assigend as default
          Verify the return value
      */
      const initial = 23;
      let number = (int = initial) => int;
      const param = 42;
      const computed = number(param);
      const expectation = 23;
      assert.notStrictEqual(computed, expectation);
    });
  });
});
