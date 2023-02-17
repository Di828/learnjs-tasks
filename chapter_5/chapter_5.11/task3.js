// День недели в европейской нумерации

let date = new Date(2012, 0, 1);
console.log(getLocalDay(date))

function getLocalDay(date){
    let day = date.getDay();
    return day == 0 ? 7 : day;
}