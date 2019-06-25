const assert = require('assert');

describe('Sample Exercies for Candidates', () => {
    it('should define a string and verify the equality of the same', () => {
        /*
            Task
                Declare a variable
                Assign a string value to it - 'Lorem ipsum' 
                Check the equality of the same
        */
        const initial = 'Lorem ipsum';
        const computed = initial;
        const expectation = initial;
        assert.strictEqual(computed, expectation);
    });

    it('should find out the addition of two numbers', () => {
        /*
            Task
                Declare two variables
                Assign values to them '10' and '20' respectively
                Perform addition of them
                Verify the same
        */
        const initial1 = 10;
        const initial2 = 20;
        const computed = initial1 + initial2;
        const expectation = initial1 + initial2;
        assert.strictEqual(computed, expectation);
    });

    it('should check the greater array between the two', () => {
        /*
            Task
                Declare two arrays
                The first one should contain the elements - 'Lorem', 'ipsum', 'dolor', 'sit', 'amet'
                The second one should contain the elements - 9, 8, 7
                Find out the array which is the greater among length, between the two
                Verify the same
        */
        const initial1 = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'];
        const initial2 = [9, 8, 7];
        const length1 = initial1.length;
        const length2 = initial2.length;
        const computed = length1 > length2;
        const expectation = true;
        assert.strictEqual(computed, expectation);
    });
});