//Проверка на спам

function checkSpam(str){
    let spamWords = ['viagra', 'XXX'];
    let spam = false;

    spamWords.forEach(word => {
        spam = spam || str.toLowerCase().includes(word.toLowerCase());        
    })

    return spam;
}