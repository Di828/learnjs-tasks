// Оставить уникальные элементы массива

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));

function unique(arr){
    let output = [];
    arr.forEach(element => {
        if (!output.includes(element)){
            output.push(element);
        }
    });

    return output;
}