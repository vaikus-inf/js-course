//Динамическая типизация в JS

"use strict";

//To String

// 1) String
console.log(typeof(String(null)));
console.log(typeof(String(8)));

// 2) Конкатенация (при сложении со строкой всегда получаем строку)
console.log(typeof(5 + ''));

//To Number

// 1) Number
console.log(typeof(Number('8')));

// 2) Унарный плюс
console.log(typeof(+'5'));

// 3) Метод ParseInt
console.log(typeof(parseInt('15px', 10)));

//To boolean

//Возвращает false - 0, '', null, undefined, NaN

// 1) Изменяем значение переменной
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2) Boolean
console.log(typeof(Boolean('8')));

// 3) Два знака отрицания
console.log(typeof(!!'123'));