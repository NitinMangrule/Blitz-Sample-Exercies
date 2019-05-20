const assert = require('assert');

describe('Array exercises', () => {
    it('should check whether an input is sourceArray', () => {
        const sourceArray = ['a', 'b', 'c', 'd'];
        // const isArray = sourceArray instanceof Array;
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
});

