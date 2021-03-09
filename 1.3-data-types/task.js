function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict";
    let paramNames = ['percent', 'contribution', 'amount'];
    let parameters = [percent, contribution, amount];

    if (isNaN(Date.parse(date)) == true) {
        return "Введите правильную дату";
    }

    for (let i = 0; i < parameters.length; i++) {
        if (!parameters[i]) {
            return `Параметр ${paramNames[i]} не заполнен!`; 
        }        
        if (isNaN(parseInt(parameters[i])) == true) {
            return `Параметр ${paramNames[i]} содержит неправильное значение ${parameters[i]}`;
        }
    }

    let body = amount - contribution;
    let monthPercent = percent / 1200;
    let totalMonths = monthDiff(date, new Date);
    console.log(totalMonths);

    let monthPayment = body * (monthPercent + monthPercent / ((Math.pow(1 + monthPercent, totalMonths) - 1)));
    return monthPayment * totalMonths;
}

function monthDiff(d1, d2) {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months;
}

function getGreeting(name) {
    if (name == "") {
        name = 'Аноним';
    }
    return `Привет, мир! Меня зовут ${name}`;
}
