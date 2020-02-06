// A user can add smartphone activities.
//Then he can see a status on how his smartphone usage is going.

const activities = [];
const date = new Date();
const dateOption = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

function addActivity(platform, duration) {
  const activity = {
    date: date.toLocaleDateString(undefined, dateOption),
    platform: platform,
    duration: duration
  };
  activities.push(activity);
}

addActivity("Youtube", 30);
console.log(activities);

function showStatus(array) {
  const today = date.toLocaleDateString(undefined, dateOption);
  const dailyTimeLimit = 100; //in minutes
  const activitiesSameDay = array.filter(activity => activity.date === today);
  const timeSpentToday = activitiesSameDay
    .map(activity => activity.duration)
    .reduce((a, b) => a + b);
  const countOfDailyActyivities = activitiesSameDay.length;
  const timeLeft = dailyTimeLimit - timeSpentToday;
  if (timeSpentToday < dailyTimeLimit) {
    return `You have ${countOfDailyActyivities} activities. Total time spend is ${timeSpentToday} minutes. 
        You have ${timeLeft} minutes left `;
  } else {
    return `You have ${countOfDailyActyivities} activities. You spent ${timeSpentToday} minutes on your phone. Above your ${dailyTimeLimit} minutes allowance.`;
  }
}

console.log(showStatus(activities));
addActivity("Instagram", 90);
console.log(showStatus(activities));

function whichAppYouSpentMoreTimeOn() {
  activities.filter(activity => activity.duration);
}
