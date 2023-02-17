//Отфильтруйте анаграммы

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));

function aclean(arr){
    let anagramMap = new Set();
    let output = [];

    arr.forEach(element => {
        if (!anagramMap.has(Array.from(element).sort().join('').toLowerCase())){
            output.push(element);
            anagramMap.add(Array.from(element).sort().join('').toLowerCase());
        }
    });

    return output;
}