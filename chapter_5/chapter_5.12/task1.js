//Преобразуйте объект в JSON, а затем обратно в обычный объект

let user = {
    name: "Василий Иванович",
    age: 35
  };

let jsonPresentation = JSON.stringify(user);

console.log(jsonPresentation);

let userFromJson = JSON.parse(jsonPresentation);

for (let [key, value] of Object.entries(userFromJson)){
    console.log(`${key} - ${value}`);
}