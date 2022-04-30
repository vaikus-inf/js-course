//Условия

"use strict";

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}

//Тернарный (условный) оператор. Единственный оператор в JS принимающий три операнда (аргумента)
(num == 50) ? console.log('Ok!') : console.log('Error');

switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;    
    case 50:
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз');
        break;             
}