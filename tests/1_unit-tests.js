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

        })
        test('#5 return invalid double division', () => {

        })
        test('#6 read a fraction "decimal" number', () => {

        })
        test('#7 read a fraction number', () => {

        })
        test('#8 return the string spell of converted unit', () => {

        })
        test('#9 return default numerical when no present', () => {

        })
        test('#10 convert gal to L', () => {

        })
        test('#11 convert L to gal', () => {

        })
        test('#12 convert mi to km', () => {

        })
        test('#13 convert km to mi', () => {

        })
        test('#14 convert lbs to kg', () => {

        })
        test('#15 convert kg to lbs', () => {

        })
        test('#16 read decimal number', () => {

            
        })
    })
});