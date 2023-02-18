// console.log(longSum('3.995', '6.005'));
// console.log(longSum('0', '0'));
// console.log(longSum('1.02', '1.000000000000000000000000000000000000000000000000000000000000000025'))


function longSum(num1, num2){  
    let pointerPositionFromTheEnd;
    [num1, num2, pointerPositionFromTheEnd] = removePointAndSaveItPosition(num1, num2);

    let operand1 = numberStringToReversedArray(num1);
    let operand2 = numberStringToReversedArray(num2);
    let result = [0];

    for (let i = 0; i < Math.max(operand1.length, operand2.length); i++){        
        let elementsSum = result[i] + (+operand1[i] || 0) + (+operand2[i] || 0);
        result[i] = (elementsSum) % 10;
        result[i + 1] = elementsSum > 9 ? 1 : 0;
    }

    result.splice(pointerPositionFromTheEnd, 0, '.');
    return result.reverse()
                 .join('')
                 .replace(/^0/g, '')
                 .replace(/0+$/g, '')
                 .replace(/[.]$/, '');        
}


// console.log(longDifference('777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777.05555',
//                            '777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777.15555'));
// console.log(longDifference('5', '5'));
// console.log(longDifference('1.111','0.111'))


function longDifference(num1, num2){    
    let sign = '';   
    
    let pointerPositionFromTheEnd;
    [num1, num2, pointerPositionFromTheEnd] = removePointAndSaveItPosition(num1, num2);

    let operand1 = numberStringToReversedArray(num1);
    let operand2 = numberStringToReversedArray(num2);
    let result = [0];

    if (! isNumberOneGreaterOrEqualThanNumberTwo(operand1, operand2) ){
        sign = '-';
        [operand1, operand2] = [operand2, operand1];
    }

    for (let i = 0; i < Math.max(operand1.length, operand2.length); i++){        
        let elementsDiffrence = result[i] + (+operand1[i] || 0) - (+operand2[i] || 0);
        result[i] = elementsDiffrence >= 0 ? elementsDiffrence : elementsDiffrence + 10;
        result[i + 1] = elementsDiffrence < 0 ? -1 : 0;
    }

    result.splice(pointerPositionFromTheEnd, 0, '.');
    return (sign + result.reverse()
                 .join('')
                 .replace(/^0+/g, '')
                 .replace(/0+$/g, '')
                 .replace(/[.]$/, '')
                 .replace(/^[.]/, '0.')) 
                 || 0;  
}

// console.log(longProd('0','50000.5'));
// console.log(longProd('0.0255','50000.5'));
// console.log(longProd('671235471265348712354832462564563456436125348716','212423151251245151512421365742534521346512378451287'));

function longProd(num1, num2){
    let pointerPositionFromTheEnd;    
    [num1, num2, pointerPositionFromTheEnd] = removePointAndSaveItPosition(num1, num2);
    pointerPositionFromTheEnd *= 2;

    let operand1 = numberStringToReversedArray(num1);
    let operand2 = numberStringToReversedArray(num2);
    let result = [];

    for (let j = 0; j < operand1.length; j++){
        for (let i = 0; i < operand2.length; i++){
            result[i + j] = (result[i + j] || 0) + (operand1[j] * operand2[i]);
        }
    }

    let currentLength = result.length;
    for (let i = 0; i < currentLength; i++){
        result[i + 1] = (result[i + 1] || 0) + (result[i] - result[i] % 10) / 10;
        result[i] = result[i] % 10;
    }

    result.splice(pointerPositionFromTheEnd, 0, '.');
    return result.reverse()
                 .join('')
                 .replace(/^0+/g, '')
                 .replace(/0+$/g, '')
                 .replace(/[.]$/, '')
                 .replace(/^[.]/, '0.') 
                 || 0;
}


// console.log( longDivision('2048', '8') );
// console.log( longDivision('0', '3') );
// console.log( longDivision('1', '3') );
// console.log( longDivision('0.25', '0.5') );

// let veryLongNumber = '432658726346583245263487562348523468523478562348562345238475623846587346587236457236457823465723465782346587234658723465534798534';
// let numberForUniversalTest = '5629837456456455628349659283745698';
// console.log( longDivision(veryLongNumber, longDivision(veryLongNumber, numberForUniversalTest)) );

// console.log( longDivision('1', '0') );
// console.log( longDivision('Infinity', 'Infinity') );

function longDivision(num1, num2, precision = 10){   
    if ((num1 == 'Infinity' && num2 == 'Infinity') || (num1 == '0' && num2 == '0')){
        return 'Undefined';
    }

    if (num2 == '0' || num1 == 'Infinity'){
        return 'Infinity';
    }

    [num1, num2] = removePointAndSaveItPosition(num1, num2);    

    let operand1 = num1.replace(/^0+/g, '').split('');
    let operand2 = num2.replace(/^0+/g, '').split('');
    
    let result = [];        
    let temp = operand1.splice(0, operand2.length).reverse();
    operand2.reverse();   
    
    let singleOperationOfIntegerDivision = function (){
        if (isNumberOneGreaterOrEqualThanNumberTwo(temp, operand2)){
            let [digit, remainder] = findNextDigitOfDivision(temp,operand2);
            result.push(digit);
            temp = remainder;
            temp.unshift(operand1.length > 0 ? operand1.shift() : 0);
        } else {
            result.push(0);
            temp.unshift(operand1.length > 0 ? operand1.shift() : 0);
        }

        if (temp[temp.length - 1] == 0){
            temp.shift();
        }
    }

    while (operand1.length > 0){
        singleOperationOfIntegerDivision();        
    }

    singleOperationOfIntegerDivision();

    result.push('.');

    while (precision > 0){
        precision--;
        singleOperationOfIntegerDivision();
    }
    
    return result.join('')                 
                 .replace(/^0+/g, '')
                 .replace(/0+$/g, '')
                 .replace(/[.]$/, '')
                 .replace(/^[.]/, '0.') 
                 || 0;
}

function findNextDigitOfDivision(op1, op2){
    let output = 0;    

    while (isNumberOneGreaterOrEqualThanNumberTwo(op1, op2)){
        let result = [0];
        output++;

        for (let i = 0; i < Math.max(op1.length, op2.length); i++){        
            let elementsDiffrence = result[i] + (+op1[i] || 0) - (+op2[i] || 0);
            result[i] = elementsDiffrence >= 0 ? elementsDiffrence : elementsDiffrence + 10;
            result[i + 1] = elementsDiffrence < 0 ? -1 : 0;
        }

        while (result[result.length - 1] === 0){
            result.pop();
        }

        op1 = result;
    }

    return [output, op1];
}

function numberStringToReversedArray(num){
    return num.split('').reverse();
}

function isNumberOneGreaterOrEqualThanNumberTwo(num1, num2){
    if (num1.length == num2.length){
        for (let i = num1.length; i >= 0; i--){
            if (num1[i] > num2[i]){
                return true;
            } else if (num2[i] > num1[i]){
                return false;
            }
        }

        return true;
    }

    return num1.length > num2.length;
}

function removePointAndSaveItPosition(num1, num2){
    num1 += num1.includes('.') ? '' : '.';
    num2 += num2.includes('.') ? '' : '.';
    let digitsAfterPoint1 = num1.length - num1.indexOf('.') - 1;
    let digitsAfterPoint2 = num2.length - num2.indexOf('.') - 1;

    if (digitsAfterPoint1 > digitsAfterPoint2){
        num2 = num2.padEnd(num2.length + digitsAfterPoint1 - digitsAfterPoint2, '0');
    }

    if (digitsAfterPoint2 > digitsAfterPoint1){
        num1 = num1.padEnd(num1.length + digitsAfterPoint2 - digitsAfterPoint1, '0');
    }

    let pointerPositionFromTheEnd = Math.max(digitsAfterPoint1, digitsAfterPoint2);    
    num1 = num1.replace('.','');
    num2 = num2.replace('.','');

    return [num1, num2, pointerPositionFromTheEnd];
}