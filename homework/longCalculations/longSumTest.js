const assert = require('assert');
const { longSum } = require('./task2');

function testSum(){
  let longNumber1 = '526347562387465238745823745623745623487563248568273465823465786234875623874658273465827346565';
  let longNumber2 = '545347865783246875324238462385283647657832465384756783457746368745678323412331526372342342335';
  let longAnswer = '1071695428170712114070062208009029271145395713953030249281212154980553947286989799838169688900';

  it(`correctly calculates the sum of ${longNumber1} and ${longNumber2}`, () => {
    assert.equal(longSum(longNumber1, longNumber2), longAnswer)
  })

  let numberWithPoint1 = '234.00125';
  let numberWithPoint2 = '135.875';
  let answerForNumbersWithPoint = '369.87625';

  it(`correctly calculates the sum of ${numberWithPoint1} and ${numberWithPoint2}`, () => {
    assert.equal(longSum(numberWithPoint1, numberWithPoint2), answerForNumbersWithPoint)
  })

  let numberWithoutIntegerPart1 = '0.12354';
  let numberWithoutIntegerPart2 = '0.87646';  
  let answerForNumbersWithoutIntegerPart = '1';

  it(`correctly calculates the sum of ${numberWithoutIntegerPart1} and ${numberWithoutIntegerPart2}`, () => {
    assert.equal(longSum(numberWithoutIntegerPart1, numberWithoutIntegerPart2), answerForNumbersWithoutIntegerPart)
  })
  
  it(`correctly calculates the sum of 0 and 0`, () => {
    assert.equal(longSum('0', '0'), '0')
  })
}

module.exports = { testSum }