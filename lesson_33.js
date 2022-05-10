//Массивы и псевдомассивы

"use strict";

const arr = [2, 8, 16, 10, 3];
//arr[99] = 0;
console.log(arr.length); //Свойство length выдает не количество элементов в массиве, а индекс последнего элемента + 1

//Сортировка чисел в массиве. Метод sort все сортирует как строки поэтому для сорт. чисел применяем доп. конструкцию.
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

arr.pop(); //Удаляет элемент в конце массива

arr.push(12); //Добавляет элемент в конце массива

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//Можно пройти по массиву с использованием цикла for of (работает с массивоподобными сущностями)
for (let value of arr) {
    console.log(value);
}

//Метод массива forEach
arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

const str = 'qqq, bbb, aaa';
const products = str.split(', ');
console.log(products);
products.sort();
console.log(products.join('; '));


//Псевдомассив - объект, структура которого совпадает со структурой массива, но у этого объекта нет никаких методов.