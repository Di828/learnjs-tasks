// Какой день месяца был много дней назад?

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 777))
console.log(date);

function getDateAgo(date, days){
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}