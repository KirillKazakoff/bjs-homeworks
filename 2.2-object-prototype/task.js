//String.prototype.isPalindrome - для задачи №1
"use strict"

String.prototype.isPalindrome = function() {
    return reverseString.bind(this)() == checkString.bind(this)();
}
function reverseString() {
    return this.split(' ').join('').split('').reverse().join('').toLowerCase();
}
function checkString() {
    return this.split(' ').join('').split('').join('').toLowerCase();
}


function getAverageMark(marks) {
    let roundedAverage = Math.round(marks.reduce((total,value) => total + value) / marks.length);
    return roundedAverage;
}


function checkBirthday(birthday) {
   let now = +new Date;
   let personBirth = +new Date(birthday);
   let diff = now - personBirth;
   let age = diff / 31600400000;
   return age >= 18;
}