const assert = require('assert');
const products = require('./products.json');

describe('Deloitte tasks for FE - CONSULTANTS', () => {
    it('should flatten a nested array of any depth', () => {
        /*
            Task
                create an input of nested arrays - [8, [3], [0, [[2]]], [4, 7]]
                convert this into a flat array - [8, 3, 0, 2, 4, 7]
         */
        const targetarray = [8, 3, 0, 2, 4, 7];
        // todo: solution or logic goes here

        assert.deepstrictequal(computedarray, targetarray);
    });

    describe('should sort an array of strings', () => {
        /*
            Task
                define an array of strings - ['the', 'target', 'array', 'of', 'strings', 'should', 'be', 'sorted', 'in', 'ascending', 'order']
                the final output should be a sorted in an asceding order
        */
        it('in the ascending order', () => {
            const targetarray = ["array", "ascending", "be", "in", "of", "order", "should", "sorted", "strings", "target", "the"];
            // todo: solution or logic goes here

            assert.deepstrictequal(computedarray, targetarray);
        });

        it('in the descending order', () => {
            /*
                Task
                    define an array of strings - ['the', 'target', 'array', 'of', 'strings', 'should', 'be', 'sorted', 'in', 'descending', 'order']
                    the final output should be a sorted in an asceding order
            */
            const targetarray = ["the", "target", "strings", "sorted", "should", "order", "of", "in", "descending", "be", "array"];
            // todo: solution or logic goes here

            assert.deepstrictequal(computedarray, targetarray);
        });
    });

    it('should find k\'th smallest number in an array', () => {
        /*
            Task
                create an array having elements - [21, 432, 645, 1, 87, 546, 39, 19, 30, 106, 23]
                find out the 5th smallest number
        */
        const targetelement = 30;
        // todo: solution or logic goes here

        assert.strictequal(foundelement, targetelement);
    });

    it('should find k\'th largest number in an array', () => {
        /*
            Task
                create an array having elements - [21, 432, 645, 1, 87, 546, 39, 19, 30, 106, 23]
                find out the 8th largest number
        */
        const targetelement = 23;
        // todo: solution or logic goes here

        assert.strictequal(foundelement, targetelement);
    });

    it('should remove duplicates from a given array', () => {
        /*
            Task
                create an array of objects - [{ 'name': 'abc', 'price': 100 }, { 'name': 'def', 'price': 200 }, { 'name': 'pqr', 'price': 400 }, { 'name': 'xyz', 'price': 100 }, { 'name': 'lmn', 'price': 200 }, { 'name': 'ghi', 'price': 300 }, { 'name': 'jkl', 'price': 200 }, { 'name': 'uvw', 'price': 100 }, { 'name': 'rst', 'price': 100 }]
                the output should contain have array of unique elements of key 'price'
        */
        const targetarray = [100, 200, 400, 300];
        // todo: solution or logic goes here

        assert.deepstrictequal(computedarray, targetarray);
    });

    it('fix the below snippet to allow insertion an item at the end', () => {
        /*
            Task:
                the goal is to fix the error in the below snippet to allow an item to be inserted at the end.
        */
        const sourceobj = new map();
        const targetobj = ['lorem ipsum', 'brute dissentiunt'];
        // todo: solution or logic goes here

        assert.deepstrictequal(computedobj, targetobj);
    });

    it('should define a method with implicit return, that does not have curly braces', () => {
        /*
          Task
            1. Write a method that returns the input (4) multiplied by 2, without curly braces
            2. Write a method that returns an object {id: 123}
        */
        // TODO: Solution or Logic goes here

        assert.deepEqual(computed1, expected1);
        assert.deepEqual(computed2, expected2);
    });

    it("should define a class and verify the same", () => {
        /*
          Task
            Create a class 
            Verify the class is a valid one
        */
        const expectation = "object";
        // TODO: Solution or Logic goes here

        assert.equal(isClass, expectation);
    });

    it("should define a class of type Block scope", () => {
        /*
          Task
            Create a class 
            The class should have block scope
        */
        const expectation = "function";
        // TODO: Solution or Logic goes here

        assert.equal(computed, expectation);
    });

    it("should define an anonymous class", () => {
        /*
          Task:
            Create an anonymous class and verify the same
        */
        const expectation = "function";
        // TODO: Solution or Logic goes here

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
                // TODO: Solution or Logic goes here

                assert.strictEqual(computed, true);
            });

            it("should define a method whose name is dynamic or gets computed at the runtime", () => {
                /*
                  Task
                    Create a dynamic method having name 'dynamicMethod'
                    Verify the same
                */
                // TODO: Solution or Logic goes here

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
            // TODO: Solution or Logic goes here

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
        // TODO: Solution or Logic goes here

        assert.strictEqual(computed, expectation);
    });

    it('should swap the two variables', () => {
        /*
          Task
            Swap the two variables using destructured arrays
        */
        const firstInitial = 1;
        const secondInitial = 3;
        // TODO: Solution or Logic goes here

        assert.equal(computed1, expectation1);
        assert.equal(computed2, expectation2);
    });

    it('should destructure the array using leading commas', () => {
        /*
          Task
            The array destructuring should be done using leading commas
        */
        const initial = ['ax', 'why', 'zet'];
        const expectation = initial[initial.length - 1];
        // TODO: Solution or Logic goes here

        assert.equal(computed, expectation);
    });

    it('should destructure every character of a string', () => {
        /*
          Task
            Create a string
            Convert the string to an array using destructuring
        */
        const initial = 'CAR';
        const expectation = ['C', 'A', 'R'];
        // TODO: Solution or Logic goes here

        assert.deepEqual(computed, expectation);
    });

    it('should create an object and access it value using destructuring', () => {
        /*
          Task
            Create an object having a key 'id'
            Access the assigned value to 'id' to it through destructuring
        */
        const expectation = initial.id;
        // TODO: Solution or Logic goes here

        assert.equal(computed, expectation);
    });

    it('should create an object and access it value using destructuring havig different variable names', () => {
        /*
         Task
           Create an object having a couple of keys 'x' and 'y'
           Access the assigned value to 'x' and 'y' using diferent variable names, through destructuring
       */
        const expectation1 = initial.x;
        const expectation2 = initial.y;
        // TODO: Solution or Logic goes here

        assert.equal(computed1, expectation1);
        assert.equal(computed2, expectation2);
    });

    it('should create an empty array with destructured being assigned an initial value', () => {
        /*
          Task
            Assign an empty array to a destructured variable with name 'flask'
            The value of the 'flask' should be 100
        */
        // TODO: Solution or Logic goes here
        const initial = 100;
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
            // TODO: Solution or Logic goes here

            assert.equal(computed, expected);
        });
    });

    describe('should filter from the json list using functional programming', () => {
        it('for return products which has less than 30 in stock', () => {
            const expectation = 2;
            // TODO: Solution or Logic goes here

            assert.equal(computed, expectation);
        });

        it('for the products based on [S] size', () => {
            const expectation = 7;
            // TODO: Solution or Logic goes here

            assert.equal(computed, expectation);
        });
    });

    describe('should convert the input array without affecting the original through transformation using functional programming', () => {
        it('to type `number`', () => {
            /*
              Task
                Reduce an array of numbers to type 'number' 
            */
            const expectation = 'number';
            // TODO: Solution or Logic goes here

            assert.equal(computed, expectation);
        });

        it('to print the price of all products available from the json list', () => {
            /*
              Task
                It should find the sum of all the prices from the json list using 'reduce' method
            */
            const expectation = 34550.3;
            // TODO: Solution or Logic goes here

            assert.equal(computed, expectation);
        });
    });

    it('should calculate the length of an object', () => {
        /*
            Create an object having properties as "notifications": null, "profile_use_background_image": true, "statuses_count": 31, "profile_background_color": "C0DEED", "followers_count": 3066, "profile_image_url": "http://a2.twimg.com/profile_images/1285770264/PGP_normal.jpg", "listed_count": 6, "profile_background_image_url": "http://a3.twimg.com/a/1301071706/images/themes/theme1/bg.png", "description": "", "screen_name": "PostGradProblem", "default_profile": true, "verified": false, "time_zone": null, "profile_text_color": "333333".
            Calculate the length of the object property
        */
        // TODO: Solution or Logic goes here
        assert.strictEqual(sourceObjLength, 14);
    });

    it('should find out all the methods of a Javascript object', () => {
        /*
            Task: to find out all the methods of 'Number'
        */
        const targetArray = ['isFinite', 'isInteger', 'isNaN', 'isSafeInteger', 'parseFloat', 'parseInt'];
        // TODO: Solution or Logic goes here
        assert.deepStrictEqual(computedArray, targetArray);
    });

    it('should check whether an object contains any property or not', () => {
        /*
            Task: 
                Create two different objects, one is empty and other one having at-least one property.
                Check the emptiness on these two objects
        */
        // TODO: Solution or Logic goes here

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
        // TODO: Solution or Logic goes here

        const studentsInClass = calculator.increment().increment().decrement().decrement().increment().print();
        assert.strictEqual(studentsInClass, 61);
    });

    it('fix the issue in the snippet below to produce correct output', () => {
        /*
            Task:
                Fix the issue in the below snippet, so that the varibale isEqual is evaluated to 'true'
        */
        // TODO: Solution or Logic goes here
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
        const expectation = [firstInitial, secondInitial];
        // TODO: Solution or Logic goes here

        assert.deepEqual(computed, expectation);
    });

    it('should return the last two parameters of the function without explicitly executing them', () => {
        /*
          Task
            Make use of parameterized functional programming having three parameters
            Execute this method by passing 4 parameters => null, 2, 3, 4
            The expectation is to return the last 2 elements of the method, i.e. 3 and 4
        */
        const expectation = [initial[initial.length - 2], initial[initial.length - 1]];
        // TODO: Solution or Logic goes here

        assert.deepEqual(computed, expectation);
    });

    it('should return all the parameters of a method without explicitly executing their variable names', () => {
        /*
          Task
            Execute a method with these parameters -> 42, 'twenty three', 'win'
            The method should return these without explicitly executing their variable names
        */
        const expectation = initial;
        // TODO: Solution or Logic goes here

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
        const expectation = [initial[initial.length - 2], initial[initial.length - 1]];
        // TODO: Solution or Logic goes here

        assert.deepEqual(computed, expectation);
    });

    it('should refer all the elements of an array through destructuring', () => {
        /*
          Task
            Create an array of 4 elements -> 1,2,3,4
            Return them in a single variable through destructuring
        */
        const expectation = initial;
        // TODO: Solution or Logic goes here

        assert.deepEqual(computed, expectation);
    });

    it('should return all the elemnents of an array except the first through destructuring', () => {
        /*
          Task
            Create an array of 4 elements -> 1,2,3,4
            Return the last three elements through destructuring
        */
        const expectation = initialClone;
        // TODO: Solution or Logic goes here

        assert.deepEqual(computed, expectation);
    });

    it('should concat the two arrays without using the concat()', () => {
        /*
          Task
            Create an array of 2 elements -> 3,4
            Concat them with different array having 1, 2 as the first and second elements respectively
            Concatanation should be done using any of the Array built in methods
        */
        const expectation = secondInitial.concat(firstInitial);
        // TODO: Solution or Logic goes here

        assert.deepEqual(computed, expectation);
    });

    it('should return a Date from an array without using their elements explicitly', () => {
        /*
          Task
            Create a date in an array with elements 2015, 1, 1
            The Date method should take this as an input, without using the array elements explicitly
        */
        const expectation = new Date(initial[0], initial[1], initial[2]);
        // TODO: Solution or Logic goes here

        assert.deepEqual(computed, expectation);
    });

    it("should extract each array item without using any loop or other array methods", () => {
        /*
          Task
            Create an Array having a couple of items - '1' and '2'
            Retrive these values without making use of any loop or Array methods, using ES6 special feature
        */
        const expectation1 = initial[0];
        const expectation2 = initial[1];
        // TODO: Solution or Logic goes here

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
        const expectation1 = initial[1];
        const expectation2 = initial[2];
        const expectation3 = initial.slice(3);
        // TODO: Solution or Logic goes here

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
        const expectation = initial;
        // TODO: Solution or Logic goes here

        assert.deepStrictEqual(computed, expectation);
    });

    it("should pass the parameters list to a method using ES6 special feature", () => {
        /*
          Task:
            Create an method having more than two paramerts
            These values should be 1 and 2, store in an array
            While making a function call, these parameters should be get passed using ES6 special feature
        */
        const expectation1 = initial[0];
        const expectation2 = initial[1];
        // TODO: Solution or Logic goes here

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
        const expectation = 78;
        // TODO: Solution or Logic goes here

        assert.equal(computed, expectation);
    });

    it("should retrieve each character of a string using ES6 special feature", () => {
        /*
          Task
            Create a string 'Lorem'
            Retrive each character of a string using ES6 special feature
            Each character should be referred by a uniue variable
        */
        const expectation1 = initial.charAt(0);
        const expectation2 = initial.charAt(1);
        const expectation3 = initial.charAt(2);
        const expectation4 = initial.charAt(3);
        const expectation5 = initial.charAt(4);
        // TODO: Solution or Logic goes here

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
        const expectation = 5;
        // TODO: Solution or Logic goes here

        assert.strictEqual(computed.length, expectation);
    });

    it("should find out the maximum number from string using ES6 special feature", () => {
        /*
          Task
            Define a string - '43152'
            Pass this string as a parameter either to a built in method or a custom method to find out the largest number.
            This should be done using ES6 special feature
        */
        const expectation = 5;
        // TODO: Solution or Logic goes here

        assert.strictEqual(computed, expectation);
    });

    it('should convert the source String into CamelCase', () => {
        /*
            Task:
                Define a variable of string type - 'This@string-should#be,converted.to<camel-case>'
                It should convert the string to a camelCase - thisStringShouldBeConvertedToCamelCase
        */
        const targetString = 'thisStringShouldBeConvertedToCamelCase';
        // TODO: Solution or Logic goes here

        assert.strictEqual(computedString, targetString);
    });

    it('should convert a string into an array of individual alphabets', () => {
        /*
           Task:
               Define a variable of string type - 'Lorem ipsum dolor sit amet'
               The output should be an array of individual characters - ['L', 'o', 'r', 'e', 'm', 'i', 'p', 's', 'u', 'm', 'd', 'o', 'l', 'o', 'r', 's', 'i', 't', 'a', 'm', 'e', 't'];
       */
        const targetString = ['L', 'o', 'r', 'e', 'm', 'i', 'p', 's', 'u', 'm', 'd', 'o', 'l', 'o', 'r', 's', 'i', 't', 'a', 'm', 'e', 't'];
        // TODO: Solution or Logic goes here

        assert.deepStrictEqual(computedString, targetString);
    });

    it('should replace all the occurences in a string, in a case insensitive format', () => {
        /*
            Task:
                Define a variable of string type - 'Lorem ipsum dolor sit amet lorem Brute lorem dissentiunt ut sea Lorem harum forensibus lorem necessitatibus'
                Replace all 'lorem' words (case insensitive) with 'hello'
        */
        const targetString = 'hello ipsum dolor sit amet hello Brute hello dissentiunt ut sea hello harum forensibus hello necessitatibus';
        // TODO: Solution or Logic goes here

        assert.strictEqual(computedString, targetString);
    });

    it('should check whether a string is Palindrome or not', () => {
        /*
            Task:
                Define a variable of string type - 'Rotavator'
                Verify whether it is a Palindrome or not
        */
        // TODO: Solution or Logic goes here

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
        const expedtedOutput1 = '23 second(s)';
        const expedtedOutput2 = '1 min(s)';
        // TODO: Solution or Logic goes here

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
        const targetString1 = 'upersedesay';
        const targetString2 = 'articay';
        // TODO: Solution or Logic goes here

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
        const targetArray = ['0297', '0279', '0927', '0972', '0729', '0792', '2097', '2079', '2907', '2970', '2709', '2790', '9027', '9072', '9207', '9270', '9702', '9720', '7029', '7092', '7209', '7290', '7902', '7920'];
        // TODO: Solution or Logic goes here

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
        // TODO: Solution or Logic goes here

        assert.strictEqual(isAnagram, true);
    });

    it('should sort strings in ascending order, on the basis of their lengths and then alphabetically', () => {
        /*
            Task
                Define an array of strings - ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'ex', 'eam', 'dictas', 'melius', 'laboramus']
                The output should be a sorted array of Strings in ascedning order on the basis of their lengths.
                If one or more strings from the list, have the same length, then the sorting should be in alphabetical ascending order.
        */
        const targetStringList = ['ex', 'eam', 'sit', 'amet', 'dolor', 'ipsum', 'lorem', 'dictas', 'melius', 'laboramus'];
        // TODO: Solution or Logic goes here

        assert.deepStrictEqual(computedStringList, targetStringList);
    });

});