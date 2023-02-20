// Сумма с помощью замыканий

console.log(sum(25)(12));

function sum(a){    
    return (b) => {return a + b};
}