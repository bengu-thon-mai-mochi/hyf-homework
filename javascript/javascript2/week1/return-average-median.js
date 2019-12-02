const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

function sumOfArray(array) {
    return array.reduce((a, b) => a + b, 0)
}

console.log(sumOfArray(housePrices));

function printAverage(array) {
    let count = array.length;
    let sum = array.reduce((a, b) => a + b, 0);
    let average = sum / count;
    return average;
}

console.log(printAverage(housePrices));


function orderNumber(a, b) {
    return a - b;
}

function printMedian(array) {
    if (array.length % 2 == 1) { //find if the array is odd 
        sortedArray = array.sort(orderNumber); //sort numeratically 
        let firstHalf = Math.floor((sortedArray.length - 1) / 2); //seperate to two halves
        let secondHalf = Math.ceil((sortedArray.length - 1) / 2);
        let middleNumber = (sortedArray[firstHalf] + sortedArray[secondHalf]) / 2;
        return middleNumber;
    } 
}

console.log(printMedian(housePrices));

function calculateHousePrices(array) {
    let average = (printAverage(array));
    let median = printMedian(array);
    let houseObject = {}
    houseObject.average = average;
    houseObject.median = median;
    return houseObject;
}

console.log(calculateHousePrices(housePrices));
