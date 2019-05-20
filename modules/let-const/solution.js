const assert = require('assert');

describe('`let` restricts the scope of the variable to the current block', () => {
  describe('`let` vs. `var`', () => {
    it('`var` works in a functional scope', () => {
      if (true) {
        var varX = true;
      }
      assert.equal(varX, true);
    });

    it('`let` restricts scope to inside the block', () => {
      if (true) {
        let letX = true;
      }
      assert.throws(() => console.log(letX));
    });
  });

  describe('`let` usage', () => {
    it('`let` use in `for` loops', () => {
      let obj = { x: 1 };
      for (let key in obj) {
        // something done here, not that we need to concerned about
      }
      assert.throws(() => console.log(key));
    });

    it('blocking scope in ES6', () => {
      {
        let letX = true;
      }
      assert.throws(() => console.log(letX));
    });
  });

  describe('the TDZ!', () => {
    it('`var` does give a value', () => {
      assert.equal(varX, undefined);

      var varX = true;
    });

    xit('`let` throws a reference error', () => {
      assert.throws(() => console.log(letX));

      let letX = 2;
    });
  });

  describe('let vs const', () => {
    it('returns a string', () => {
      let constX = 25;
      // modify above expression to remove error and pass the test case.
      constX = 'some string';
      assert.equal(typeof constX, 'string');
    });
  });
});
