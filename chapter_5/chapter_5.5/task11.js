//Получить средний возраст

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

console.log(getAverageAge(arr));

function getAverageAge(users){
    let sum = 0;
    users.forEach(element => {
        sum += element.age;
    });

    return Math.floor(sum / users.length);
}