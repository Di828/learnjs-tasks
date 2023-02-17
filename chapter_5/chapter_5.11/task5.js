// Последнее число месяца?
const MONTHES_COUNT = 12;

for (let i = 0; i < MONTHES_COUNT; i++)
console.log(getLastDayOfMonth(2012, i));

function getLastDayOfMonth(year, month){
    let lastDay = 28;
    let date = new Date(year, month);

    while (true){
        date.setDate(lastDay + 1);
        if (date.getMonth() !== month){
            break;
        }

        lastDay++;
    }

    return lastDay;
}