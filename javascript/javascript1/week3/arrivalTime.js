const travelInformation = {
    speed: 50,
    distance: 432,
};

const travelTime = function (travelInfo){
    const travelDuration = travelInfo.distance / travelInfo.speed;
    const hours = Math.floor(travelDuration);
    const minutesInHundreds = travelDuration - hours;
    const minutes =  Math.floor(minutesInHundreds * 60);   
    return `The journey is ${hours} hours, ${minutes} minutes long.`;
}   
    
console.log(travelTime(travelInformation));
