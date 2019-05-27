const assert = require('assert');

describe('String exercies', () => {
    it('should convert the source String into CamelCase', () => {
        const sourceString = 'This string-should be,converted.to camel-case'; // Expected Output: thisStringShouldBeConvertedToCameCase
        const targetString = 'thisStringShouldBeConvertedToCamelCase';
        // TODO: Solution or Logic goes here
        
        assert.strictEqual(computedString, targetString);
    });

    it('should convert a string into an array of individual alphabets', () => {
        const sourceString = 'Lorem ipsum dolor sit amet'; // Expected Output: ['L', 'o', 'r', 'e', 'm', 'i', 'p', 's', 'u', 'm', 'd', 'o', 'l', 'o', 'r', 's', 'i', 't', 'a', 'm', 'e', 't']
        const targetString = ['L', 'o', 'r', 'e', 'm', 'i', 'p', 's', 'u', 'm', 'd', 'o', 'l', 'o', 'r', 's', 'i', 't', 'a', 'm', 'e', 't'];
        // TODO: Solution or Logic goes here
        
        assert.deepStrictEqual(computedString, targetString);
    });

    it('should replace all the occurences in a string, in a case insensitive format', () => {
        const sourceString = 'Lorem ipsum dolor sit amet lorem Brute lorem dissentiunt ut sea Lorem harum forensibus lorem necessitatibus';
        const targetString = 'test ipsum dolor sit amet test Brute test dissentiunt ut sea test harum forensibus test necessitatibus';
        // TODO: Solution or Logic goes here

        assert.strictEqual(computedString, targetString);
    });

    it('should check whether a string is Palindrome or not', () => {
        const sourceString = 'Rotavator';
        // TODO: Solution or Logic goes here
        
        assert.strictEqual(computedString, true);
    });

    it('should print out the time taken by an individual to read a paragraph', () => {
        /* 
        Assuming an individual reads 200 words per minute. Calculate the time required, in reading the given paragraph;
        Example: If the Input is 'Lorem ipsum', it should print '1 second(s)'
        */
        const sourceString1 = `Lorem ipsum dolor sit amet, ex eam dictas melius laboramus, id vel mazim qualisque posidonium. Pri an brute temporibus appellantur, qui error fierent et, et mei homero nostrud. Latine voluptua maluisset pri ex, ea alienum ancillae assueverit pri, ne mea elitr scripserit referrentur. Brute dissentiunt ut sea, quaeque epicurei lobortis qui an. Ut eum wisi illud omnesque, oporteat accusamus mei in. Ne offendit detraxit repudiandae his. Ex stet ceteros noluisse quo, sit at fierent dissentiet.`;
        /* Expected Output: 23 seconds */
        const expedtedOutput1 = '23 second(s)';
        const sourceString2 = `Lorem ipsum dolor sit amet, ex eam dictas melius laboramus, id vel mazim qualisque posidonium. Pri an brute temporibus appellantur, qui error fierent et, et mei homero nostrud. Latine voluptua maluisset pri ex, ea alienum ancillae assueverit pri, ne mea elitr scripserit referrentur. Brute dissentiunt ut sea, quaeque epicurei lobortis qui an. Ut eum wisi illud omnesque, oporteat accusamus mei in. Ne offendit detraxit repudiandae his. Ex stet ceteros noluisse quo, sit at fierent dissentiet. Lorem ipsum dolor sit amet, ex eam dictas melius laboramus, id vel mazim qualisque posidonium. Pri an brute temporibus appellantur, qui error fierent et, et mei homero nostrud. Latine voluptua maluisset pri ex, ea alienum ancillae assueverit pri, ne mea elitr scripserit referrentur. Brute dissentiunt ut sea, quaeque epicurei lobortis qui an. Ut eum wisi illud omnesque, oporteat accusamus mei in. Ne offendit detraxit repudiandae his. Ex stet ceteros noluisse quo, sit at fierent dissentiet. Lorem ipsum dolor sit amet, ex eam dictas melius laboramus, id vel mazim qualisque posidonium. Pri an brute temporibus appellantur, qui error fierent et, et mei homero nostrud. Latine voluptua maluisset pri ex, ea alienum ancillae assueverit pri, ne mea elitr scripserit referrentur. Brute dissentiunt ut sea, quaeque epicurei lobortis qui an. Ut eum wisi illud omnesque, oporteat accusamus mei in. Ne offendit detraxit repudiandae his. Ex stet ceteros noluisse quo, sit at fierent dissentiet.`
        /* Expected Output: 1 min(s) */
        const expedtedOutput2 = '1 min(s)';

        // TODO: Solution or Logic goes here
        

        assert.strictEqual(computedTime1, expedtedOutput1);
        assert.strictEqual(computedTime2, expedtedOutput2);
    });

    it('should convert an input String as per the instructions', () => {
        /*
            In words that begin with consonant sounds, all letters before the initial vowel are placed at the end of the word sequence. 
            Then, "ay" is added.
            When words begin with consonant clusters (multiple consonants that form one sound), the whole consonants before the vowel is added at the end followed by an "ay".
            In words that begin with vowel sounds, one just adds "ay" to the end.

            Example:
            Input 1: hello
            Output 1: ellohay (ello + h + ay)

            Input 2: umbrella
            Output 2: umbrellaay (umbrella + ay)
        */

        // Convert any word to Pig Latin, see how to convert here => https://en.wikipedia.org/wiki/Pig_Latin
        const sourceString1 = "supersede";
        const sourceString2 = "artic"
        const targetString1 = 'upersedesay';
        const targetString2 = 'articay';

        // TODO: Solution or Logic goes here

        assert.strictEqual(computedString1, targetString1);
        assert.strictEqual(computedString2, targetString2);
    });

    it('should compute all the permutations of a given string', () => {
        /*
            Example:
            Input: '123'
            Output: '123', '132', '213', '231', '312', '321' 
        */

        const sourceString = '0297';
        const targetArray = ['0297', '0279', '0927', '0972', '0729', '0792', '2097', '2079', '2907', '2970', '2709', '2790', '9027', '9072', '9207', '9270', '9702', '9720', '7029', '7092', '7209', '7290', '7902', '7920'];
        // TODO: Solution or Logic goes here


        assert.deepStrictEqual(computedArray, targetArray);
    });

    it('should check whether two strings are Anagrams', () => {
        /*
            Anagram - a word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
            Example -- 
            Input 1: Bored, Robed
            Output 1: true

            Input 1: Save, Wase
            Output 1: false
        */
        const sourceString1 = 'triangle';
        const sourceString2 = 'integral';
        // TODO: Solution or Logic goes here

        assert.deepStrictEqual(computedArr1, computedArr2);
    });

    it('should sort strings in ascending order, on the basis of their lengths and then alphabetically', () => {
        /*
            The input is an array of Strings. The output should be a sorted array of Strings in ascedning order on the basis of their lengths.
            If one or more strings from the list, have the same length, then the sorting should be in alphabetical ascending order.
        */
        const sourceStringList = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'ex', 'eam', 'dictas', 'melius', 'laboramus'];
        const targetStringList = ['ex', 'eam', 'sit', 'amet', 'dolor', 'ipsum', 'lorem', 'dictas', 'melius', 'laboramus'];
        // TODO: Solution or Logic goes here
        
        assert.deepStrictEqual(computedStringList, targetStringList);
    });
});