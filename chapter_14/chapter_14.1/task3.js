// Observable
let handlers = Symbol('handlers');

function makeObservable(target) {
    target[handlers] = [];

    target.observe = function(handler){
        this[handlers].push(handler);
    }
    return new Proxy(target, {
        set(target, prop, value, receiver){
            if(Reflect.set(target, prop, value, receiver)){
                target[handlers].forEach(handler => handler(prop, value));
                return true;
            } 

            return false;
        }
    })
  }
  
  let user = {};
  user = makeObservable(user);  
  
  user.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
  });

  user.name = "John";
  user.age = 26;