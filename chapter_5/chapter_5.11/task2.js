//Покажите день недели

let date = new Date(2012, 0, 3);

console.log(getWeekDay(date));

function getWeekDay(date){
    days = ['ВС','ПН','ВТ','СР','ЧТ','ПТ','СБ'];
    return days[date.getDay()];
}