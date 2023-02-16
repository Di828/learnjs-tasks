// Подмассив наибольшей суммы

function getMaxSubSum(arr){
    let result = 0;
    let maxSubSum = 0;

    for (let element of arr){
        result = result + element > 0 ? result + element : 0;
        maxSubSum = maxSubSum > result ? maxSubSum : result;
    }

    return maxSubSum;
}