// 1.1. Преобразование строки к нижнему регистру, но первая буква большая. “Abscd”

function toLowerCaseWithCapitalFirst(string){    
    if (string === null || string.length === 0){
        return string;
    }

    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

// 1.2. Преобразование строки с целью правильной расстановки пробелов. 

function spaceCorrection(str){        
        
    return str.trim()
              .replace(/\s+/g, ' ')
              .replace(/\s([.,!?:;])/g, '$1')
              .replace(/([.,!?:;])([^\s])/g, '$1 $2');
}

// 1.3. Посдчитывающие кол-во слов в строке.

function wordsCount(str){
    return str.split(' ').length;
}

// 1.4. Подсчитывающий, уникальные слова.

function uniqueWordsCount(str){
    let output = new Map();

    str.split(' ').forEach(element => {
        let key = element.toLowerCase().replace(/[.,!?:;]/, '');        
        if (output.has(key)){            
            output.set(key, output.get(key) + 1);
        } else {
            output.set(key, 1);
        }
    });

    return output;
}

module.exports = { toLowerCaseWithCapitalFirst, spaceCorrection, wordsCount, uniqueWordsCount }