// Отсортировать пользователей по возрасту

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);
arr.forEach(element => {
    console.log(element); 
});

function sortByAge(users){
    users.sort((a, b) => a.age - b.age);
}