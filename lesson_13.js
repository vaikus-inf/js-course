//Простое общение с пользователем

"use strict";

//alert ('Hello');

//const result = confirm('Are you here?');
//console.log(result);

//const answer = prompt('Вам есть 18?', '18'); //Вернет строку 
////const answer = +prompt('Вам есть 18?', '18'); //А так вернет число
//console.log(answer+5);
//console.log(typeof(answer));

const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

document.write(answers);

console.log(typeof(answers)); //Массив это не отдельный тип данных, а частный случай объекта
console.log(typeof(null)); //null отдельный тип данных, но выводит object (признанная ошибка)