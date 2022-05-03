//Логические операторы

"use strict";

//0, '', null, undefined, NaN - возвращают false
// Оператор && вернет значение последнего истинного или первого ложного
// Оператор || вернет значение первого истинного или последнего ложного

//Что выведет в консоль код?
console.log( NaN || 2 || undefined ); //2
 
console.log( NaN && 2 && undefined ); //NaN
 
console.log( 1 && 2 && 3 ); //3
 
console.log( !1 && 2 || !3 ); //false
 
console.log( 25 || null && !3 ); //25
 
console.log( NaN || null || !3 || undefined || 5); //5
 
console.log( NaN || null && !3 && undefined || 5); //5

console.log( 5 === 5 && 3 > 1  || 5); //true
// Приоретет у оператора &&, оба выражения истинны и || уже не проверяется, соответственно возвращается true от 3 > 1

//Выполняется ли условие? (Выполняется)
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }

// //Выполняется ли условие? (Выполняется)
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!');
// }

// Выполняется ли условие? (Не выполняется)
let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!');
}