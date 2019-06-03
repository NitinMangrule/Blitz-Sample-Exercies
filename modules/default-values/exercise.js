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
      const expectation = undefined;
      // TODO: Solution or Logic goes here

      assert.strictEqual(computed, expectation);
    });

    it('should utilize the default param when a value is not passed', () => {
      /*
        Task
          Define a variable using ES6 special method, having a default value - '23'
          Execute the same by passing a different value other the one assigend as default
          Verify the return value
      */
      const expectation = 23;
      // TODO: Solution or Logic goes here

      assert.notStrictEqual(computed, expectation);
    });
  });
});
