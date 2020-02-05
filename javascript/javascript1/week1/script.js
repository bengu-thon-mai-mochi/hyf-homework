// freecodecamp username: bengu-mochi

//Age-ify (A future age calculator)

  //assigning values 
const yearOfBirth = 2026;
const yearFuture = 2070;

  // log type of variables
console.log(typeof yearFuture); 
console.log(typeof yearOfBirth); 

  //age formulation 
const age = yearFuture - yearOfBirth;

  //log out calculation report
console.log(`You will be ${age} in ${yearFuture}`);

//Goodboy-Oldboy (A dog age calculator)
 
const dogYearOfBirth = 1970;
const dogYearFuture = 2070;
const dogAge = dogYearFuture - dogYearOfBirth;
const ageOfDogInHumanYear = dogAge * 7;

function dogAgeCalculator(showDogYears) {
  if (showDogYears) {
    console.log(`Your dog will be ${dogAge} dog years old in ${dogYearFuture}`);
  } else {
    console.log(`Your dog will be ${ageOfDogInHumanYear} human years old in ${dogYearFuture}`);
  }
}
dogAgeCalculator(true);
dogAgeCalculator(false);


//Housey pricey (A house price estimator)

const housePeter = {
  width: "8",
  depth: "10",
  height: "10",
  gardenSizeInM2: "100"
};
const volumeInMeters = housePeter.width * housePeter.depth * housePeter.height;
const housePricePeter = volumeInMeters * 2.5 * 1000 + housePeter.gardenSizeInM2 * 300;

if (housePricePeter < 2500000) {
  console.log("warning: gentrification detected! you are overpaying!");
} else {
  console.log("buy it!!!");
}

const houseJulia = {
  width: "5",
  depth: "11",
  height: "8",
  gardenSizeInM2: "70"
};
const housePriceJulia =
  volumeInMeters * 2.5 * 1000 + houseJulia.gardenSizeInM2 * 300;

if (housePriceJulia < 1000000) {
  console.log("warning: gentrification detected");
} else {
  console.log("buy it!!! it's cheap.");
}

// Ez Namey (Startup name generator) Optional

// define array items //
const firstWords = [
  "Splendid",
  "Elegant",
  "Pretty",
  "Brilliant",
  "Dazzling",
  "Glittering",
  "Gorgerous",
  "Marvelous",
  "Magnificent",
  "Lustrous"
];
const secondWords = [
  "Tardrigade",
  "E.Coli",
  "Lampyris Noctiluca",
  "Aequorea victoria",
  "Watasenia scintillans",
  "Pyrosoma",
  "Echiniscus",
  "Tactopoda",
  "Archechiniscus",
  "Callinectes sapidus"
];
//create variable for random startup name

const randomStartupName = `${getRandomName(firstWords)} ${getRandomName(secondWords)}`;

function getRandomName(wordArray){
  return wordArray[Math.floor(Math.random() * wordArray.length)];
}

console.log(`Here you go! Your start-up name: ${randomStartupName}`);
