const candyPricePerGram = {
    Sweet: 0.5,
    Chocolate: 0.7,
    Toffee: 1.1,
    "Chewing-gum": 0.03
};
  
const boughtCandyPrices = [];
const amountToSpend = Math.random() * 100;
  
function addCandy(candyType, weight) {
    //weight is in grams
    const candyPrice = candyPricePerGram[candyType] * weight;
    boughtCandyPrices.push(candyPrice);
    return candyPrice;
}
  
function canBuyMoreCandy() {
    const sum = boughtCandyPrices.reduce((a, b) => a + b);
    if (sum < amountToSpend) {
      return "You can buy more, so please do!";
    } else {
      return "Well you don't have money anymore";
    }
}
  
console.log(addCandy("Sweet", 20));
console.log(canBuyMoreCandy());