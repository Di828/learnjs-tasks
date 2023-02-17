// Форматирование относительной даты

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

console.log( formatDate(new Date(new Date - 86400 * 1000)) ); // вчера

function formatDate(date){
    const SECONDS_IN_MINUTE = 60;
    const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * 60;
    let passedTimeInSeconds = (Date.now() - date) / 1000;    

    if (passedTimeInSeconds <= 1){
        return "прямо сейчас";
    }

    if (passedTimeInSeconds <= SECONDS_IN_MINUTE){
        return `${passedTimeInSeconds} сек. назад`;
    }

    if (passedTimeInSeconds <= SECONDS_IN_HOUR){
        return `${Math.round(passedTimeInSeconds / 60)} мин. назад`;
    }

    let d = [
        '0' + date.getDate(),        
        '0' + (date.getMonth() + 1),        
        '' + date.getFullYear(),
        '0' + date.getHours(),
        '0' + date.getMinutes(),
    ].map(item => item.slice(-2));

    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}