const assert = require("assert");

describe("Class Exercies", () => {
  it("should define a class and verify the same", () => {
    // TODO: Solution or Logic goes here
    const expectation = "object";
    assert.equal(isClass, expectation);
  });

  it("should define a class of type Block scope", () => {
    // TODO: Solution or Logic goes here
    const expectation = "function";
    assert.equal(isBlockScopedClass, expectation);
  });

  it("should define a constructor for a class having a parameter", () => {
    /*
      Task:
        Define a constructor having a paramter as 'id' and assign a value to it.
        Assign a value to it
    */
    // TODO: Solution or Logic goes here
    assert.equal(instanceId, userId);
  });

  it("should define a method for a class", () => {
    /*
      Task:
        Define a method for a class
    */
    // TODO: Solution or Logic goes here
    const expectation = false;
    assert.equal(canBatmanFly, expectation);
  });

  it("should define an anonymous class", () => {
    /*
      Task:
        Create an anonymous class and verify the same
    */
    // TODO: Solution or Logic goes here
    const expectation = "function";
    assert.equal(classType, expectation);
  });
});

describe("should create a method for a class that all the instances share a common copy", () => {
  describe("for methods", () => {
    class UnitTest { }

    it("should have a method that is being shared among all the instances", () => {
      // TODO: Solution or Logic goes here

      assert.ok(isStaticMethod);
    });

    it("should define a method whose name can is dynamic or gets computed at the runtime", () => {
      // TODO: Solution or Logic goes here
      assert.ok(isRunTimeMethod);
    });
  });
});

describe("should define a couple of classes that inherits each other", () => {
  it("one class is an instance of other and is an object as well", () => {
    // TODO: Solution or Logic goes here

    assert.equal(isInheritsFromSuper, true);
    assert.equal(isInheritedAnObject, true);
  });
});
