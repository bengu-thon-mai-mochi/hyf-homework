const travelInformation = {
    speed: 50,
    distance: 432,
};

function arrivalTimeCalculator (obj) {
    let speed = obj.speed;
    let distance = obj.distance;
    let time = distance / speed;
    let minutesInHundreds = time - Math.floor(time)
    let hours = Math.floor(time);
    let minutes =  Math.floor(minutesInHundreds * 60) ;   
    console.log(`The journey is ${hours} hours, ${minutes} minutes long.`);;
}   
    
arrivalTimeCalculator(travelInformation);

