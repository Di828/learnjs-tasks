// Операции с массивами

let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');

styles[(styles.length - styles.length % 2) / 2] = 'Классика';

alert( styles.shift() );

styles.unshift('Рэп','Рэгги');