const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    suite('Functions', () => {
        test('#1 Read whole Number', () => {
            let input = "50l"
            assert.equal(convertHandler.getNum(input), 50, 'Not a number')
        })
        test('#2 Read unit', () => {
            let input = "50gal"
            assert.equal(convertHandler.getUnit(input), 'gal', 'Not a valid unit')
        })
        test('#3 convert the unit', () => {
            let input = "kg"
            assert.equal(convertHandler.getReturnUnit(input), 'lbs')
        })
        test('#4 return invalid unit', () => {
            let input = "kg"
            assert.equal(convertHandler.getReturnUnit(input), 'lbs')

        })
        test('#5 return invalid double division', () => {
            let input = "kg"
            assert.equal(convertHandler.getReturnUnit(input), 'lbs')

        })
        test('#6 read a fraction "decimal" number', () => {
            let input = "kg"
            assert.equal(convertHandler.getReturnUnit(input), 'lbs')

        })
        test('#7 read a fraction number', () => {
            let input = "kg"
            assert.equal(convertHandler.getReturnUnit(input), 'lbs')

        })
        test('#8 return the string spell of converted unit', () => {
            let input = "kg"
            assert.equal(convertHandler.getReturnUnit(input), 'lbs')

        })
        test('#9 return default numerical when no present', () => {
            let input = "kg"
            assert.equal(convertHandler.getReturnUnit(input), 'lbs')

        })
        test('#10 convert gal to L', () => {
            let input = "kg"
            assert.equal(convertHandler.getReturnUnit(input), 'lbs')

        })
        test('#11 convert L to gal', () => {
            let input = "kg"
            assert.equal(convertHandler.getReturnUnit(input), 'lbs')

        })
        test('#12 convert mi to km', () => {
            let input = "kg"
            assert.equal(convertHandler.getReturnUnit(input), 'lbs')

        })
        test('#13 convert km to mi', () => {
            let input = "kg"
            assert.equal(convertHandler.getReturnUnit(input), 'lbs')

        })
        test('#14 convert lbs to kg', () => {
            let input = "kg"
            assert.equal(convertHandler.getReturnUnit(input), 'lbs')

        })
        test('#15 convert kg to lbs', () => {
            let input = "kg"
            assert.equal(convertHandler.getReturnUnit(input), 'lbs')

        })
        test('#16 read decimal number', () => {
            let input = "kg"
            assert.equal(convertHandler.getReturnUnit(input), 'lbs')

            
        })
    })
});