const assert = require('assert');
const products = require('./products.json');

describe('Deloitte tasks for FE - CONSULTANTS', () => {
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

    it('should find k\'th smallest number in an array', () => {
        /*
            Task
                Create an array having elements - [21, 432, 645, 1, 87, 546, 39, 19, 30, 106, 23]
                Find out the 5th smallest number
        */
        const sourceArray = [21, 432, 645, 1, 87, 546, 39, 19, 30, 106, 23];
        const computedArray = sourceArray.sort((a, b) => a - b);
        const smallestIndex = 5;
        const foundElement = computedArray[smallestIndex - 1];
        const targetElement = 30;

        assert.strictEqual(foundElement, targetElement);
    });

    it('should find k\'th largest number in an array', () => {
        /*
            Task
                Create an array having elements - [21, 432, 645, 1, 87, 546, 39, 19, 30, 106, 23]
                Find out the 8th largest number
        */
        const sourceArray = [21, 432, 645, 1, 87, 546, 39, 19, 30, 106, 23];
        const computedArray = sourceArray.sort((a, b) => b - a);
        const largestIndex = 8;
        const foundElement = computedArray[largestIndex - 1];
        const targetElement = 23;

        assert.strictEqual(foundElement, targetElement);
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

    it('fix the below snippet to allow insertion an item at the end', () => {
        /*
            Task:
                The goal is to fix the error in the below snippet to allow an item to be inserted at the end.
        */
        const sourceObj = new Map();
        const targetObj = ['Lorem Ipsum', 'Brute dissentiunt'];
        sourceObj.set('name', 'Lorem Ipsum');

        let computedObj = Array.from(sourceObj.values());
        computedObj.push('Brute dissentiunt');

        assert.deepStrictEqual(computedObj, targetObj);
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

    it("should define an anonymous class", () => {
        /*
          Task:
            Create an anonymous class and verify the same
        */
        const classType = typeof (() => { });
        const expectation = "function";
        const computed = classType;
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

            it("should define a method whose name is dynamic or gets computed at the runtime", () => {
                /*
                  Task
                    Create a dynamic method having name 'dynamicMethod'
                    Verify the same
                */
                const methodName = "dynamicMethod";
                class TestFactory {
                    static [methodName]() {
                        return new UnitTest();
                    }
                }
                const computed = TestFactory.dynamicMethod() instanceof UnitTest;

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

    it('should extract a value from array', () => {
        /*
          Task
            Create a destructured array
            Assign a value to it
            Read the assigned value
        */
        const initialValue = 1;
        let [firstValue] = [initialValue];
        const computed = firstValue;
        const expectation = initialValue;
        assert.strictEqual(computed, expectation);
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

    it('should destructure the array using leading commas', () => {
        /*
          Task
            The array destructuring should be done using leading commas
        */
        const initial = ['ax', 'why', 'zet'];
        const [, , last] = initial;

        const computed = last;
        const expectation = initial[initial.length - 1];

        assert.equal(computed, expectation);
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

    it('should create an object and access it value using destructuring', () => {
        /*
          Task
            Create an object having a key 'id'
            Access the assigned value to 'id' to it through destructuring
        */
        const initial = { id: 101 };
        const { id } = initial;

        const computed = id;
        const expectation = initial.id;

        assert.equal(computed, expectation);
    });

    it('should create an object and access it value using destructuring havig different variable names', () => {
        /*
         Task
           Create an object having a couple of keys 'x' and 'y'
           Access the assigned value to 'x' and 'y' using diferent variable names, through destructuring
       */
        const initial = { x: 100, y: 50 };
        const { x: horizontal, y: vertical } = initial;

        const computed1 = horizontal;
        const expectation1 = initial.x;

        const computed2 = vertical;
        const expectation2 = initial.y;

        assert.equal(computed1, expectation1);
        assert.equal(computed2, expectation2);
    });

    it('should create an empty array with destructured being assigned an initial value', () => {
        /*
          Task
            Assign an empty array to a destructured variable with name 'flask'
            The value of the 'flask' should be 100
        */
        const emptyArray = [];
        const initial = 100;
        const [flask = initial] = emptyArray;
        const computed = flask;
        const expectation = initial;

        assert.equal(computed, expectation);
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

        it('for the products based on [S] size', () => {
            let filtered = products.filter(current => current.sizes.indexOf('S') >= 0);
            const computed = filtered.length
            const expectation = 7;

            assert.equal(computed, expectation);
        });
    });

    describe('should convert the input array without affecting the original through transformation using functional programming', () => {
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

    it('should calculate the length of an object', () => {
        /*
            Create an object having properties as "notifications": null, "profile_use_background_image": true, "statuses_count": 31, "profile_background_color": "C0DEED", "followers_count": 3066, "profile_image_url": "http://a2.twimg.com/profile_images/1285770264/PGP_normal.jpg", "listed_count": 6, "profile_background_image_url": "http://a3.twimg.com/a/1301071706/images/themes/theme1/bg.png", "description": "", "screen_name": "PostGradProblem", "default_profile": true, "verified": false, "time_zone": null, "profile_text_color": "333333".
            Calculate the length of the object property
        */
        const sourceObj = {
            "notifications": null,
            "profile_use_background_image": true,
            "statuses_count": 31,
            "profile_background_color": "C0DEED",
            "followers_count": 3066,
            "profile_image_url": "http://a2.twimg.com/profile_images/1285770264/PGP_normal.jpg",
            "listed_count": 6,
            "profile_background_image_url": "http://a3.twimg.com/a/1301071706/images/themes/theme1/bg.png",
            "description": "",
            "screen_name": "PostGradProblem",
            "default_profile": true,
            "verified": false,
            "time_zone": null,
            "profile_text_color": "333333"
        };

        const findLengthOfLength = (inputObj) => {
            let size = 0, key;
            for (key in inputObj) {
                if (inputObj.hasOwnProperty(key)) {
                    size++;
                }
            }
            return size;
        };

        const sourceObjLength = findLengthOfLength(sourceObj);
        assert.strictEqual(sourceObjLength, 14);
    });

    it('should find out all the methods of a Javascript object', () => {
        /*
            Task: to find out all the methods of 'Number'
        */
        const targetArray = ['isFinite', 'isInteger', 'isNaN', 'isSafeInteger', 'parseFloat', 'parseInt'];
        const findAllMethods = (inputObj) => {
            return Object.getOwnPropertyNames(inputObj).filter(property => ((typeof inputObj[property]) === 'function'));
        };
        const computedArray = findAllMethods(Number);

        assert.deepStrictEqual(computedArray, targetArray);
    });

    it('should check whether an object contains any property or not', () => {
        /*
            Task: 
                Create two different objects, one is empty and other one having at-least one property.
                Check the emptiness on these two objects
        */
        const sourceObj1 = {};
        const sourceObj2 = {
            text: 'Lorem ipsum'
        };

        const isEmpty = (inputObj) => {
            let isKey = false;
            for (let key in inputObj) {
                isKey = true;
            }
            return !isKey;
        };

        const computedObj1 = isEmpty(sourceObj1);
        const computedObj2 = isEmpty(sourceObj2);

        assert.strictEqual(computedObj1, true);
        assert.notStrictEqual(computedObj2, true);
    });

    it('fix the issue as per given instructions', () => {
        /*
            Task:
                Create a calculator object having a count variable initialized with 60 
                and three methods viz. increment, decrement and print.
                The below code should print 61.
        */
        let calculator = {
            count: 60,
            increment() {
                this.count++;
                return this;
            },
            decrement() {
                this.count--;
                return this;
            },
            print() {
                return this.count;
            }
        }
        const studentsInClass = calculator.increment().increment().decrement().decrement().increment().print();
        assert.strictEqual(studentsInClass, 61);
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

    it('should convert the source String into CamelCase', () => {
        /*
            Task:
                Define a variable of string type - 'This@string-should#be,converted.to<camel-case>'
                It should convert the string to a camelCase - thisStringShouldBeConvertedToCamelCase
        */
        const sourceString = 'This@string-should#be,converted.to<camel-case>'; // Expected Output: thisStringShouldBeConvertedToCameCase
        const convertToCamelCase = (inputString) => {
            const splitOperator = [' ', '-', '.', ',', '@', '#', '<', '>'];
            let computedString = '';
            splitOperator.forEach((operator, index) => {
                computedString = index == 0 ? sourceString : computedString;
                computedString = splitString(computedString, operator);
            });
            return computedString.charAt(0).toLowerCase() + computedString.slice(1);
        }

        const splitString = (inputString, operator) => {
            const inputStringArray = inputString.split(operator);
            let computedString = '';
            inputStringArray.forEach((input, index) => {
                computedString += modifyCase(input, index);
            });
            return computedString;
        }

        const modifyCase = (inputString, index) => {
            const output = index != 0 ? inputString.charAt(0).toUpperCase() + inputString.slice(1) : inputString;
            return output;
        }

        let computedString = convertToCamelCase(sourceString);
        const targetString = 'thisStringShouldBeConvertedToCamelCase';
        assert.strictEqual(computedString, targetString);
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

    it('should replace all the occurences in a string, in a case insensitive format', () => {
        /*
            Task:
                Define a variable of string type - 'Lorem ipsum dolor sit amet lorem Brute lorem dissentiunt ut sea Lorem harum forensibus lorem necessitatibus'
                Replace all 'lorem' words (case insensitive) with 'hello'
        */
        const sourceString = 'Lorem ipsum dolor sit amet lorem Brute lorem dissentiunt ut sea Lorem harum forensibus lorem necessitatibus';
        const targetString = 'hello ipsum dolor sit amet hello Brute hello dissentiunt ut sea hello harum forensibus hello necessitatibus';
        const computedString = sourceString.replace(/lorem/gi, 'hello');
        assert.strictEqual(computedString, targetString);
    });

    it('should check whether a string is Palindrome or not', () => {
        /*
            Task:
                Define a variable of string type - 'Rotavator'
                Verify whether it is a Palindrome or not
        */
        const sourceString = 'Rotavator';
        let computedString;
        const isPalindrome = (inputString) => {
            inputString = inputString.toLowerCase();
            const len = Math.floor(inputString.length / 2);
            const firstHalf = inputString.substr(0, len);
            const secondHalf = inputString.substr(len + 1).split('').reverse().join('');
            return firstHalf === secondHalf;
        };

        computedString = isPalindrome(sourceString);
        assert.strictEqual(computedString, true);
    });

    it('should print out the time taken by an individual to read a paragraph', () => {
        /* 
            Task
                Assuming an individual reads 200 words per minute. Calculate the time required, in reading the given paragraph;
                Example: If the Input is 'Lorem ipsum', it should print '1 second(s)'

                1. 
                    Define a varibale of string type -  `Lorem ipsum dolor sit amet, ex eam dictas melius laboramus, id vel mazim qualisque posidonium. Pri an brute temporibus appellantur, qui error fierent et, et mei homero nostrud. Latine voluptua maluisset pri ex, ea alienum ancillae assueverit pri, ne mea elitr scripserit referrentur. Brute dissentiunt ut sea, quaeque epicurei lobortis qui an. Ut eum wisi illud omnesque, oporteat accusamus mei in. Ne offendit detraxit repudiandae his. Ex stet ceteros noluisse quo, sit at fierent dissentiet.`;
                    The expected output is '23 second(s)'
                2. 
                    Define a varibale of string type - `Lorem ipsum dolor sit amet, ex eam dictas melius laboramus, id vel mazim qualisque posidonium. Pri an brute temporibus appellantur, qui error fierent et, et mei homero nostrud. Latine voluptua maluisset pri ex, ea alienum ancillae assueverit pri, ne mea elitr scripserit referrentur. Brute dissentiunt ut sea, quaeque epicurei lobortis qui an. Ut eum wisi illud omnesque, oporteat accusamus mei in. Ne offendit detraxit repudiandae his. Ex stet ceteros noluisse quo, sit at fierent dissentiet. Lorem ipsum dolor sit amet, ex eam dictas melius laboramus, id vel mazim qualisque posidonium. Pri an brute temporibus appellantur, qui error fierent et, et mei homero nostrud. Latine voluptua maluisset pri ex, ea alienum ancillae assueverit pri, ne mea elitr scripserit referrentur. Brute dissentiunt ut sea, quaeque epicurei lobortis qui an. Ut eum wisi illud omnesque, oporteat accusamus mei in. Ne offendit detraxit repudiandae his. Ex stet ceteros noluisse quo, sit at fierent dissentiet. Lorem ipsum dolor sit amet, ex eam dictas melius laboramus, id vel mazim qualisque posidonium. Pri an brute temporibus appellantur, qui error fierent et, et mei homero nostrud. Latine voluptua maluisset pri ex, ea alienum ancillae assueverit pri, ne mea elitr scripserit referrentur. Brute dissentiunt ut sea, quaeque epicurei lobortis qui an. Ut eum wisi illud omnesque, oporteat accusamus mei in. Ne offendit detraxit repudiandae his. Ex stet ceteros noluisse quo, sit at fierent dissentiet.`
                    The expected output is '1 min(s)'

        */
        const sourceString1 = `Lorem ipsum dolor sit amet, ex eam dictas melius laboramus, id vel mazim qualisque posidonium. Pri an brute temporibus appellantur, qui error fierent et, et mei homero nostrud. Latine voluptua maluisset pri ex, ea alienum ancillae assueverit pri, ne mea elitr scripserit referrentur. Brute dissentiunt ut sea, quaeque epicurei lobortis qui an. Ut eum wisi illud omnesque, oporteat accusamus mei in. Ne offendit detraxit repudiandae his. Ex stet ceteros noluisse quo, sit at fierent dissentiet.`;
        /* Expected Output: 23 seconds */
        const expedtedOutput1 = '23 second(s)';
        const sourceString2 = `Lorem ipsum dolor sit amet, ex eam dictas melius laboramus, id vel mazim qualisque posidonium. Pri an brute temporibus appellantur, qui error fierent et, et mei homero nostrud. Latine voluptua maluisset pri ex, ea alienum ancillae assueverit pri, ne mea elitr scripserit referrentur. Brute dissentiunt ut sea, quaeque epicurei lobortis qui an. Ut eum wisi illud omnesque, oporteat accusamus mei in. Ne offendit detraxit repudiandae his. Ex stet ceteros noluisse quo, sit at fierent dissentiet. Lorem ipsum dolor sit amet, ex eam dictas melius laboramus, id vel mazim qualisque posidonium. Pri an brute temporibus appellantur, qui error fierent et, et mei homero nostrud. Latine voluptua maluisset pri ex, ea alienum ancillae assueverit pri, ne mea elitr scripserit referrentur. Brute dissentiunt ut sea, quaeque epicurei lobortis qui an. Ut eum wisi illud omnesque, oporteat accusamus mei in. Ne offendit detraxit repudiandae his. Ex stet ceteros noluisse quo, sit at fierent dissentiet. Lorem ipsum dolor sit amet, ex eam dictas melius laboramus, id vel mazim qualisque posidonium. Pri an brute temporibus appellantur, qui error fierent et, et mei homero nostrud. Latine voluptua maluisset pri ex, ea alienum ancillae assueverit pri, ne mea elitr scripserit referrentur. Brute dissentiunt ut sea, quaeque epicurei lobortis qui an. Ut eum wisi illud omnesque, oporteat accusamus mei in. Ne offendit detraxit repudiandae his. Ex stet ceteros noluisse quo, sit at fierent dissentiet.`
        /* Expected Output: 1 min(s) */
        const expedtedOutput2 = '1 min(s)';


        const calculateReadingTime = (inputString) => {
            const averageReadingTime = 200; // Humans read an average of 200 words per minute
            const wordsList = inputString.split(' ').filter(el => el.trim() !== '');
            const timeInMinutes = wordsList.length / averageReadingTime;

            return timeInMinutes < 1
                ? `${Math.round(timeInMinutes * 60)} second(s)`
                : `${Math.round(timeInMinutes)} min(s)`
        }
        const computedTime1 = calculateReadingTime(sourceString1);
        const computedTime2 = calculateReadingTime(sourceString2);
        assert.strictEqual(computedTime1, expedtedOutput1);
        assert.strictEqual(computedTime2, expedtedOutput2);
    });

    it('should convert an input String as per the instructions', () => {
        /*
            Task
                In words that begin with consonant sounds, all letters before the initial vowel are placed at the end of the word sequence. 
                Then, "ay" is added.
                When words begin with consonant clusters (multiple consonants that form one sound), the whole consonants before the vowel is added at the end followed by an "ay".
                In words that begin with vowel sounds, one just adds "ay" to the end.

                Example:
                Input 1: hello
                Output 1: ellohay (ello + h + ay)

                Input 2: umbrella
                Output 2: umbrellaay (umbrella + ay)
                This format is knows as "PIG LATIN".

                1. 
                    Define a variable of string type - 'supersede'
                    The output should be 'upersedesay'
                2. 
                    Define a variable of string type - 'artic'
                    The output should be 'articay'
        */

        const sourceString1 = "supersede";
        const sourceString2 = "artic"
        const pigLatin = word => {
            const vowel = /[aeiou]/i;
            const firstVowelIndex = word.indexOf(word.match(vowel)[0]);
            const startsWithVowel = firstVowelIndex === 0;

            return startsWithVowel
                ? `${word}ay`
                : `${word.slice(firstVowelIndex)}${word.substr(0, firstVowelIndex)}ay`;
        }
        const computedString1 = pigLatin(sourceString1);
        const computedString2 = pigLatin(sourceString2);

        const targetString1 = 'upersedesay';
        const targetString2 = 'articay';

        assert.strictEqual(computedString1, targetString1);
        assert.strictEqual(computedString2, targetString2);
    });

    it('should compute all the permutations of a given string', () => {
        /*
            Task
                Create a string - '0297'
                Make all the possible permutations of it

                Example:
                Input: '123'
                Output: '123', '132', '213', '231', '312', '321' 
        */

        const sourceString = '0297';
        const computedArray = [];
        const targetArray = ['0297', '0279', '0927', '0972', '0729', '0792', '2097', '2079', '2907', '2970', '2709', '2790', '9027', '9072', '9207', '9270', '9702', '9720', '7029', '7092', '7209', '7290', '7902', '7920'];

        const permutation = (perm, word) => {
            if (!word) {
                computedArray.push(perm.concat(word));
            }
            else {
                let wordsList = word.split('');
                wordsList.forEach((item, index) => {
                    permutation(perm + word.charAt(index), word.substring(0, index) + word.substring(index + 1, word.length));
                });
            }
        };

        const doPermutation = (input) => {
            permutation('', input);
        }

        doPermutation(sourceString);

        assert.deepStrictEqual(computedArray, targetArray);
    });

    it('should check whether two strings are Anagrams', () => {
        /*
            Task
                Anagram - a word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
                Example -- 
                Input 1: Bored, Robed
                Output 1: true

                Input 1: Save, Wase
                Output 1: false

                1. Check whether 'triangle' and 'integral' are anagrams or not
        */
        const sourceString1 = 'triangle';
        const sourceString2 = 'integral';

        let computedArr1 = [];
        let computedArr2 = [];

        const sort = (a, b) => {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        };

        computedArr1 = (sourceString1.split('')).sort(sort);
        computedArr2 = (sourceString2.split('')).sort(sort);

        const areArraysEqual = (arr1, arr2) => {
            if (arr1.length !== arr2.length)
                return false;
            for (var i = arr1.length; i--;) {
                if (arr1[i] !== arr2[i])
                    return false;
            }

            return true;
        };

        const isAnagram = areArraysEqual(computedArr1, computedArr2);

        assert.strictEqual(isAnagram, true);
    });

    it('should sort strings in ascending order, on the basis of their lengths and then alphabetically', () => {
        /*
            Task
                Define an array of strings - ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'ex', 'eam', 'dictas', 'melius', 'laboramus']
                The output should be a sorted array of Strings in ascedning order on the basis of their lengths.
                If one or more strings from the list, have the same length, then the sorting should be in alphabetical ascending order.
        */
        const sourceStringList = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'ex', 'eam', 'dictas', 'melius', 'laboramus'];
        const targetStringList = ['ex', 'eam', 'sit', 'amet', 'dolor', 'ipsum', 'lorem', 'dictas', 'melius', 'laboramus'];

        const sortStringByLength = (inputStringList) => {
            let objArray = [];
            inputStringList.forEach((inputString) => {
                objArray.push({
                    'name': inputString,
                    'length': inputString.length
                });
            });
            const listSortedByLength = sortByKey(objArray, 'length');
            const uniqueLengthsList = [...new Set(listSortedByLength.map(item => item.length))];
            let objArraySorted = [];
            uniqueLengthsList.forEach(item => {
                let uniqueLengthsObjArrList;
                uniqueLengthsObjArrList = (listSortedByLength.filter(arrItem => arrItem.length === item));
                uniqueLengthsObjArrList = sortByKey(uniqueLengthsObjArrList, 'name');
                uniqueLengthsObjArrList.forEach(arrItem => {
                    objArraySorted.push(arrItem);
                });
            });
            return objArraySorted.map(arrItem => arrItem.name);
        };

        const sortByKey = (array, key) => {
            return array.sort((a, b) => {
                if (key === 'name') {
                    return a[key].localeCompare(b[key]);
                }
                else {
                    return a[key] - b[key];
                }
            });
        };

        const computedStringList = sortStringByLength(sourceStringList);

        assert.deepStrictEqual(computedStringList, targetStringList);
    });

});