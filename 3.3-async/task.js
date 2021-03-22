class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerIdentifiers = [];
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
        return `${currentDate.getHours()} : ${currentDate.getMinutes()}`;
    }
    start() {
        this.alarmCollection.forEach(alarm => {
            this.timerIdentifiers.push(checkClock.bind(this)(alarm));
        }, this);

        function checkClock(alarm) {
            const interval = getInterval.bind(this)(alarm);
            return setInterval(alarm.action, interval); 
        }
    }
    stop() {
        this.timerIdentifiers.forEach(id => clearInterval(id));
    }
    printAlarms() {
        this.alarmCollection.forEach(alarm => console.log(`id = ${alarm.id}, time = ${alarm.time}`));
    }
    clearAlarms() {
        stop();
        this.alarmCollection = [];
    }
}

function timeInMs(array) {
    return array[0] * 3600000 + array[1] * 60000;
}

function getInterval(alarm) {
    let currentTime = this.getCurrentFormattedTime().split(':');
    let alarmTime = alarm.time.split(':');
    let intervalTime = 0;
    currentTime = timeInMs(currentTime); alarmTime = timeInMs(alarmTime);
    if (alarmTime >= currentTime) {
        intervalTime = alarmTime - currentTime;
    }
    else intervalTime = 86400000 - currentTime + alarmTime;
    return intervalTime;
}

let myAlarm = new AlarmClock();


