const assert = require("assert");

describe("Class Exercies", () => {
  it("should define a class and verify the same", () => {
    class TestClass { }

    const isClass = typeof (new TestClass());
    const expectation = "object";
    assert.equal(isClass, expectation);
  });

  it("should define a class of type Block scope", () => {
    class Inside { }
    const isBlockScopedClass = typeof Inside;
    const expectation = "function";
    assert.equal(isBlockScopedClass, expectation);
  });

  it("should define a constructor for a class having a parameter", () => {
    /*
      Task:
        Define a constructor having a paramter as 'id' and assign a value to it.
        Assign a value to it
    */
    class User {
      constructor(id) {
        this.id = id;
      }
    }

    const userId = 42;
    const instanceId = (new User(42)).id;
    assert.equal(instanceId, userId);
  });

  it("should define a method for a class", () => {
    /*
      Task:
        Define a method for a class
    */
    class SuperHero {
      canFly() {
        return false;
      }
    }
    // add a method inside the class canFly and pass the test case.
    const batman = new SuperHero();
    const canBatmanFly = batman.canFly();
    const expectation = false;
    assert.equal(canBatmanFly, expectation);
  });

  it("should define an anonymous class", () => {
    /*
      Task:
        Create an anonymous class and verify the same
    */
    const classType = typeof (() => { });
    const expectation = "function";
    assert.equal(classType, expectation);
  });
});

describe("should create a method for a class that all the instances share a common copy", () => {
  describe("for methods", () => {
    class UnitTest { }

    it("should have a method that is being shared among all the instances", () => {
      class TestFactory {
        static makeTest() {
          return new UnitTest();
        }
      }

      const isStaticMethod = TestFactory.makeTest() instanceof UnitTest;

      assert.ok(isStaticMethod);
    });

    it("should define a method whose name can is dynamic or gets computed at the runtime", () => {
      const methodName = "createTest";
      class TestFactory {
        static [methodName]() {
          return new UnitTest();
        }
      }

      const isRunTimeMethod = TestFactory.createTest() instanceof UnitTest;

      assert.ok(isRunTimeMethod);
    });
  });
});

describe("should define a couple of classes that inherits each other", () => {
  it("one class is an instance of other and is an object as well", () => {
    class A { }
    class B extends A { }

    const isInheritsFromSuper = ((new B()) instanceof A);
    const isInheritedAnObject = ((new B()) instanceof Object);

    assert.equal(isInheritsFromSuper, true);
    assert.equal(isInheritedAnObject, true);
  });
});
