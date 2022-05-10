// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// data.forEach((item, i) => {
//     if (typeof item === "string") {
//         data[i] = `${item} - done`;
//     } else {
//         data[i] = item * 2;
//     }
// });

//console.log(data);

// for (let i = data.length; i > 0; i--) {
//     result.push(data[i-1]);
// }

// console.log(result);

let result = '';
const lines = 5;
let n = 1;
for (let i = 0; i <= lines; i++) {

    for (let j = 1; j <= lines - i; j++) {       
        result += ' ';
    }

    for (let k = 0; k < n; k++) {
        result += '*';
    }       
    
    n = n + 2;
    result += '\n';
}

console.log(result);


function getMathResult(base, repeat) {
    
    let str = String(base);
    
    if (isNaN(repeat) || repeat <= 0) {
        return base;
    } else {
        for (let i = 2; i <= repeat; i++) {
            //str = str + '---' + String(base * i);
            str = `${str}---${String(base * i)}`;
        }
    }
    
    return str;
}

console.log(getMathResult(5, 3));