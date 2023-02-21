// Добавьте toString в словарь

let dictionary = Object.create(null);

dictionary.toString = function() {
    return Object.keys(this).join(',');
}

Object.defineProperty(dictionary, "toString", {enumerable : false});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
  console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
console.log(dictionary.toString());