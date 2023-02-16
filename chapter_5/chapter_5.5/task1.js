//Переведите текст вида border-left-width в borderLeftWidth

function camelize(str){
    let words = str.split('-');
    for (let i = 1; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1, words[i].length);
    }

    return words.join('');
}