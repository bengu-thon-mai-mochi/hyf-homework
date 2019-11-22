const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

// Write some code here
function itemRemoval (arr, elem) { 
    if (arr.includes(elem) === true ) {
        let indexOfElemInArr = arr.indexOf(elem);
        arr.splice(indexOfElemInArr, 1);
        console.log(arr);
    } 
    return;
}
// Code done

itemRemoval(names, nameToRemove);