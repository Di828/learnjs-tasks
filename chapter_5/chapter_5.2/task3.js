// Ввод числового значения

let a = readNumber();

alert(a);

function readNumber(){
    let number = prompt('Enter number', '');
    if (number === null || number === ''){
        return null;
    }    

    if (!isFinite(+number)){        
        return readNumber();
    }

    return +number
}