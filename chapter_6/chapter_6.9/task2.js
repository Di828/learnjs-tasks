//Задерживающий декоратор

function f(x) {
    console.log(x);
  }
  
  let f1000 = delay(f, 1000);
  let f1500 = delay(f, 2500);
  
  f1000("test");
  f1500("test");

function delay(func, time){
    function wrapper(...args){
        return setTimeout(() => func.apply(this, args), time);
    }

    return wrapper;
}