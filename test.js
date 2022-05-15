const result = getSum(5, 6);
console.log(result);

function getSum(a, b) {
    return a + b;
}

console.log(typeof(NaN));

function foo(a,b) {
    const [first] = a;
    const {eng} = b;
 
    return `${first} ${eng}`;
}
 
const result1 = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});
console.log(result1);

console.log([] + false - null + true);

console.log([] + 1 + 2);

console.log(!!(1 && 2));

console.log('Ёжик' > 'яблоко');