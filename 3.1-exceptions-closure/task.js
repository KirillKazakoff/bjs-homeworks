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
        return parseFloat(Math.sqrt(pHalf * (pHalf - this.aSide) * (pHalf - this.bSide) * (pHalf - this.cSide)).toFixed(3));
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

