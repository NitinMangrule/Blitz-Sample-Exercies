const assert = require('assert');

describe('Sample Exercies for Candidates', () => {
    it('should define a string and verify the equality of the same', () => {
        /*
            Task
                Declare a variable
                Assign a string value to it - 'Lorem ipsum' 
                Check the equality of the same
        */
        // TODO: Solution or Logic goes here

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
        // TODO: Solution or Logic goes here

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
        // TODO: Solution or Logic goes here

        const expectation = true;
        assert.strictEqual(computed, expectation);
    });
});