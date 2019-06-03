const assert = require("assert");

describe("Class Exercies", () => {
  it("should define a class and verify the same", () => {
    /*
      Task
        Create a class 
        Verify the class is a valid one
    */
    const expectation = "object";
    // TODO: Solution or Logic goes here

    assert.equal(isClass, expectation);
  });

  it("should define a class of type Block scope", () => {
    /*
      Task
        Create a class 
        The class should have block scope
    */
    const expectation = "function";
    // TODO: Solution or Logic goes here

    assert.equal(computed, expectation);
  });

  it("should define a constructor for a class having a parameter", () => {
    /*
      Task:
        Define a constructor of a class 'User' having a paramter as 'id' and assign a value - '42' to it.
        Verify the same
    */
    const initial = 42;
    const expectation = initial;
    // TODO: Solution or Logic goes here

    assert.equal(computed, expectation);
  });

  it("should define a method for a class", () => {
    /*
      Task:
        Create a class 'SuperHero'
        Create a method 'canFly()'
        Verify the method execution
    */
    const expectation = false;
    // TODO: Solution or Logic goes here

    assert.equal(computed, expectation);
  });

  it("should define an anonymous class", () => {
    /*
      Task:
        Create an anonymous class and verify the same
    */
    const expectation = "function";
    // TODO: Solution or Logic goes here

    assert.equal(computed, expectation);
  });
});

describe("should create a method for a class that all the instances share a common copy", () => {
  describe("for methods", () => {
    class UnitTest { }

    it("should have a method that is being shared among all the instances", () => {
      /*
        Task
          Create a class 'TestFactory'
          Make a reusable method inside it
          Verify the same
      */
      // TODO: Solution or Logic goes here

      assert.strictEqual(computed, true);
    });

    it("should define a method whose name is dynamic or gets computed at the runtime", () => {
      /*
        Task
          Create a dynamic method having name 'dynamicMethod'
          Verify the same
      */
      // TODO: Solution or Logic goes here

      assert.strictEqual(computed, true);
    });
  });
});

describe("should define a couple of classes that inherits each other", () => {
  it("one class is an instance of other and is an object as well", () => {
    /*
      Task
        Create two class A and B
        Make sure B inherits from A
        Verify that B inherits from A as well is an existing object too
    */
    // TODO: Solution or Logic goes here

    assert.equal(computed1, true);
    assert.equal(computed2, true);
  });
});
