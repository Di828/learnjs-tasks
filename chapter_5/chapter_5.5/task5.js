//Скопировать и отсортировать массив
let arr = ['QWERTY', 'ABC', 'CDE'];
let sortedArr = copySorted(arr);

console.log(arr);
console.log(sortedArr);

function copySorted(arr){
    let copiriedArr = arr.slice(0); 

    return copiriedArr.sort();
}