let spiritAnimals = ["the Spoon-Licker", 
                     "the Pot-Scraper", 
                     "the Door-Slammer", 
                     "the Window-Peeper",
                     "the Candle-Stealer",
                     "the Gully Gawk",
                     "the Stubby",
                     "the Bowl Licker",
                     "the Doorway-Sniffer",
                     "Skyr-Gobbler"
                    ]


function randomNamePicker(spiritAnimals) {
    let randomName = spiritAnimals[Math.floor(Math.random()*spiritAnimals.length)];
    return randomName ;
}

let buttonEl = document.getElementById("convert-animal");

//define function
let getName = function() { 
    let userInputEL = document.getElementById("user-name").value;
    let nameSpaceEl = document.getElementById("animal-name");
    if(userInputEL === "") {
    nameSpaceEl.innerHTML =  `please enter a name`;
    } else { 
    nameSpaceEl.innerHTML =  `${userInputEL} - ${randomNamePicker(spiritAnimals)}`;
    document.getElementById("user-name").value = "";
    }
}

//addEventListener to button
buttonEl.addEventListener("click", getName);


