const clothesToWear = function wearMe(temperature) {
  if (temperature > 30) {
    return "You should take your swimming suits with you";
  }
  else if (temperature <= 30 &&  temperature >= 20) {
    return "Shorts and tshirts!";
  }
  else if (temperature < 20 && temperature > 10) {
    return "Jeans and tshirts";
  }
  else if (temperature <= 10 && temperature > 0) {
    return "Winter coat";
  }
  else if (temperature <= 0) {
    return "Arctic clothes";
  }
  else {
    return "What's the temperature? ";
  }
}

console.log(clothesToWear(33));