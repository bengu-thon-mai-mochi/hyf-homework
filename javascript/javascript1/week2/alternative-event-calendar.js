const weekDay = [
    "monday", 
    "tuesday", 
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
];

let today = new Date();
let day = today.getDay();
console.log(day);

function getEventWeekday (daysLefttoEvent) {
    let n= day + daysLefttoEvent;
    let dayOfTheEvent;
    if (n<= 7) {
        dayOfTheEvent= weekDay[n-1];
    }else if(n > 7) {
        dayOfTheEvent= weekDay[n-8];
    }
    return dayOfTheEvent;
}
console.log(getEventWeekday(0));