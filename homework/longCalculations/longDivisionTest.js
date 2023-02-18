const assert = require('assert');
const { longDivision } = require('./task2');

function testDivision(){
  let longNumber1 = '526347562387465225364756234875687234658723465782364875623874562387456823738745823745623745623487563248568273465823465786234875623874658273465827346565';
  let longNumber2 = '54534786578456456456456456456456456456452545234523452345234523452345234523434563456345633454565234523452435234345345563246';  
  let precisionForDividingAOnB = longNumber1.length + longNumber2.length;
  let precision = 0;

  it(`correctle calculates a / (a / b), where a > b`, () => {
    assert.equal(longDivision(longNumber1, longDivision(longNumber1, longNumber2, precisionForDividingAOnB), precision), longNumber2)
  })

  it(`correctle calculates a / (a / b), where a < b`, () => {
    assert.equal(longDivision(longNumber2, longDivision(longNumber2, longNumber1, precisionForDividingAOnB), precision), longNumber1)
  })

   let numberWithPoint1 = '2.25';
   let numberWithPoint2 = '1.125';
   let answerForNumbersWithPoint = '2';
   let precisionForTest2 = 10;

   it(`correctly calculates the quotient of ${numberWithPoint1} and ${numberWithPoint2}`, () => {
     assert.equal(longDivision(numberWithPoint1, numberWithPoint2, precisionForTest2), answerForNumbersWithPoint)
   })

  let numberWithoutIntegerPart1 = '0.25';
  let numberWithoutIntegerPart2 = '0.1255';  
  let answerForNumbersWithoutIntegerPart = '1.9920318725';
  let precisionForTest3 = 10;

   it(`correctly calculates the quotient of ${numberWithoutIntegerPart1} and ${numberWithoutIntegerPart2}`, () => {
    assert.equal(longDivision(numberWithoutIntegerPart1, numberWithoutIntegerPart2, precisionForTest3), answerForNumbersWithoutIntegerPart)
  })
  
   it(`correctly calculates the quotient of 0 and any number != 0`, () => {
     assert.equal(longDivision('0', (Math.random() + 0.1).toString()), '0')
   })

   it(`correctly calculates the quotient of any number != 0 and 0`, () => {
    assert.equal(longDivision((Math.random() + 0.1).toString(), '0'), 'Infinity')
  })

  it(`correctly calculates the quotient of 22 and 1250`, () => {
    assert.equal(longDivision('22', '1250'), '0.0176')
  })

  it(`correctly calculates the quotient of 0 and 0`, () => {
    assert.equal(longDivision('0', '0'), 'Undefined')
  })

  it(`correctly calculates the quotient of any number and Infinity`, () => {
    assert.equal(longDivision(Math.random().toString(), 'Infinity'), '0')
  })
}

module.exports = { testDivision }