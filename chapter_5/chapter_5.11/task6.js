//Сколько сегодня прошло секунд?

console.log(getSecondsToday());

function getSecondsToday(){
    let today = new Date();
    today.setHours(0, 0, 0);        

    return Math.floor((Date.now() - today) / 1000);
}