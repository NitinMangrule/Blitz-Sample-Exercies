const assert = require('assert');
const products = require('./products.json');

describe('Funtional Programming Exercies', () => {
  describe('should transform from the json list', () => {
    it('the product price gets doubled as a result of inflation', () => {
      /*
        Task
          Read the json list, where a key 'price' is having a value 999 for the first item
          The expected price for this should get doubled
      */
      const expected = 1998;
      // TODO: Solution or Logic goes here

      assert.equal(computed, expected);
    });
  });

  describe('should filter from the json list', () => {
    it('for return products which has less than 30 in stock', () => {
      const expectation = 2;
      // TODO: Solution or Logic goes here

      assert.equal(computed, expectation);
    });

    it('for the products based on [S] size', () => {
      const expectation = 7;
      // TODO: Solution or Logic goes here

      assert.equal(computed, expectation);
    });
  });

  describe('should convert the input array without affecting the original through transformation', () => {
    it('to type `number`', () => {
      /*
        Task
          Reduce an array of numbers to type 'number' 
      */
      const expectation = 'number';
      // TODO: Solution or Logic goes here

      assert.equal(computed, expectation);
    });

    it('to print the price of all products available from the json list', () => {
      /*
        Task
          It should find the sum of all the prices from the json list using 'reduce' method
      */
      const expectation = 34550.3;
      // TODO: Solution or Logic goes here

      assert.equal(computed, expectation);
    });
  });
});