//Числа Фибоначчи

console.log(fib(77));

function fib(n){
    let fibArr = [1, 1];
    for (let i = 2; i < n; i++){
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }

    return fibArr[n - 1];
}