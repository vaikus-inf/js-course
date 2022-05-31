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

function findMaxNumber(num1, num2, num3, num4) {
    console.log(num4);
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        return 0;
    }
    return Math.max(...[num1, num2, num3, num4]);
}

console.log(findMaxNumber(1,5,3));


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    
    showAgeAndLangs: function(personalPlanPeter) {
        const {languages} = personalPlanPeter.skills;
        return `Мне ${personalPlanPeter.age} и я владею языками: ${languages.join(' ')}`;
    }
};

function showExperience(personalPlanPeter) {
    const {exp} = personalPlanPeter.skills;
    return exp;
}

function showProgrammingLangs(personalPlanPeter) {
    const {programmingLangs} = personalPlanPeter.skills;
    let str = '';
    
    for (let key in programmingLangs) {
        str = str + `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }
    
    return str;
}


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Buba'];

function sortStudentsByGroups(arr) {
    let groups = [];
    arr.sort();
    
    for (let i = 0; i < 3; i++) {
        groups[i] = arr.splice(0, 3);
    }
    
    if (arr.length > 0) {
        groups[3] = `Оставшиеся студенты: ${arr.join(', ')}`;
    } else {
        groups[3] = 'Оставшиеся студенты: -';
    }
    
    return groups;
}

console.log(sortStudentsByGroups(students));