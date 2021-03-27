"use strict"
class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, action, id) {
        if (id === undefined) throw new Error('id wasnt found');
        if (this.alarmCollection.findIndex(alarm => alarm.id == id) !== -1) {
            console.error('there is existing alarm with the same id');
            return 0;
        }
        return this.alarmCollection.push({time: time, action: action, id: id});
    }
    removeClock(id) {
        let result = this.alarmCollection.findIndex(alarm => alarm.id == id);
        if (result == -1) return false;
        else {
            this.alarmCollection.splice(result, 1);
            return true;
        }
    }
    getCurrentFormattedTime() {
        let currentDate = new Date();
        formateDate("getHours"); formateDate("getMinutes");

        function formateDate(property) {
            let prop = currentDate[property]();
            if (prop < 10) {
                prop = `0${property}`;
            }
            currentDate[property] = prop;
        }
        return `${currentDate.getHours}:${currentDate.getMinutes}`;
    }
    start() {
        if (this.timerId === null) {
            this.timerId = setInterval(enumAlarms.bind(this), 5000);
        }

        function enumAlarms() {
            this.alarmCollection.forEach(alarm => {
                checkClock.bind(this)(alarm);
            }, this); 
        }

        function checkClock(alarm) {
            if (alarm.time == this.getCurrentFormattedTime()) alarm.action();
        }
    }
    stop() {
        clearInterval(this.timerId);
    }
    printAlarms() {
        this.alarmCollection.forEach(alarm => console.log(`id = ${alarm.id}, time = ${alarm.time}`));
    }
    clearAlarms() {
        stop();
        this.alarmCollection = [];
    }
}

// function timeInMs(array) {
//     return array[0] * 3600000 + array[1] * 60000;
// }

// function getInterval(alarm) {
//     let currentTime = this.getCurrentFormattedTime().split(':');
//     let alarmTime = alarm.time.split(':');
//     let intervalTime = 0;
//     currentTime = timeInMs(currentTime); alarmTime = timeInMs(alarmTime);
//     if (alarmTime >= currentTime) {
//         intervalTime = alarmTime - currentTime;
//     }
//     else intervalTime = 86400000 - currentTime + alarmTime;
//     return intervalTime;
// }

let myAlarm = new AlarmClock();


