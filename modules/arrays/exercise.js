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
        // TODO: Solution or Logic goes here
        assert.deepStrictEqual(computedArray, targetArray);
    });

    describe('should sort an array of Strings', () => {
        it('in the ascending order', () => {
            const sourceArray = ['the', 'target', 'array', 'of', 'strings', 'should', 'be', 'sorted', 'in', 'ascending', 'order'];
            // TODO: Solution or Logic goes here
            assert.deepStrictEqual(compoutedArray, targetArray);
        });

        it('in the descending order', () => {
            const sourceArray = ['the', 'target', 'array', 'of', 'strings', 'should', 'be', 'sorted', 'in', 'descending', 'order'];
            // TODO: Solution or Logic goes here
            assert.deepStrictEqual(compoutedArray, targetArray);
        });
    });

    describe('should insert an element', () => {
        it('\'first\' at the first position', () => {
            const sourceArray = ["second", "third", "fifth", "sixth"];
            // TODO: Solution or Logic goes here
            assert.deepStrictEqual(sourceArray, targetArray);
        });

        it('\'fourth\' at the mid position', () => {
            const sourceArray = ["second", "third", "fifth", "sixth"];
            // TODO: Solution or Logic goes here
            assert.deepStrictEqual(sourceArray, targetArray);
        });

        it('\'seventh\' at the last position', () => {
            const sourceArray = ["second", "third", "fifth", "sixth"];
           // TODO: Solution or Logic goes here
            assert.deepStrictEqual(sourceArray, targetArray);
        });
    });
});

