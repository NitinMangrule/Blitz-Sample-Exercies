const assert = require('assert');

describe('class creation', () => {
  it('is as simple as `class XXX {}`', function() {
    let TestClass;
    // replace the above with a class definition.
    const instance = new TestClass();
    assert.equal(typeof instance, 'object');
  });

  it('class is block scoped', () => {
    {
      class Inside {}
    }
    // place the class defn inside a block to pass this!
    assert.equal(typeof Inside, 'object');
  });

  it('the `constructor` method', function() {
    class User {
      constructor(id) {}
    }
    // modify the constructor to pass the test case.
    const user = new User(42);
    assert.equal(user.id, 42);
  });

  it('defining a method is simple', function() {
    class SuperHero {}
    // add a method inside the class canFly and pass the test case.
    const batman = new SuperHero();
    assert.equal(batman.canFly(), false);
  });

  it('anonymous class', () => {
    const classType = typeof {};
    assert.equal(classType, 'function');
  });
});

describe('inside a class you can use the `static` keyword', () => {
  describe('for methods', () => {
    class UnitTest {}

    it('should have a `static` method', () => {
      class TestFactory {
        makeTest() {
          return new UnitTest();
        }
      }
      // pass this test case.
      assert.ok(TestFactory.makeTest() instanceof UnitTest);
    });

    it('the method name can be dynamic/computed at runtime', () => {
      const methodName = 'makeTest';
      class TestFactory {
        static [methodName]() {
          return new UnitTest();
        }
      }
      // pass this test case.
      assert.ok(TestFactory.createTest() instanceof UnitTest);
    });
  });
});

describe('classes can inherit from another', () => {
  describe('the default super class is Object', () => {

    it('B is an instance of A, B is also instance of Object', () => {
      class A {}
      class B {}
      // pass this test case.
      assert.equal(new B() instanceof A, true);
      assert.equal(new B() instanceof Object, true);
    });
  });
});
