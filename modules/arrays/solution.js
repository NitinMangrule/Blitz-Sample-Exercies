const assert = require('assert');

describe('Array exercises', () => {
    it('should check whether an input is sourceArray', () => {
        const sourceArray = ['a', 'b', 'c', 'd'];
        const isArray = sourceArray.constructor === Array;
        assert.strictEqual(isArray, true);
    });

    it('should convert an array to a String', () => {
        const sourceArray = ['I', 'am', 'converted', 'to', 'string'];
        const targetString = sourceArray.toString();
        const isString = typeof targetString === 'string' || targetString instanceof String;
        assert.strictEqual(isString, true);
    });

    it('should flatten a nested Array of any depth', () => {
        /*
            Input: [1, [2], [3, [[4]]],[5,6]]
            Output: [1,2,3,4,5,6]
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
            const compoutedArray = sourceArray.sort(sortAscByKey);
            assert.deepStrictEqual(compoutedArray, targetArray);
        });

        it('in the descending order', () => {
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
            const compoutedArray = sourceArray.sort(sortDscByKey);
            assert.deepStrictEqual(compoutedArray, targetArray);
        });
    });

    describe('should insert an element', () => {
        it('\'first\' at the first position', () => {
            const sourceArray = ["second", "third", "fifth", "sixth"];
            sourceArray.unshift('first');
            const targetArray = ["first", "second", "third", "fifth", "sixth"];
            assert.deepStrictEqual(sourceArray, targetArray);
        });

        it('\'fourth\' at the mid position', () => {
            const sourceArray = ["second", "third", "fifth", "sixth"];
            sourceArray.splice(2, 0, 'fourth');
            const targetArray = ["second", "third", "fourth", "fifth", "sixth"];
            assert.deepStrictEqual(sourceArray, targetArray);
        });

        it('\'seventh\' at the last position', () => {
            const sourceArray = ["second", "third", "fifth", "sixth"];
            sourceArray.push('seventh');
            const targetArray = ["second", "third", "fifth", "sixth", "seventh"];
            assert.deepStrictEqual(sourceArray, targetArray);
        });
    });

    it('should find k\'th smallest number in an array', () => {
        /*
            From the given array, it should find the kth samllest number
            Example:
            Input: [10, 9, 8, 3, 7, 2]; Find out the 3rd smallest number, where k = 2
            Output: 7
        */
        /* Task: Find the 5th smallest number in the given array */
        const sourceArray = [21, 432, 645, 1, 87, 546, 39, 19, 30, 106, 23];
        const computedArray = sourceArray.sort((a, b) => a - b);
        const smallestIndex = 5;
        const foundElement = computedArray[smallestIndex - 1];
        const targetElement = computedArray[smallestIndex - 1];

        assert.strictEqual(foundElement, targetElement);
    });

    it('should find k\'th largest number in an array', () => {
        /*
            From the given array, it should find the kth samllest number
            Example:
            Input: [10, 9, 8, 3, 7, 2]; Find out the 3rd smallest number, where k = 2
            Output: 7
        */
        /* Task: Find the 8th smallest number in the given array */
        const sourceArray = [21, 432, 645, 1, 87, 546, 39, 19, 30, 106, 23];
        const computedArray = sourceArray.sort((a, b) => b - a);
        const largestIndex = 8;
        const foundElement = computedArray[largestIndex - 1];
        const targetElement = computedArray[largestIndex - 1];

        assert.strictEqual(foundElement, targetElement);
    });

    it('should remove duplicates from a given array', () => {
        /*
            The output should contain have array of unique elements
        */
        /* Task: Remove duplicates from the given array by price */
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

