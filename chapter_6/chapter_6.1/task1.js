//Вычислить сумму чисел до данного

for (let i = 1; i < 25; i++){
    console.log(`${sumToWithFor(i)}, ${sumToWithRecursion(i)}, ${sumToWithArithmeticProgression(i)}`);
}

function sumToWithFor(num){
    let result = 0;
    for (let i = 1; i <= num; i++){
        result += i;
    }

    return result;
}

function sumToWithRecursion(num){
    if (num === 1){
        return 1;
    } else {
        return num + sumToWithRecursion(num - 1);
    }
}

function sumToWithArithmeticProgression(num){
    return num % 2 === 0 ? (num + 1) * num / 2 : num + (num) * ((num - 1) / 2);
}