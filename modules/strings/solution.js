const assert = require('assert');

describe('String exercies', () => {
    it('should convert the source String into CamelCase', () => {
        const sourceString = 'This string-should be,converted.to camel-case'; // Expected Output: thisStringShouldBeConvertedToCameCase
        const convertToCamelCase = (inputString) => {
            const splitOperator = [' ', '-', '.', ','];
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
        const sourceString = 'Lorem ipsum dolor sit amet lorem Brute lorem dissentiunt ut sea Lorem harum forensibus lorem necessitatibus';
        const targetString = 'test ipsum dolor sit amet test Brute test dissentiunt ut sea test harum forensibus test necessitatibus';
        const computedString = sourceString.replace(/lorem/gi, 'test');
        assert.strictEqual(computedString, targetString);
    });

    it('should check whether a string is Palindrome or not', () => {
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
        Assuming an individual reads 200 words per minute. Calculate the time required, in reading the given paragraph;
        Example: If the Input is 'Lorem ipsum', it should print '1 second(s)'
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
        */

        // Convert any word to Pig Latin, see how to convert here => https://en.wikipedia.org/wiki/Pig_Latin
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
            Anagram - a word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
            Example -- 
            Input 1: Bored, Robed
            Output 1: true

            Input 1: Save, Wase
            Output 1: false
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

        assert.deepStrictEqual(computedArr1, computedArr2);
    });

    it('should sort strings in ascending order, on the basis of their lengths and then alphabetically', () => {
        /*
            The input is an array of Strings. The output should be a sorted array of Strings in ascedning order on the basis of their lengths.
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