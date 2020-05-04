const redDomElement = document.querySelector('li:nth-child(1)');
const blueDomElement = document.querySelector('li:nth-child(2)');
const greenDomElement = document.querySelector('li:nth-child(3)');

const redLocationTarget = {x: 20, y: 300};
const blueLocationTarget = {x: 400, y: 300};
const greenLocationTarget = {x: 400, y: 20};

// translateOneByOne 

function translateOneByOne(){
    return new Promise(() => {
        moveElement(redDomElement, redLocationTarget)
            .then(()=> {
                console.log('red dot has moved to its spot.')
                return moveElement(blueDomElement, blueLocationTarget);
            })
            .then(() => {
                console.log('blue dot has moved to its spot.')
                return moveElement(greenDomElement, greenLocationTarget);
            })
            .then(()=> {console.log('green dot has moved to its spot.')});
    })
}
    
translateOneByOne()

//translateAllAtOnce

function translateAllAtOnce() {
    const redPromise = moveElement(redDomElement, redLocationTarget);
    const greenPromise = moveElement(blueDomElement, blueLocationTarget);
    const bluePromise = moveElement(greenDomElement, greenLocationTarget);

    Promise.all([redPromise, greenPromise, bluePromise])
        .then(() => {console.log("All dots have arrived at their spot.")})
}


translateAllAtOnce();

