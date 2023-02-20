// Сумма с произвольным количеством скобок

console.log( sum(1)(2)(3)(4).toString() );

function sum(a){
    let currentSum = a;

    function f(b){
        currentSum += b;
        return f;
    }

    f.toString = () => currentSum;

    return f;
}