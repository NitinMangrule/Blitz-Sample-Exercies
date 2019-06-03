const assert = require("assert");

describe("spread exercies", () => {
  describe("spread with arrays", () => {
    it("should extract each array item without using any loop or other array methods", () => {
      /*
        Task
          Create an Array having a couple of items - '1' and '2'
          Retrive these values without making use of any loop or Array methods, using ES6 special feature
      */
      const expectation1 = initial[0];
      const expectation2 = initial[1];
      // TODO: Solution or Logic goes here

      assert.equal(computed1, expectation1);
      assert.equal(computed2, expectation2);
    });

    it("should extract the 2nd and 3rd values in individual variables and all the remaining into a single variable", () => {
      /*
        Task
          Create an array having elements 0,1,2,3,4,5
          Do not use any loop and other Array methods
          Store the first two elements in individual variables 
          Store all the remaining in a single variable using ES6 special feature
      */
      const expectation1 = initial[1];
      const expectation2 = initial[2];
      const expectation3 = initial.slice(3);
      // TODO: Solution or Logic goes here

      assert.equal(computed1, expectation1);
      assert.equal(computed2, expectation2);
      assert.deepStrictEqual(computed3, expectation3);
    });

    it("should get all the elements of an array using ES6 special feature", () => {
      /*
        Task:
          Create an array of elements having values 1, 2, 3, 4, 5
          Get all the elements into a new variable using special ES6 feature
      */
      const expectation = initial;
      // TODO: Solution or Logic goes here

      assert.deepStrictEqual(computed, expectation);
    });

    it("should pass the parameters list to a method using ES6 special feature", () => {
      /*
        Task:
          Create an method having more than two paramerts
          These values should be 1 and 2, store in an array
          While making a function call, these parameters should be get passed using ES6 special feature
      */
      const expectation1 = initial[0];
      const expectation2 = initial[1];
      // TODO: Solution or Logic goes here

      const verify = () => {
        assert.strictEqual(computed1, expectation1);
        assert.strictEqual(computed2, expectation2);
      };

      verify();
    });

    it("should find out the maximum number from a list through ES6 special feature", () => {
      /*
        Task
          Create an array having elements 21, 10, 78, 3
          Find out the maximum number by passing this array using ES6 special feature
          You can use any built-in or custom method to find out the largest element.
      */
      const expectation = 78;
      // TODO: Solution or Logic goes here

      assert.equal(computed, expectation);
    });
  });

  describe("spread with strings", () => {
    it("should retrieve each character of a string using ES6 special feature", () => {
      /*
        Task
          Create a string 'Lorem'
          Retrive each character of a string using ES6 special feature
          Each character should be referred by a uniue variable
      */
      const expectation1 = initial.charAt(0);
      const expectation2 = initial.charAt(1);
      const expectation3 = initial.charAt(2);
      const expectation4 = initial.charAt(3);
      const expectation5 = initial.charAt(4);
      // TODO: Solution or Logic goes here

      assert.equal(computed1, expectation1);
      assert.equal(computed2, expectation2);
      assert.equal(computed3, expectation3);
      assert.equal(computed4, expectation4);
      assert.equal(computed5, expectation5);
    });

    it("should get the length of the Array generated, from the strings using ES6 special feature", () => {
      /*
        Task
          Define a string - 'Lorem'
          Create an array from this string
          The array should contain all the elements of this string, but the total number of elements should be 3
          Hence, the length of the array should be same as that of the string's length.
      */
      const expectation = 5;
      // TODO: Solution or Logic goes here

      assert.strictEqual(computed.length, expectation);
    });

    it("should find out the maximum number from string using ES6 special feature", () => {
      /*
        Task
          Define a string - '43152'
          Pass this string as a parameter either to a built in method or a custom method to find out the largest number.
          This should be done using ES6 special feature
      */
      const expectation = 5;
      // TODO: Solution or Logic goes here

      assert.strictEqual(computed, expectation);
    });
  });
});
