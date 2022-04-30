//Классификация типов данных в JS

"use strict";

//Простые типы (примитивы)

let number = 4.6; //number

console.log(4/0); //Infinity
console.log(-4/0); //-Infinity
console.log('string' * 9); //Nan

const persone = '5'; //string

const bool = true; //boolean

//console.log(something); //null

let und; //undefined
console.log(und);

//Объекты

const obj = {
    name: 'Ivan',
    age: 25,
    isMarried: false
};

console.log(obj.name);
//console.log(obj['name']); //Другой вариант обращения к свойствам объекта

let arr = ['plum.png', 'orange.jpg', 8, 'apple.bmp', {}, []]; //Массив (не объект, а частный случай объекта)
console.log(arr[1]);