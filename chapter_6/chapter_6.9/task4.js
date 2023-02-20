//Тормозящий (throttling) декоратор

function f(a) {
    console.log(a)
  }
    
  let f1000 = throttle(f, 1000);
  
  f1000(1); 
  f1000(2); 
  f1000(3);

function throttle(f, ms){
    let isCooldown = false;
    let lastCallArgs, savedThis;

    return function fn(...args){        

        if (isCooldown){
            lastCallArgs = args;
            savedThis = this;
            return;
        }

        f.apply(this, args);

        isCooldown = true;

        setTimeout(function() { 
            isCooldown = false;
            if (lastCallArgs){
                fn.apply(savedThis, lastCallArgs);
                lastCallArgs = savedThis = null;
            }
        }, ms)
    }    
}