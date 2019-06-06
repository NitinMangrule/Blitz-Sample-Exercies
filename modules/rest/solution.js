const assert = require('assert');

describe('Rest Exercies', () => {
  describe('rest in function params', () => {
    it('should return all parameters of the method without explicitly executing them', () => {
      /*
        Task
          Make use of parameterized functional programming
          Pass a couple of values (1, 2) to it
          Return all the values without explicitly executing the same through the variable names
          Check for all of the list values equality without using the parameters' varibales names
      */
      const firstInitial = 1;
      const secondInitial = 2;
      const expectation = [firstInitial, secondInitial];

      const fn = (...rest) => {
        return rest;
      };

      const computed = fn(firstInitial, secondInitial);
      assert.deepEqual(computed, expectation);
    });

    it('should return the last two parameters of the function without explicitly executing them', () => {
      /*
        Task
          Make use of parameterized functional programming having three parameters
          Execute this method by passing 4 parameters => null, 2, 3, 4
          The expectation is to return the last 2 elements of the method, i.e. 3 and 4
      */
      const initial = [null, 2, 3, 4];
      const expectation = [initial[initial.length - 2], initial[initial.length - 1]];
      const fn = (firstParam, secondParam, ...rest) => {
        return (rest);
      };
      const computed = fn(initial[0], initial[1], initial[2], initial[3]);
      assert.deepEqual(computed, expectation);
    });

    it('should return all the parameters of a method without explicitly executing their variable names', () => {
      /*
        Task
          Execute a method with these parameters -> 42, 'twenty three', 'win'
          The method should return these without explicitly executing their variable names
      */
      const initial = [42, 'twenty three', 'win'];
      const fn = (...args) => {
        return (args);
      };
      const computed = fn(initial[0], initial[1], initial[2]);
      const expectation = initial;
      assert.deepEqual(computed, expectation);
    });

    it('should return all the parameters of a method without explicitly executing their variable names without using paranthesis', () => {
      /*
        Task
          Make use of Funtional programming
          The method should get executed having three parameters -> 1,2,3
          The method's signature should return all these parameters without using the variable names
          Retrieve the last two elements without using their vaibale names
      */
      const initial = [1, 2, 3];
      const fn = (...args) => args;
      const [firstArg, ...rest] = fn(initial[0], initial[1], initial[2]);
      const computed = rest;
      const expectation = [initial[initial.length - 2], initial[initial.length - 1]];
      assert.deepEqual(computed, expectation);
    });
  });

  describe('rest with destructuring', () => {
    it('should refer all the elements of an array through destructuring', () => {
      /*
        Task
          Create an array of 4 elements -> 1,2,3,4
          Return them in a single variable through destructuring
      */
      const initial = [1, 2, 3, 4]
      const [...all] = initial;
      const computed = all;
      const expectation = initial;
      assert.deepEqual(computed, expectation);
    });

    it('should return all the elemnents of an array except the first through destructuring', () => {
      /*
        Task
          Create an array of 4 elements -> 1,2,3,4
          Return the last three elements through destructuring
      */
      const initial = [1, 2, 3, 4];
      const initialClone = [1, 2, 3, 4];

      const [, ...all] = initial;
      const computed = all;
      const beforeExpectation = initialClone.shift();
      const expectation = initialClone;
      assert.deepEqual(computed, expectation);
    });

    it('should concat the two arrays without using the concat()', () => {
      /*
        Task
          Create an array of 2 elements -> 3,4
          Concat them with different array having 1, 2 as the first and second elements respectively
          Concatanation should be done using any of the Array built in methods
      */
      const firstInitial = [3, 4];
      const secondInitial = [1, 2];
      const secondInitialClone = [1, 2];
      const theEnd = firstInitial;
      const computed = [secondInitialClone.shift(), secondInitialClone.shift(), ...theEnd];
      const expectation = secondInitial.concat(firstInitial);
      assert.deepEqual(computed, expectation);
    });

    it('should return a Date from an array without using their elements explicitly', () => {
      /*
        Task
          Create a date in an array with elements 2015, 1, 1
          The Date method should take this as an input, without using the array elements explicitly
      */
      const initial = [2015, 1, 1]
      const theDate = initial;
      const computed = new Date(...theDate);
      const expectation = new Date(initial[0], initial[1], initial[2]);
      assert.deepEqual(computed, expectation);
    });
  });
});
