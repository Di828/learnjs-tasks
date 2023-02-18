const assert = require('assert');
const { longDifference } = require('./task2');

function testDiffrence(){
    let longNumber1 = '526347562387465238745823745623745623487563248568273465823465786234875623874658273465827346565';
    let longNumber2 = '545347865783246875324238462385283647657832465384756783457746368745678323412331526372342342335';
    let longAnswer = '-19000303395781636578414716761538024170269216816483317634280582510802699537673252906514995770';
  
    it(`correctly calculates the diffrence between ${longNumber1} and ${longNumber2}`, () => {
      assert.equal(longDifference(longNumber1, longNumber2), longAnswer)
    })

    let numberWithPoint1 = '234.00125';
    let numberWithPoint2 = '135.875';
    let answerForNumbersWithPoint = '98.12625';
  
    it(`correctly calculates the diffrence of ${numberWithPoint1} and ${numberWithPoint2}`, () => {
      assert.equal(longDifference(numberWithPoint1, numberWithPoint2), answerForNumbersWithPoint)
    })

    let numberWithoutIntegerPart1 = '0.12354';
    let numberWithoutIntegerPart2 = '0.87646';  
    let answerForNumbersWithoutIntegerPart = '-0.75292';
  
    it(`correctly calculates the diffrence of ${numberWithoutIntegerPart1} and ${numberWithoutIntegerPart2}`, () => {
      assert.equal(longDifference(numberWithoutIntegerPart1, numberWithoutIntegerPart2), answerForNumbersWithoutIntegerPart)
    })

    it(`correctly calculates the diffrence of ${longNumber1} and ${longNumber1}`, () => {
        assert.equal(longDifference(longNumber1, longNumber1), '0')
      })

    it(`correctly calculates the diffrence of 1.375 and 0.375`, () => {
        assert.equal(longDifference('1.375', '0.375'), '1')
      })
}

module.exports = { testDiffrence }