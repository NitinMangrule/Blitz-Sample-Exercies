const assert = require('assert');

describe('Default Values Exercies', () => {
  describe('should define a default parametrized method to make is more flexible', () => {
    it('should have a default param', () => {
      let number = int => int;
      const computed = number();
      const expectation = undefined;
      assert.strictEqual(computed, expectation);
    });

    it('should utilize the default param when a value is not passed', () => {
      let number = (int = 23) => int;
      const param = 42;
      const computed = number(param);
      const expectation = 23;
      assert.notStrictEqual(computed, expectation);
    });
  });
});
