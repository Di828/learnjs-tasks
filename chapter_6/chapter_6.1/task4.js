//Вывод односвязного списка

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
printListWithWhile(list);


function printReversedListRecursion(list){
    if (list === null){
        return;
    }

    console.log(list.value);
    printReversedListRecursion(list.next);
}

function printListWithWhile(list){
    while (list !== null){
        console.log(list.value);
        list = list.next;
    }
}