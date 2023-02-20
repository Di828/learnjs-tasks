//Вывод каждую секунду

printNumbersWithSetInterval(1, 5);

function printNumbersWithSetInterval(from, to){
    let timer = setInterval(() => {
        console.log(from);
        from++;
        if (from > to){
            clearInterval(timer);
        }
    }, 1000)
}

printNumbersWithSetTimeout(11, 15);

function printNumbersWithSetTimeout(from, to){
    setTimeout(function tick() {
        console.log(from);
        from++;
        if (from <= to){
            setTimeout(tick, 1000);
        }        
    }, 1000)
}