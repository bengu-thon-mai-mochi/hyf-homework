let lPress = 0;
let kPress = 0;
let delay = "";

let inputEl = document.querySelector(".timer");

let buttonEl = document.querySelector("button");

let winner = document.querySelector(".winner");

let allParag = document.querySelectorAll("p");


buttonEl.addEventListener("click", startGame);


function startGame(delay){ 
    delay = inputEl.value;
    
    setTimeout(() => {
        document.removeEventListener("keydown", countKeyPress);
        announceWinner(lPress, kPress);
        clearInput();  
    }, delay * 1000);

    document.addEventListener("keydown", countKeyPress);

};

function countKeyPress(e) {
    if(e.code === "KeyL"){
        lPress++;
        return L.textContent = `${lPress}`;    
    };
    if(e.code === "KeyK"){
        kPress++;
        return K.textContent = `${kPress}`;    
    }
}

function announceWinner(){
    if(lPress < kPress){
        winner.innerText = "K Press won the game. Wanna try again?" ;
    } else if(lPress > kPress) {
        winner.innerText = "L Press won the game. Wanna again?" ;
    } else if(lPress === kPress){
        winner.innerText = "Compete again!";
    } return;
}

function clearInput(delay) {
    inputEl.value = "";
}


