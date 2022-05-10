//Основы ООП, прототипно-ориентированное наследование.

"use strict";

//JS можно назвать прототипно-ориентированным языком (частный случай ООП).

//Создаем прототип soldier
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const jonh = {
    health: 200
};

//jonh.__proto__ = soldier; //Устаревший формат, сейчас не используется

Object.setPrototypeOf(jonh, soldier); //Современный формат. Установили прототип для jonh от soldier.

console.log(jonh);
console.log(jonh.armor);
jonh.sayHello();

//Или можно сразу создать новый объект, который будет прототипно наследоваться от soldier.
const bob = Object.create(soldier);
bob.sayHello();