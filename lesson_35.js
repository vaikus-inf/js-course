//Передача по ссылке или по значению. Spread оператор (ES6-ES9).

"use strict";

//У примитивных типов данных передача данных по значению
let a = 5,
    b = a; //в b передается значение переменной a

b = b + 5;

console.log(b);
console.log(a);


//У объектов передача данных по ссылке
const obj = {
    a: 5,
    b: 1
};

const copy = obj; //в copy передается ссылка на obj, а не создается новый объект

copy.a = 10;

console.log(copy);
console.log(obj);


//Создание поверхностной копии объекта при помощи цикла

function copyObjFunc(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyObjFunc(numbers);

newNumbers.a = 10;

//При создании поверхностной копии вложенные объекты не копируются, на них созается ссылка, изменения применятся к обоим объектам.
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);


//Создание поверхностной копии объекта при помощи метода assign (объединяет несколько объектов, при этом создавая новый)

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add))

const clone = Object.assign({}, add); //Объединив пустой объект и объект с данными, получаем копию объекта

clone.d = 20;

console.log(add);
console.log(clone);


//Создание поверхностной копии массива при помощи метода slice

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'abcde';
console.log(oldArray);
console.log(newArray);


//Spread оператор (оператор разворота)

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 8];
log(...num); //Spread оператор раскладывает массив на отдельные элементы

//Создание поверхностной копии при помощи Spread оператора

const array = ['a', 'b'];

const copyArray = [...array]

const oldObj = {
    one: 1,
    two: 2
};

const newObj = {...oldObj};

console.log(copyArray);
console.log(newObj);