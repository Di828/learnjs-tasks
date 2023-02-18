const assert = require('assert');
const { longProd } = require('./task2');

function testProd(){
  let longNumber1 = '526347562387465238745823745623745623487563248568273465823465786234875623874658273465827346565';
  let longNumber2 = '545347865783246875324238462385283647657832465384756783457746368745678323412331526372342342335';
  let longAnswer = '287042519808218554286262069069762022994490006139175285691886890340835841562428972027158465507756466811379375179932552671853230082837945945896564823145428401703619146630440988709916329275';

  it(`correctly calculates the product of ${longNumber1} and ${longNumber2}`, () => {
    assert.equal(longProd(longNumber1, longNumber2), longAnswer)
  })

   let numberWithPoint1 = '234.00125';
   let numberWithPoint2 = '135.875';
   let answerForNumbersWithPoint = '31794.91984375';

   it(`correctly calculates the product of ${numberWithPoint1} and ${numberWithPoint2}`, () => {
     assert.equal(longProd(numberWithPoint1, numberWithPoint2), answerForNumbersWithPoint)
   })

  let numberWithoutIntegerPart1 = '0.123';
  let numberWithoutIntegerPart2 = '0.345';  
  let answerForNumbersWithoutIntegerPart = '0.042435';

   it(`correctly calculates the product of ${numberWithoutIntegerPart1} and ${numberWithoutIntegerPart2}`, () => {
     assert.equal(longProd(numberWithoutIntegerPart1, numberWithoutIntegerPart2), answerForNumbersWithoutIntegerPart)
   })
  
   it(`correctly calculates the prod of 0 and 1235123`, () => {
     assert.equal(longProd('0', '1235123'), '0')
   })
}

module.exports = { testProd }