const spiritAnimals = [
  "the Spoon-Licker",
  "the Pot-Scraper",
  "the Door-Slammer",
  "the Window-Peeper",
  "the Candle-Stealer",
  "the Gully Gawk",
  "the Stubby",
  "the Bowl Licker",
  "the Doorway-Sniffer",
  "Skyr-Gobbler"
];

const userInputEL = document.getElementById("user-name");
const buttonEl = document.getElementById("convert-animal");
const nameSpaceEl = document.getElementById("animal-name");

buttonEl.addEventListener("click", renderName);
userInputEL.addEventListener("keydown", renderOnEnter);

function randomNamePicker(spiritAnimals) {
  const randomName =
    spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
  return randomName;
}

const getName = function() {
  const userInput = userInputEL.value;
  return userInput;
};

function renderName() {
  const userName = getName();
  if (userName === "") {
    nameSpaceEl.innerText = `Please enter a name!`;
  } else {
    nameSpaceEl.innerText = `${userName} - ${randomNamePicker(spiritAnimals)}`;
    userInputEL.value = "";
  }
}

function renderOnEnter(e) {
  if (e.key === "Enter") {
    renderName();
  }
}

