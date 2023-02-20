//Установка и уменьшение значения счётчика

function makeCounter() {
    let count = 0;

    function counter() {        
        return count++;        
    };

    counter.set = (value) => count = value;
    counter.decrease = () => count--;
        
    return counter;
  }
  
  let counter = makeCounter();
  counter.set(10);
  counter.decrease();
  console.log( counter() ); // 0
  console.log( counter() ); // 1