const assert = require('assert');

describe('Array exercises', () => {
    it('should check whether an input is sourceArray', () => {
        const sourceArray = ['a', 'b', 'c', 'd'];
        // TODO: Solution or Logic goes here
        assert.strictEqual(isArray, true);
    });

    it('should convert an array to a String', () => {
        const sourceArray = ['I', 'am', 'converted', 'to', 'string'];
        // TODO: Solution or Logic goes here
        assert.strictEqual(isString, true);
    });

    it('should flatten a nested Array of any depth', () => {
        /*
            Input: [1, [2], [3, [[4]]],[5,6]]
            Output: [1,2,3,4,5,6]
         */
        const sourceArray = [8, [3], [0, [[2]]], [4, 7]];
        const targetArray = [8, 3, 0, 2, 4, 7];
        // TODO: Solution or Logic goes here
        assert.deepStrictEqual(computedArray, targetArray);
    });

    describe('should sort an array of Strings', () => {
        it('in the ascending order', () => {
            const sourceArray = ['the', 'target', 'array', 'of', 'strings', 'should', 'be', 'sorted', 'in', 'ascending', 'order'];
            const targetArray = ["array", "ascending", "be", "in", "of", "order", "should", "sorted", "strings", "target", "the"];
            // TODO: Solution or Logic goes here
            assert.deepStrictEqual(compoutedArray, targetArray);
        });

        it('in the descending order', () => {
            const sourceArray = ['the', 'target', 'array', 'of', 'strings', 'should', 'be', 'sorted', 'in', 'descending', 'order'];
            const targetArray = ["the", "target", "strings", "sorted", "should", "order", "of", "in", "descending", "be", "array"];
            // TODO: Solution or Logic goes here
            assert.deepStrictEqual(compoutedArray, targetArray);
        });
    });

    describe('should insert an element', () => {
        it('\'first\' at the first position', () => {
            const sourceArray = ["second", "third", "fifth", "sixth"];
            const targetArray = ["first", "second", "third", "fifth", "sixth"];
            // TODO: Solution or Logic goes here
            assert.deepStrictEqual(sourceArray, targetArray);
        });

        it('\'fourth\' at the mid position', () => {
            const sourceArray = ["second", "third", "fifth", "sixth"];
            const targetArray = ["second", "third", "fourth", "fifth", "sixth"];
            // TODO: Solution or Logic goes here
            assert.deepStrictEqual(sourceArray, targetArray);
        });

        it('\'seventh\' at the last position', () => {
            const sourceArray = ["second", "third", "fifth", "sixth"];
            const targetArray = ["second", "third", "fifth", "sixth", "seventh"];
            // TODO: Solution or Logic goes here
            assert.deepStrictEqual(sourceArray, targetArray);
        });
    });

    it('should find k\'th smallest number in an array', () => {
        /*
            From the given array, it should find the k'th samllest number
            Example:
            Input: [10, 9, 8, 3, 7, 2]; Find out the 3rd smallest number, where k = 2
            Output: 7
        */
        /* Task: Find the 5th smallest number in the given array */
        const sourceArray = [21, 432, 645, 1, 87, 546, 39, 19, 30, 106, 23];
        const targetElement = 30;
        // TODO: Solution or Logic goes here

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
        const targetElement = 23;
        // TODO: Solution or Logic goes here

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
        // TODO: Solution or Logic goes here

        assert.deepStrictEqual(computedArray, targetArray);
    });
});

