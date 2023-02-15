function easyNumbers (start, end){
    let output = [];
    for (let i = start; i <= end; i++)
    {
        if (isEasy(i)){
            output.push(i);
        }
    }

    return output;
}

function isEasy(number){
    if (number == 2){
        return true;
    }

    for (let i = 2; i < Math.sqrt(number) + 1; i++)
    {
        if (number % i === 0){
            return false;
        }
    }

    return true;
}