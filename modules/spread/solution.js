const assert = require("assert");

describe("spread exercies", () => {
  describe("spread with arrays", () => {
    it("should extract each array item without using any loop or other array methods", () => {
      /*
        Task
          Create an Array having a couple of items - '1' and '2'
          Retrive these values without making use of any loop or Array methods, using ES6 special feature
      */
      const initial = [1, 2];
      const expectation1 = initial[0];
      const expectation2 = initial[1];
      const [firstlelement, secondElement] = [...initial];

      const computed1 = firstlelement;
      const computed2 = secondElement;

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
      const initial = [0, 1, 2, 3, 4, 5];
      const [, second, third, ...rest] = [...initial];

      const computed1 = second;
      const computed2 = third;
      const computed3 = rest;

      const expectation1 = initial[1];
      const expectation2 = initial[2];
      const expectation3 = initial.slice(3);

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
      const initial = [1, 2, 3, 4, 5];
      const [...rest] = [...initial];
      const computed = rest;
      const expectation = initial;
      assert.deepStrictEqual(computed, expectation);
    });

    it("should pass the parameters list to a method using ES6 special feature", () => {
      /*
        Task:
          Create an method having more than two paramerts
          These values should be 1 and 2, store in an array
          While making a function call, these parameters should be get passed using ES6 special feature
      */
      const initial = [1, 2];
      let computed1, computed2;

      const fn = (first, second) => {
        computed1 = first;
        computed2 = second;
      };

      fn(...initial);

      const expectation1 = initial[0];
      const expectation2 = initial[1];

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
      const initial = [21, 10, 78, 3];
      const computed = Math.max(...initial);
      const expected = 78;
      assert.equal(computed, expected);
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
      const initial = 'Lorem';
      const [first, second, third, fourth, fifth] = [...initial];
      const computed1 = first;
      const computed2 = second;
      const computed3 = third;
      const computed4 = fourth;
      const computed5 = fifth;

      const expectation1 = initial.charAt(0);
      const expectation2 = initial.charAt(1);
      const expectation3 = initial.charAt(2);
      const expectation4 = initial.charAt(3);
      const expectation5 = initial.charAt(4);

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
      const initial = 'Lorem';
      const computed = [initial.charAt(0), ...initial.substr(1, 3), initial.charAt(initial.length - 1)];
      const expectation = 5;
      assert.strictEqual(computed.length, expectation);
    });

    it("should find out the maximum number from string using ES6 special feature", () => {
      /*
        Task
          Define a string - '43152'
          Pass this string as a parameter either to a built in method or a custom method to find out the largest number.
          This should be done using ES6 special feature
      */
      const initial = '12345';
      const computed = Math.max(...initial);
      const expectation = 5;
      assert.strictEqual(computed, expectation);
    });
  });
});
