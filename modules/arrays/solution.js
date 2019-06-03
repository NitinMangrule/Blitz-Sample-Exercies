const assert = require('assert');

describe('Array exercises', () => {
    it('should check whether an input is sourceArray', () => {
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

    it('should flatten a nested Array of any depth', () => {
        /*
            Task
                Create an input of nested arrays - [8, [3], [0, [[2]]], [4, 7]]
                Convert this into a flat array - [8, 3, 0, 2, 4, 7]
         */
        const computedArray = [];
        const arrayFlat = (srcArray) => {
            srcArray.forEach((input) => {
                if (input.constructor === Array) {
                    arrayFlat(input);
                } else {
                    computedArray.push(input);
                }
            });
        }
        const sourceArray = [8, [3], [0, [[2]]], [4, 7]];
        arrayFlat(sourceArray);
        const targetArray = [8, 3, 0, 2, 4, 7];
        assert.deepStrictEqual(computedArray, targetArray);
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
});

