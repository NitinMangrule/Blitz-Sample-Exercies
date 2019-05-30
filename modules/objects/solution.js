const assert = require('assert');

describe('Object exercies', () => {
    it('should create an object as per instructions and delete a property', () => {
        /*
            Create an object having properties as 'name', 'experience', 'skills', and 'expectedCTC'.
            Then delete the field 'expectedCTC'
        */
        const sourceObj = {
            'name': 'Lorem Ipusm',
            'experience': '8 years',
            'skills': ['Javascript', 'HTML', 'CSS', 'Angular', 'React'],
            'expectedCTC': '40 lpa'
        };
        const computedObj = new Object(sourceObj);
        delete computedObj.expectedCTC;
        const isValidKeys = computedObj.hasOwnProperty('name') && computedObj.hasOwnProperty('experience') && computedObj.hasOwnProperty('skills') && !computedObj.hasOwnProperty('expectedCTC');
        assert.strictEqual(isValidKeys, true);
    });

    it('should calculate the length of an object', () => {
        /*
            Create an object having properties as 'name', 'experience', 'skills', and 'expectedCTC'.
            Then delete the field 'expectedCTC'
        */
        const sourceObj = {
            "notifications": null,
            "profile_use_background_image": true,
            "statuses_count": 31,
            "profile_background_color": "C0DEED",
            "followers_count": 3066,
            "profile_image_url": "http://a2.twimg.com/profile_images/1285770264/PGP_normal.jpg",
            "listed_count": 6,
            "profile_background_image_url": "http://a3.twimg.com/a/1301071706/images/themes/theme1/bg.png",
            "description": "",
            "screen_name": "PostGradProblem",
            "default_profile": true,
            "verified": false,
            "time_zone": null,
            "profile_text_color": "333333"
        };

        const findLengthOfLength = (inputObj) => {
            let size = 0, key;
            for (key in inputObj) {
                if (inputObj.hasOwnProperty(key)) {
                    size++;
                }
            }
            return size;
        };

        const sourceObjLength = findLengthOfLength(sourceObj);
        assert.strictEqual(sourceObjLength, 14);
    });

    it('should find out all the methods of a Javascript object', () => {
        /*
            Task: to find out all the methods of 'Number'
        */
        const targetArray = ['isFinite', 'isInteger', 'isNaN', 'isSafeInteger', 'parseFloat', 'parseInt'];
        const findAllMethods = (inputObj) => {
            return Object.getOwnPropertyNames(inputObj).filter(property => ((typeof inputObj[property]) === 'function'));
        };
        const computedArray = findAllMethods(Number);

        assert.deepStrictEqual(computedArray, targetArray);
    });

    it('should check whether an object contains any property or not', () => {
        /*
            Task: 
                Create two different objects, one is empty and other one having at-least one property.
                Check the emptiness on these two objects
        */
        const sourceObj1 = {};
        const sourceObj2 = {
            text: 'Lorem ipsum'
        };

        const isEmpty = (inputObj) => {
            let isKey = false;
            for (let key in inputObj) {
                isKey = true;
            }
            return !isKey;
        };

        const computedObj1 = isEmpty(sourceObj1);
        const computedObj2 = isEmpty(sourceObj2);

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
        let calculator = {
            count: 60,
            increment() {
                this.count++;
                return this;
            },
            decrement() {
                this.count--;
                return this;
            },
            print() {
                return this.count;
            }
        }
        const studentsInClass = calculator.increment().increment().decrement().decrement().increment().print();
        assert.strictEqual(studentsInClass, 61);
    });

    it('fix the issue in the snippet below to produce correct output', () => {
        /*
            Task:
                Fix the issue in the below snippet, so that the varibale isEqual is evaluated to 'true'
        */
        let commonObj = {};
        const method1 = () => {
            return commonObj;
        };
        const method2 = () => {
            return commonObj;
        };
        let variable1 = new method1;
        let variable2 = new method2;

        const isEqual = variable1 == variable2;

        assert.strictEqual(isEqual, true);
    });
});