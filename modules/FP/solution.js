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

      let transformed = products.map(current => {
        current.price = current.price * 2;
        return current;
      });

      const computed = transformed[0].price;

      assert.equal(computed, expected);
    });
  });

  describe('should filter from the json list', () => {
    it('for return products which has less than 30 in stock', () => {
      let filtered = products.filter(current => current.inStock < 30);
      const computed = filtered.length
      const expectation = 2;

      assert.equal(computed, expectation);
    });

    it('for the products based on [S] size', () => {
      let filtered = products.filter(current => current.sizes.indexOf('S') >= 0);
      const computed = filtered.length
      const expectation = 7;

      assert.equal(computed, expectation);
    });
  });

  describe('should convert the input array without affecting the original through transformation', () => {
    it('to type `number`', () => {
      /*
        Task
          Reduce an array of numbers to type 'number' 
      */
      let reduced = [2, 3, 4].reduce((acc, current) => acc + current, 0);
      const computed = typeof reduced;
      const expectation = 'number';

      assert.equal(computed, expectation);
    });

    it('to print the price of all products available from the json list', () => {
      /*
        Task
          It should find the sum of all the prices from the json list using 'reduce' method
      */
      let sum = products.reduce((acc, current) => acc + current.price, 0);
      const computed = sum;
      const expectation = 34550.3;

      assert.equal(computed, expectation);
    });
  });
});