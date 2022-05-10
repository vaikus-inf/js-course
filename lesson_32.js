//Объекты, деструктуризация объектов (ES6)

"use strict";

const options = {
    name: 'test name',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    //Создаем метод объекта
    makeTest: function() {
        console.log('Test');
    }
};

console.log(options.name);

//console.log(options['colors']['border']);

console.log(options.colors.border);

delete options.name;

console.log(options);

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);        
        }
    } else {
            console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

console.log(Object.keys(options)); //Метод keys создает массив из ключей объекта
console.log(Object.keys(options).length);

options.makeTest();

//Деструктуризация объекта (разделение на более мелкие части, присваивание свойств объекта отдельным переменным)

//Чтобы не записывать такие структуры - options['colors']['border'], можно применить деструктуризацию
const {border, bg} = options.colors;
console.log(border);