// Вывод односвязного списка в обратном порядке

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

printReversedListRecursion(list);
printReversedListWithWhile(list);

function printReversedListRecursion(list){
    if (list === null){
        return;
    }

    printReversedListRecursion(list.next);
    console.log(list.value);
}


function printReversedListWithWhile(list){    
    let temp = list;
    let valueArr = [];

    while (temp){
        valueArr.push(temp.value);
        temp = temp.next;            
    }    

    valueArr.reverse();
    console.log(valueArr.join('\n'));
}