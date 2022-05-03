//Функции, стрелочные функции (ES6)

"use strict";

//Function declaration (можно вызвать перед объявлением)

let num = 20; //Глобальная переменная

function showFirstMessage(text) {
    let num = 10;

    console.log(text);
    console.log(num); //Локальная переменная (доступна внутри функции где была объявлена)
}

showFirstMessage('Hello World!');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(5, 7));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

//Function expression (можно вызвать только после объявления)

const logger = function() {
    console.log('Hello');
};

logger();

//Стрелочные функции

const calcES6 = (a, b) => { 
    console.log('Sum');
    return a + b;
};

const sum = calcES6(5, 3);
console.log(sum);