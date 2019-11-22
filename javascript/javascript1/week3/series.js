
const humanLifeSpan = 80;
const minute = 1;
const hour = 60 * minute;
const day = 24 * hour;
const year = 365 * day

function humanLifeMinute(humanLifeSpan) {
   return year * humanLifeSpan; 
}

let humanLifeInMinutes = humanLifeMinute(80);

const seriesDurations = [
    {
      title: 'The Moomins',
      days:  1,
      hours: 15, 
      minutes: 52,
    },
    { 
      title: 'The L Word',
      days: 2,
      hours: 11,
      minutes: 10,
    },
    {
      title: 'Chernobyl',
      days: 0,
      hours: 5,
      minutes: 49,
    }
]

let series1 = seriesDurations[0];
let series2 = seriesDurations[1];
let series3 = seriesDurations[2];


function serieToMinutes (obj) {
    let serieDayToMinute = (obj.days * day) * hour;
    let serieHourToMinute = obj.hours * hour;
    let seriesMinute = serieDayToMinute + serieHourToMinute + obj.minutes;
    return seriesMinute; 
}

let firstSeriesMinutes = serieToMinutes(series1);
let secondSeriesMinutes = serieToMinutes(series2);
let thirdSeriesMinutes = serieToMinutes(series3);

let totalSeriesMinute = firstSeriesMinutes + secondSeriesMinutes + thirdSeriesMinutes;

function seriesPercentageOfHumanLife (seriesMinutes) {
    return (seriesMinutes*100) / humanLifeInMinutes;
}

console.log(`${series1.title} took ${seriesPercentageOfHumanLife(firstSeriesMinutes)}% of my life`);
console.log(`${series2.title} took ${seriesPercentageOfHumanLife(secondSeriesMinutes)}% of my life`);
console.log(`${series3.title} took ${seriesPercentageOfHumanLife(thirdSeriesMinutes)}% of my life`)
console.log(`In total that is ${seriesPercentageOfHumanLife(totalSeriesMinute)}% of my life`);