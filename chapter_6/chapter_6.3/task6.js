// Сортировать по полю

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

users.sort(byField('name'));
showUsersInfo();
console.log('----------------------');
users.sort(byField('age'));
showUsersInfo();


function byField(field){
    return (a, b) => a[field] > b[field] ? 1 : -1;
}


function showUsersInfo(){ 
    users.forEach(x => {
    for (let prop of Object.values(x))
        console.log(prop);
})}