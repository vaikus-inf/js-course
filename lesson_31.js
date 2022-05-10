//Callback-функции

"use strict";

function first() {
    //Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

//Callback-функция это функция, которая должна быть выполнена после того как другая функция завершила свое выполнение

//Пример callback-функции

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

// learnJS('JavaScript', function() {
//     console.log('Я прошел этот урок!');
// });

//Или так
function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);