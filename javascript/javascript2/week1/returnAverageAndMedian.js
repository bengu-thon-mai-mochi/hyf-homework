const housePrices = [
    3000000,
    3500000,
    1300000,
    40000000,
    100000000,
    8000000,
    2100000
];
const evenHousePrices = [
    15000,
    3000000,
    3500000,
    1300000,
    40000000,
    100000000,
    8000000,
    2100000
];
  
function calcAverage(array) {
    const count = array.length;
    const sum = array.reduce((a, b) => a + b, 0);
    const average = sum / count;
    return average;
}
  
console.log(calcAverage(housePrices));
  
function sortNumber(a, b) {
    return a - b;
}
  
function findMedian(array) {
    const sortedNumbers = array.sort(sortNumber);
    if (sortedNumbers.length % 2 === 1) {
      const middleNumberIndex = Math.round(sortedNumbers.length / 2);
      const middleNumber = sortedNumbers[middleNumberIndex];
      return middleNumber;
    } else {
      const lesserNumberIndex = Math.trunc(sortedNumbers.length / 2);
      const greaterNumberIndex = lesserNumberIndex + 1;
      const middleNumber =
        (sortedNumbers[lesserNumberIndex] + sortedNumbers[greaterNumberIndex]) /
        2;
      return middleNumber;
    }
}
  
console.log(findMedian(housePrices));
console.log(findMedian(evenHousePrices));
  
function calcAverageAndMedian(array) {
    const average = calcAverage(array);
    const median = findMedian(array);
    const houseObject = {};
    houseObject.average = average;
    houseObject.median = median;
    return houseObject;
}
  
console.log(calcAverageAndMedian(housePrices));
