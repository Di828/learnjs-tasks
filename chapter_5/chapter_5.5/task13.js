// Создайте объект с ключами из массива

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

function groupById(users){
    return users.reduce((output, element) => {
        output[element.id] = element;
        return output;
    }, {})   
}