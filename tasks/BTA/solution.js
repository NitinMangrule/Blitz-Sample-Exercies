const assert = require('assert');
const products = require('./products.json');

describe('Deloitte Tasks for FE - BTA', () => {
    it('should check whether an input is an array', () => {
        /*
            Task
                Create an array 
                Check whether the input is a valid array
        */
        const sourceArray = ['a', 'b', 'c', 'd'];
        const isArray = sourceArray.constructor === Array;
        assert.strictEqual(isArray, true);
    });

    it('should convert an array to a String', () => {
        /*
            Task
                Create an array of strings
                Convert this array to a string
                Verify the computed string is a valid string
        */
        const sourceArray = ['I', 'am', 'converted', 'to', 'string'];
        const targetString = sourceArray.toString();
        const isString = typeof targetString === 'string' || targetString instanceof String;
        assert.strictEqual(isString, true);
    });

    describe('should sort an array of Strings', () => {
        /*
            Task
                Define an array of strings - ['the', 'target', 'array', 'of', 'strings', 'should', 'be', 'sorted', 'in', 'ascending', 'order']
                The final output should be a sorted in an asceding order
        */
        it('in the ascending order', () => {
            const sourceArray = ['the', 'target', 'array', 'of', 'strings', 'should', 'be', 'sorted', 'in', 'ascending', 'order'];
            const sortAscByKey = (x, y) => {
                if (x < y) {
                    return -1;
                } else if (x > y) {
                    return 1;
                } else if (x == y) {
                    return 0;
                }
            }
            const targetArray = ["array", "ascending", "be", "in", "of", "order", "should", "sorted", "strings", "target", "the"];
            const computedArray = sourceArray.sort(sortAscByKey);
            assert.deepStrictEqual(computedArray, targetArray);
        });

        it('in the descending order', () => {
            /*
                Task
                    Define an array of strings - ['the', 'target', 'array', 'of', 'strings', 'should', 'be', 'sorted', 'in', 'descending', 'order']
                    The final output should be a sorted in an asceding order
            */
            const sourceArray = ['the', 'target', 'array', 'of', 'strings', 'should', 'be', 'sorted', 'in', 'descending', 'order'];
            const sortDscByKey = (x, y) => {
                if (x < y) {
                    return 1;
                } else if (x > y) {
                    return -1;
                } else if (x == y) {
                    return 0;
                }
            }
            const targetArray = ["the", "target", "strings", "sorted", "should", "order", "of", "in", "descending", "be", "array"];
            const computedArray = sourceArray.sort(sortDscByKey);
            assert.deepStrictEqual(computedArray, targetArray);
        });
    });

    describe('should insert an element', () => {
        it('\'first\' at the first position', () => {
            /*
                Task
                    Define an array having elements - ["second", "third", "fifth", "sixth"]
                    Add an element 'first' as the first element
            */
            const sourceArray = ["second", "third", "fifth", "sixth"];
            sourceArray.unshift('first');
            const targetArray = ["first", "second", "third", "fifth", "sixth"];
            assert.deepStrictEqual(sourceArray, targetArray);
        });

        it('\'fourth\' at the mid position', () => {
            /*
                Task
                    Define an array having elements - ["second", "third", "fifth", "sixth"]
                    Add an element 'fourth' at the mid position
            */
            const sourceArray = ["second", "third", "fifth", "sixth"];
            sourceArray.splice(2, 0, 'fourth');
            const targetArray = ["second", "third", "fourth", "fifth", "sixth"];
            assert.deepStrictEqual(sourceArray, targetArray);
        });

        it('\'seventh\' at the last position', () => {
            /*
                Task
                    Define an array having elements - ["second", "third", "fifth", "sixth"]
                    Add an element 'seventh' at the last position
            */
            const sourceArray = ["second", "third", "fifth", "sixth"];
            sourceArray.push('seventh');
            const targetArray = ["second", "third", "fifth", "sixth", "seventh"];
            assert.deepStrictEqual(sourceArray, targetArray);
        });
    });

    it('should remove duplicates from a given array', () => {
        /*
            Task
                Create an array of objects - [{ 'name': 'abc', 'price': 100 }, { 'name': 'def', 'price': 200 }, { 'name': 'pqr', 'price': 400 }, { 'name': 'xyz', 'price': 100 }, { 'name': 'lmn', 'price': 200 }, { 'name': 'ghi', 'price': 300 }, { 'name': 'jkl', 'price': 200 }, { 'name': 'uvw', 'price': 100 }, { 'name': 'rst', 'price': 100 }]
                The output should contain have array of unique elements of key 'price'
        */
        const sourceArray = [
            {
                'name': 'abc',
                'price': 100
            },
            {
                'name': 'def',
                'price': 200
            },
            {
                'name': 'pqr',
                'price': 400
            },
            {
                'name': 'xyz',
                'price': 100
            },
            {
                'name': 'lmn',
                'price': 200
            },
            {
                'name': 'ghi',
                'price': 300
            },
            {
                'name': 'jkl',
                'price': 200
            },
            {
                'name': 'uvw',
                'price': 100
            },
            {
                'name': 'rst',
                'price': 100
            }
        ];
        const targetArray = [100, 200, 400, 300];
        const computedArray = Array.from(new Set(sourceArray.map((arr) => arr.price)));

        assert.deepStrictEqual(computedArray, targetArray);
    });

    it('should define an arrow method that logs whether the input is odd/even and returns the same', () => {
        /*
          Task
              Create an arrow method to test the conditions both for true and false conditons.
        */
        const func = (num) => {
            const numType = num % 2 === 0 ? 'even' : 'odd';
            return numType;
        }
        const computed1 = func(4);
        const computed2 = func(1235);
        const expected1 = 'even';
        const expected2 = 'odd';

        assert.equal(computed1, expected1);
        assert.equal(computed2, expected2);
    });

    it('should define an arrow method that logs whether an input is odd or even, without parenthesis', () => {
        /*
          Task
              Create an arrow method to test the conditions both for true and false conditons.
        */
        const func = num => {
            const numType = num % 2 === 0 ? 'even' : 'odd';
            return numType;
        }
        const computed1 = func(4);
        const computed2 = func(1235);
        const expected1 = 'even';
        const expected2 = 'odd';

        assert.equal(computed1, expected1);
        assert.equal(computed2, expected2);
    });

    it('should define an arrow method that returns true if the multiplication of the 2 inputs is even', () => {
        /*
          Task
              Create an arrow method to test the conditions both for true and false conditons.
        */
        const func = (num1, num2) => {
            return (num1 * num2) % 2 === 0
        }
        const computed1 = func(34, 23);
        const computed2 = func(53, 21);
        const expected1 = true;
        const expected2 = false;

        assert.equal(computed1, expected1);
        assert.equal(computed2, expected2);
    });

    it('should define a method with implicit return, that does not have curly braces', () => {
        /*
          Task
            1. Write a method that returns the input (4) multiplied by 2, without curly braces
            2. Write a method that returns an object {id: 123}
        */

        const func1 = num1 => num1 * 2
        const computed1 = func1(4);
        const expected1 = 8;
        assert.deepEqual(computed1, expected1);

        const func2 = _ => ({ id: 123 })
        const computed2 = func2().hasOwnProperty('id');
        const expected2 = true;
        assert.deepEqual(computed2, expected2);
    });

    it("should define a class and verify the same", () => {
        /*
          Task
            Create a class 
            Verify the class is a valid one
        */
        class TestClass { }
        const isClass = typeof (new TestClass());
        const expectation = "object";

        assert.equal(isClass, expectation);
    });

    it("should define a class of type Block scope", () => {
        /*
          Task
            Create a class 
            The class should have block scope
        */
        class Inside { }
        const computed = typeof Inside;
        const expectation = "function";
        assert.equal(computed, expectation);
    });

    it("should define a constructor for a class having a parameter", () => {
        /*
          Task:
            Define a constructor of a class 'User' having a paramter as 'id' and assign a value - '42' to it.
        */
        class User {
            constructor(id) {
                this.id = id;
            }
        }
        const initial = 42;
        const computed = (new User(initial)).id;
        const expectation = initial;

        assert.equal(computed, expectation);
    });

    it("should define a method for a class", () => {
        /*
          Task:
            Create a class 'SuperHero'
            Create a method 'canFly()'
            Verify the method
        */
        class SuperHero {
            canFly() {
                return false;
            }
        }
        const batman = new SuperHero();
        const computed = batman.canFly();
        const expectation = false;
        assert.equal(computed, expectation);
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
                class TestFactory {
                    static makeTest() {
                        return new UnitTest();
                    }
                }
                const computed = TestFactory.makeTest() instanceof UnitTest;

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
            class A { }
            class B extends A { }

            const computed1 = ((new B()) instanceof A);
            const computed2 = ((new B()) instanceof Object);

            assert.equal(computed1, true);
            assert.equal(computed2, true);
        });
    });

    describe('should define a default parametrized method to make is more flexible', () => {
        it('should have a default param', () => {
            /*
              Task
                Define a variable using ES6 special method, having an unassigned value
                Execute the same
                Verify the return value
            */
            let number = int => int;
            const computed = number();
            const expectation = undefined;
            assert.strictEqual(computed, expectation);
        });
    });

    it('should swap the two variables', () => {
        /*
          Task
            Swap the two variables using destructured arrays
        */
        const firstInitial = 1;
        const secondInitial = 3;
        let first = firstInitial;
        let second = secondInitial;
        [first, second] = [second, first];
        const computed1 = first;
        const computed2 = second;
        const expectation1 = secondInitial;
        const expectation2 = firstInitial;

        assert.equal(computed1, expectation1);
        assert.equal(computed2, expectation2);
    });

    it('should destructure every character of a string', () => {
        /*
          Task
            Create a string
            Convert the string to an array using destructuring
        */
        let first, second, third;
        const initial = 'CAR';
        [first, second, third] = initial;
        const computed = [first, second, third];
        const expectation = ['C', 'A', 'R'];
        assert.deepEqual(computed, expectation);
    });

    describe('should transform from the json list using functional programming', () => {
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

    describe('should filter from the json list using functional programming', () => {
        it('for return products which has less than 30 in stock', () => {
            let filtered = products.filter(current => current.inStock < 30);
            const computed = filtered.length
            const expectation = 2;

            assert.equal(computed, expectation);
        });

    });

    describe('should convert the input array without affecting the original through transformation using functional programming', () => {
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

    it('should create an object as per instructions and delete a property', () => {
        /*
            Create an object having properties as 'name': 'Lorem Ipusm', 'experience': '8 years', 'skills': ['Javascript', 'HTML', 'CSS', 'Angular', 'React'], 'expectedCTC': '40 lpa'.
            Then delete the field 'expectedCTC'
        */
        const sourceObj = {
            'name': 'Lorem Ipusm',
            'experience': '8 years',
            'skills': ['Javascript', 'HTML', 'CSS', 'Angular', 'React'],
            'expectedCTC': '40 lpa'
        };
        const computedObj = new Object(sourceObj);
        delete computedObj.expectedCTC;
        const isValidKeys = computedObj.hasOwnProperty('name') && computedObj.hasOwnProperty('experience') && computedObj.hasOwnProperty('skills') && !computedObj.hasOwnProperty('expectedCTC');
        assert.strictEqual(isValidKeys, true);
    });

    it('fix the issue in the snippet below to produce correct output', () => {
        /*
            Task:
                Fix the issue in the below snippet, so that the varibale isEqual is evaluated to 'true'
        */
        let commonObj = {};
        const method1 = () => {
            return commonObj;
        };
        const method2 = () => {
            return commonObj;
        };
        let variable1 = new method1;
        let variable2 = new method2;

        const isEqual = variable1 == variable2;

        assert.strictEqual(isEqual, true);
    });

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

    it('should convert a string into an array of individual alphabets', () => {
        /*
           Task:
               Define a variable of string type - 'Lorem ipsum dolor sit amet'
               The output should be an array of individual characters - ['L', 'o', 'r', 'e', 'm', 'i', 'p', 's', 'u', 'm', 'd', 'o', 'l', 'o', 'r', 's', 'i', 't', 'a', 'm', 'e', 't'];
       */
        const sourceString = 'Lorem ipsum dolor sit amet'; // Expected Output: ['L', 'o', 'r', 'e', 'm', 'i', 'p', 's', 'u', 'm', 'd', 'o', 'l', 'o', 'r', 's', 'i', 't', 'a', 'm', 'e', 't']
        const targetString = ['L', 'o', 'r', 'e', 'm', 'i', 'p', 's', 'u', 'm', 'd', 'o', 'l', 'o', 'r', 's', 'i', 't', 'a', 'm', 'e', 't'];
        let computedString = [];
        const convertStringToArray = (inputString) => {
            const computedStr = [];
            inputString = (inputString.split(' ').join(''));
            const len = Array.apply(null, Array(inputString.length));
            len.forEach((input, index) => {
                computedStr.push(inputString.charAt(index));
            });
            return computedStr;
        };
        computedString = convertStringToArray(sourceString);
        assert.deepStrictEqual(computedString, targetString);
    });
});
