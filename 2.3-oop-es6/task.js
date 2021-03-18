"use strict"
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(percents) {
        if(percents < 0) {
            this._state = 0;
        }
        if (percents > 100) {
            this._state = 100;
        }
        else this._state = percents;
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount)  {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount)  {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount)  {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount)  {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);


class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    
    findBookBy(type, value) {
        let result = this.books.find(book => book[type] == value)
        if (!!result) return result;
        else return null;
    }

    giveBookByName(bookName) {
        let result = this.findBookBy("name", bookName);
        if (!!result) {
            this.books.splice(this.books.indexOf(result),1);
            return result;
        }
        else return null;
    }

}

const library = new Library("Библиотека имени Ленина");
library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));



class StudentLog {
    constructor(name) {
        this.name = name;
    }

    getName = () => this.name;

    addGrade(grade, subject) {
        if (!!!this.hasOwnProperty([subject])) {
            this[subject] = [];
        }
        if (grade > 1 && grade < 6 && typeof grade == "number") {
            this[subject].push(grade);
        }
        else console.log("Вы ввели неправильное значение");
        return this[subject].length;
    }
    getAverageBySubject(subject) {
        if (!!!this.hasOwnProperty([subject])) return 0;
        else {
            return this[subject].reduce((total, mark) => total + mark) / this[subject].length;
        }
    }
    getTotalAverage() {
        let avgArray = [];
        for (let subject in this) {
            if(Array.isArray(this[subject])) {
                avgArray.push(this.getAverageBySubject(subject));
            }
        }
        if (avgArray.length == 0) return 0;
        else return avgArray.reduce((total, mark) => total + mark) / avgArray.length;
    }

}

const log = new StudentLog('Олег Никифоров');
log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry')); 
console.log(log.getAverageBySubject('algebra')); 

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

// ----------- Extra for lections ----------------- //

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