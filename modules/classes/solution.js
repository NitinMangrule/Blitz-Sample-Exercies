const assert = require("assert");

describe("class creation", () => {
  it("is as simple as `class XXX {}`", function() {
    class TestClass {}

    const instance = new TestClass();
    assert.equal(typeof instance, "object");
  });

  it("class is block scoped", () => {
    class Inside {}
    assert.equal(typeof Inside, "function");
  });

  it("special method is `constructor`", function() {
    class User {
      constructor(id) {
        this.id = id;
      }
    }

    const user = new User(42);
    assert.equal(user.id, 42);
  });

  it("defining a method is simple", function () {
    class SuperHero {
      canFly() {
        return false;
      }
    }
    // add a method inside the class canFly and pass the test case.
    const batman = new SuperHero();
    assert.equal(batman.canFly(), false);
  });

  it("anonymous class", () => {
    const classType = typeof (() => {});
    assert.equal(classType, "function");
  });
});

describe("inside a class you can use the `static` keyword", () => {
  describe("for methods", () => {
    class UnitTest {}

    it("should have a `static` method", () => {
      class TestFactory {
        static makeTest() {
          return new UnitTest();
        }
      }

      assert.ok(TestFactory.makeTest() instanceof UnitTest);
    });

    it("the method name can be dynamic/computed at runtime", () => {
      const methodName = "createTest";
      class TestFactory {
        static [methodName]() {
          return new UnitTest();
        }
      }

      assert.ok(TestFactory.createTest() instanceof UnitTest);
    });
  });
});

describe("classes can inherit from another", () => {
  describe("the default super class is Object", () => {
    it("B is an instance of A, B is also instance of Object", () => {
      class A {}
      class B extends A {}

      assert.equal(new B() instanceof A, true);
      assert.equal(new B() instanceof Object, true);
    });
  });
});
