"use strict";

function getResult(a,b,c){
    let d = Math.pow(b, 2) - 4 * a * c;
    let x1 = 0; let x2 = 0; let xMassive = [];
    if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        xMassive.push(x1, x2);
    }
    
    if (d == 0) {
        x1 = -b / (2 * a);
        xMassive.push(x1);
    }

    return xMassive;
}

function getAverageMark(marks){
    if (marks.length > 5) {
        marks.splice(5);
        console.log("Вы ввели больше 5 оценок");
    }

    if (marks.length == 0) {
        return 0;
    }

    let sum = marks.reduce((total, value) => total + value);
    let avg = sum / marks.length;
    return avg;
}


function askDrink(name,dateOfBirthday){
    let userDate = new Date(dateOfBirthday);
    let today = new Date;
    userDate = userDate.getFullYear();
    today = today.getFullYear();

    if (today - userDate >= 18) {
        return "Не желаете ли Олд Фэшн, " + name + "?";
    }

    else {
        return "Сожалею, " + name + ", но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!"
    }
}