//Усечение строки

console.log(truncate('Pink elephant', 4))

function truncate(str, maxlength){
    if (str.length > maxlength){
        str = str.slice(0, maxlength - 1) + '…';
    }

    return str;
}