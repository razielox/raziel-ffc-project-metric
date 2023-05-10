const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    suite('Function getNum', () => {
        test('get the number of metric', () => {
            let input = "50l"
            assert.equal(convertHandler.getNum(input), 50)
        })
        test('get the unit typet', () => {
            let input = "50gal"
            assert.equal(convertHandler.getUnit(input), 'gal')
        })
        test('get the unit convert to', () => {
            let input = "kg"
            assert.equal(convertHandler.getReturnUnit(input), 'lbs')
        })
        test('', () => {})
    })
});