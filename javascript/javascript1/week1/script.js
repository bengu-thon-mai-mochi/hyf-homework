
// freecodecamp username: bengu-mochi

//Age-ify (A future age calculator)

//assigning values 
let yearOfBirth = 2026;
let yearFuture = 2070;
//assigning values 

// type of variables
console.log(typeof yearFuture); 
console.log(typeof yearOfBirth); 
//type of variables

//age formulation 
var age = yearFuture - yearOfBirth;
//age formulation 

//log out 
console.log("You will be " + age+  " in " + yearFuture);
//log out 


//Goodboy-Oldboy (A dog age calculator)

//values 
let dogYearOfBirth = 1970;
let dogYearFuture = 2070;
let dogAge =  dogYearFuture - dogYearOfBirth;
let ageOfDogInHumanYear = dogAge * 7 ;
//values 

//boolean 
//log out for dog age//
if(shouldShowResultInDogYears = true) {
  console.log("Your dog will be " + dogAge + " dog years old" + " in " + dogYearFuture)
} else {
  console.log("Your dog will be " +  ageOfDogInHumanYear + " human years old" + " in " + dogYearFuture)
} 
//log out for dog age//
//boolean 

//Housey pricey (A house price estimator)

let housePeter = {
  width:"8",
  depth:"10",
  height:"10", 
  gardenSizeInM2:"100"
};
let volumeInMeters = housePeter.width * housePeter.depth * housePeter.height;
let housePricePeter = volumeInMeters * 2.5 * 1000 + housePeter.gardenSizeInM2 * 300;

if(housePricePeter< 2500000) {
  console.log("warning: gentrification detected! you are overpaying!")
} else {
  console.log("buy it!!!")
} 

let houseJulia = {
  width:"5", 
  depth:"11", 
  height:"8", 
  gardenSizeInM2:"70"}
;

let housePriceJulia = volumeInMeters * 2.5 * 1000 + houseJulia.gardenSizeInM2 * 300;
if(housePriceJulia< 1000000) {
  console.log("warning: gentrification detected")
} else {
  console.log("buy it!!! it's cheap.")
} 

// Ez Namey (Startup name generator) Optional 


// define array items //
let firstWords = ["Splendid", "Elegant", "Pretty", "Brilliant", "Dazzling", "Glittering", "Gorgerous", "Marvelous", "Magnificent", "Lustrous"];
let secondWords = [ " Tardrigade", " E.Coli", " Lampyris Noctiluca", " Aequorea victoria", " Watasenia scintillans", " Pyrosoma", " Echiniscus", " Tactopoda", " Archechiniscus", " Callinectes sapidus"];
//create variable for random startup name 
let randomName = firstWords[Math.floor(Math.random()*10)] + secondWords[Math.floor(Math.random()*10)];
//
console.log("The startup name: " + randomName);