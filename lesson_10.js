//Провила и типы названия переменных

"use strict";

//Используем для имен переменных camelCase
const vehicleBodyWidth = 5000;
const vehicleBodyLength = 4000;

// Множественное объявление переменных (в одну строку лучше не делать)
// const vehicleBodyWidth = 5000, vehicleBodyLength = 4000;

console.log('Ширина кузова автомобиля: ' + vehicleBodyWidth + ', длина: ' + vehicleBodyLength);

//Другие стили:
//snake_case
//UPPER_SNAKE_CASE
//kebab-case
//PascalCase - используется в JS для названия классов

//если встречаем переменные в стиле UPPER_SNAKE_CASE это считается константой и ее нельзя изменять (договоренность)
let COLOR_RED = '#F010';

//такие переменные тоже нельзя изменять
const _apiKey = '12345678';