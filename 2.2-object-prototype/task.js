//String.prototype.isPalindrome - для задачи №1
String.prototype.isPalindrome = function() {    
    this.reverseString = reverseString;
    if(this.reverseString = this.split(' ').join('').toLowerCase()) {
        return true;
    }
    else return false;
}

function reverseString() {
    return this.split(' ').reverse().join('').toLowerCase();
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
   if (age >= 18) {
        return true;
   }
   else return false;
}