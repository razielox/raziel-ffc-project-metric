const unitList = ['gal','mi','lbs','L','km','kg']
const returnNewUnit = (unit) => {
  switch (unit) {
    case 'L':
      return 'gal'
      break;
    case 'gal':
      return 'L'
      break;
    case 'mi':
      return 'km'
      break;
    case 'km':
      return 'mi'
      break;
    case 'kg':
      return 'lbs'
      break;
    case 'lbs':
      return 'kg'
      break;
  }

}
const convertUnits = (unit) => {
  const convertTo = {
    initUnit: '',
    initNum: '',
    returnNum: '',
    returnUnit:'',
    string:''}
  const verifyUnit = unitList.findIndex(value => { 
  const REG = new RegExp(value+'$','i')
  //console.log(REG)
  //console.log(REG.test(unit))
    if(REG.test(unit)) {
      const transformToNumber = Number(unit.slice(0, REG.lastIndex - (value.length)))
      convertTo.initUnit = value
      convertTo.initNum = transformToNumber !== isNaN(transformToNumber)
        ? transformToNumber : false
      convertTo.returnUnit = returnNewUnit(value)
        return unit
    } else {
      return false
    }
  })
  return convertTo
}

function ConvertHandler() {
  
  
  this.getNum = function(input) {
    let result;
    const getnum = convertUnits(input)
    //console.log(convertUnits("50gal"))//console.log(getnum)
    return getnum.initNum;
  };
  
  this.getUnit = function(input) {
    let result;
    const getunit = convertUnits(input)
    return getunit.initUnit;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    const getReturnUnit = convertUnits(initUnit)
    return getReturnUnit.returnUnit;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
