//Сумма пользовательских чисел

let a = read();
let b = read();

alert(sum(a, b));

function read(){
    let number = prompt("Launch number", 0);

    return +number;
}

function sum(a, b){    
    return a + b;
}