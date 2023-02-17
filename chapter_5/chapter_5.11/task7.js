// Сколько секунд осталось до завтра?

console.log(getSecondsToTomorrow());

function getSecondsToTomorrow(){
    let tomorrow = new Date();
    tomorrow.setHours(0, 0, 0);
    tomorrow.setDate(tomorrow.getDate() + 1);

    return Math.floor((tomorrow - Date.now()) / 1000);
}