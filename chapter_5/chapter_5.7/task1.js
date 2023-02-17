//Фильтрация уникальных элементов массива

function unique(arr) {
    let output = new Set();
    arr.forEach(element => {
       output.add(element) ;
    });    

    return Array.from(output);
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) );