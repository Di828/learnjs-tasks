// Сумма свойств объекта

console.log(sumSalaries({ 
    "John" : 100,
    "Martin" : 200,
    "Luter" : 300,
    "King" : 500
}));

function sumSalaries(salaries){
    let output = 0;

    for (let salary of Object.values(salaries)){
        output += +salary;
    }

    return output;
}