//Ошибка при чтении несуществующего свойства

let user = {
    name: "John"
  };
  
  function wrap(target) {
    return new Proxy(target, {
        get(target, prop, receiver){
            if (!(prop in target)){
                throw new Error("Property isn't exist");
            }

            return Reflect.get(target, prop, receiver);
        }
    });
  }
  
  user = wrap(user);
  
  console.log(user.name); 
  console.log(user.age); 