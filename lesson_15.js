//Операторы в JS

"use strict";

//Конкатенация
console.log('arr' + " - object");

//Использование унарного плюся для преобразования типа
console.log(4 + +'5');

let incr = 10,
    decr = 10;

//incr++ (постфиксный инкремент)
//decr-- (постфиксный декремент)
// Сперва возвращает текущее значение, а потом его изменяет
console.log(incr++);
console.log(decr--);

//++incr (префиксный инкремент)
//--decr (префиксный декремент)
//Сразу изменяет значение и возвращает уже измененное
console.log(++incr);
console.log(--decr);

//Остаток от деления
console.log(5 % 2);

//Обычное сравнение без учета типа данных (в 1-м случае true, во 2-м - false)
console.log(2 * 4 == '8');
console.log(2 * 4 != '8');
//Строгое сравнение с учетом типа данных (в 1-м случае false, во 2-м - true)
console.log(2 * 4 === '8');
console.log(2 * 4 !== '8');

//Логические операторы && - и, || - или, ! - оператор отрицания (not)
const isChecked = true,
      isClose = false;

console.log(isChecked && isClose);
console.log(isChecked || isClose);
console.log(!isChecked || isClose);