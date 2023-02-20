//Декоратор debounce
function f(arg) {
    console.log(arg);
}

f = debounce(f, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500);

function debounce(f, ms){
    isCooldown = false;

    return function(...args) {
        if (isCooldown){
            return;
        }
        
        f.apply(this, args);

        isCooldown = true;

        setTimeout(() => isCooldown = false, ms)
        
    }
}