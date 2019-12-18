function delayer(delay, stringToLog) {
    return function timer(){setTimeout(() => console.log(stringToLog) ,delay)};
}

let buttonDelay = delayer(2000, 'Called after 2 secs');

const catButtonEl = document.querySelector(".cats");
catButtonEl.addEventListener("click", buttonDelay);


const Earth = function planetOne(){console.log('earth')};
const Saturn = function planetTwo(){console.log('saturn')};

function planetLogger(planetLogFunction) {
    return planetLogFunction();
}

planetLogger(Earth);
planetLogger(Saturn);

const findUserPosition = function () {
    function userLocation(pos) {
        currentPos = pos.coords;
        lat = currentPos.latitude;
        long = currentPos.longitude;
        console.log(`User is on ${lat} latitude, ${long} longitude`);
    }

    function locationError(positionError){
        console.log(positionError);
    }

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(userLocation, locationError);
    }
};

const locationButtonEl = document.querySelector(".location");
locationButtonEl.addEventListener("click", findUserPosition);


function runAfterDelay(delay, callback) {
    return setTimeout(callback, delay)
}  

function rabbit() {
    console.log("Rabbit after 2 sec!");
}

runAfterDelay(2000, rabbit);
runAfterDelay(4000, Earth);
runAfterDelay(10000, Saturn);


const ourWebpage = document.body
ourWebpage.addEventListener("dblclick", doubleClickLogger)

function doubleClickLogger() {
    console.log("It's a double click!")
}


function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    logFunnyJoke = function (){
        console.log("I'm a funny joke!")
    }

    logBadJoke = function(){
        console.log("I'm a horrible joke!")
    }

    if(shouldTellFunnyJoke === true){ 
        return logFunnyJoke();
    } else {
        return logBadJoke();
    }
}

jokeCreator(true);
jokeCreator(false);

//Functions as variable

//first exercise

function one(){
    console.log("first func");
}
function two(){
    console.log("second func");
}
function three(){
    console.log("third func")
}

let arr = [one, two, three];

arr.forEach(item => item());

//second exercise

const foonc = function bar() {
    console.log("I'a am constant function")
}

function bar() {
    console.log("I'a am bar function")
}

foonc();
bar();

// third exercise

const obj = {firstObj: foonc};

obj.firstObj(); 




