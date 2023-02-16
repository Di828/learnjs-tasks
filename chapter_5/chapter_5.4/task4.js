//Сумма введённых чисел
let numbers = [];
alert(sumInput());

function sumInput(){
    let number = 0;
    while (true){
        number = prompt('Enter number','');        
        if (number === '' || number === null || !isFinite(number)){
            break;
        }        

        numbers.push(+number);
    }    

    let sum = 0;
    numbers.forEach(element => {
        sum += element;
    });

    return sum;
}