const minute = 1;
const hourInMinutes = 60 * minute;
const dayInMinutes = 24 * hourInMinutes;
const yearInMinutes = 365 * dayInMinutes;
const humanLifeInMinutes = humanLifeSpan => {
  return yearInMinutes * humanLifeSpan;
};
const averageHumanLife = humanLifeInMinutes(80);

const seriesDurations = [
  {
    title: "The Moomins",
    days: 1,
    hours: 15,
    minutes: 52
  },
  {
    title: "The L Word",
    days: 2,
    hours: 11,
    minutes: 10
  },
  {
    title: "Chernobyl",
    days: 0,
    hours: 5,
    minutes: 49
  }
];

const series1 = seriesDurations[0];
const series2 = seriesDurations[1];
const series3 = seriesDurations[2];

function serieToMinutes(obj) {
  let serieDayToMinute = obj.days * dayInMinutes;
  let serieHourToMinute = obj.hours * hourInMinutes;
  let seriesMinute = serieDayToMinute + serieHourToMinute + obj.minutes;
  return seriesMinute;
}

const firstSeriesMinutes = serieToMinutes(series1);
const secondSeriesMinutes = serieToMinutes(series2);
const thirdSeriesMinutes = serieToMinutes(series3);

const totalSeriesMinute =
  firstSeriesMinutes + secondSeriesMinutes + thirdSeriesMinutes;

function seriesPercentageOfHumanLife(seriesMinutes) {
  return (seriesMinutes * 100) / averageHumanLife;
}

console.log(serieToMinutes(seriesDurations[0]));
console.log(averageHumanLife);
console.log(
  `${series1.title} took ${seriesPercentageOfHumanLife(
    firstSeriesMinutes
  )}% of my life`
);
console.log(
  `${series2.title} took ${seriesPercentageOfHumanLife(
    secondSeriesMinutes
  )}% of my life`
);
console.log(
  `${series3.title} took ${seriesPercentageOfHumanLife(
    thirdSeriesMinutes
  )}% of my life`
);
console.log(
  `In total that is ${seriesPercentageOfHumanLife(
    totalSeriesMinute
  )}% of my life`
);
