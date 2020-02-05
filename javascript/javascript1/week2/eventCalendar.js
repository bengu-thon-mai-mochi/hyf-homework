const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];

const date = new Date();
const todaysIndex = date.getDay(); //index of sunday is 0 / Sunday - Saturday : 0 - 6

function getEventDay(daysLefttoEvent) {
  const eventDay = days[(todaysIndex + daysLefttoEvent) % 7];
  return eventDay;
}

console.log(getEventDay(10));
