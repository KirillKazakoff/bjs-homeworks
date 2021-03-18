"use strict"
function parseCount(value) {
    let result = parseInt(value);
    if(isNaN(result)) {
        throw new Error("Невалидное значение")
    };
    return result;
}

function validateCount(value) {
    try {
        return parseCount(value);
    }
    catch(error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.aSide = a;
        this.bSide = b;
        this.cSide = c;
    }
    getPerimeter() {
        return this.aSide + this.bSide + this.cSide;
    }
    
    getArea() {
        let pHalf = this.getPerimeter() / 2;
        return Math.sqrt(pHalf * (pHalf - this.aSide) * (pHalf - this.bSide) * (pHalf - this.cSide)).toFixed(3);
    }

}


function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch(error) {  
        return {  
            getArea() {
                return "Ошибка! Треугольник не существует"
            },
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            }
            
        }
    }
}


let firstTriangle = new Triangle(6, 10, 15);

// callbacks
const fakeNames = { 
    0: "Petya",
    1: "Kolya",
    2: "Sasha",
    length: "3",
    forEach: function(callback) {
       for (key in this) {
           if (key !== 'length') {
               callback(this[key])
           }
           
       }   
    }
}

//reduce

const students = [
    {
        name: "joba",
        age: "22"
    },
    {
        name: "joba",
        age: "23"
    },
    {
        name: "joba",
        age: "24"
    },
    {
        name: "joba",
        age: "23"
    },
    {
        name: "joba",
        age: "22"
    }
]

const agesStudents = students.reduce((ages, student) => { //ages - object, student - current value(object)
    const currentAge = student.age;

    if (!ages[currentAge]) currentAge = [];

    ages[currentAge].push(student.name);

    return ages;  
}, {}) //{} - initial empty object

// "dsf".startsWith('d') = true

let memory = '';

students.some(student => {
    let memory = memory + student.name;

    if (memory.length > 50) return true;

    console.log(student.name);
    return;
})


// можно использовать для прерывания forEach?

// leetcode - задачи для js

// мемонизация? меморизация? мемоизация?