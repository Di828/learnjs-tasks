// Добавьте функциям декорирующий метод "defer()"

Function.prototype.defer = function(ms) {
    let funcCaller = this;
    return function(...args){
        setTimeout(() => funcCaller.apply(this, args), ms);
    }
}

function f(a, b) {
    console.log( a + b );
  }
  
  f.defer(1000)(1, 2);