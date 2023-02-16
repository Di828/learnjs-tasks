// Фильтрация по диапазону

function filterRange(arr, a, b) {
    let output = [];
    arr.forEach(element => {
       if (element >= a || element <= b) {
        output.push(element);
       }
    });

    return output;
}