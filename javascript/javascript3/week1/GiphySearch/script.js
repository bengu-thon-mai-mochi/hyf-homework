const keyAPI = "higcc0zUp9wTE7QGwWNxJKy1ne0dtmzX";

let gifSources = [];

let userInputEl = document.querySelector(".search-input");
let limitInputEl = document.querySelector(".limit-input");
let buttonEl = document.querySelector("button");
let bodyEl = document.querySelector("body");

buttonEl.addEventListener("click",  onClickEvent);

function fetchImages(userInput, userLimit) {
    userInput = userInputEl.value;
    userLimit = limitInputEl.value;

  if (userLimit === "") {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${keyAPI}&limit=1`
    )
      .then(res => res.json())
      .then(myJson =>
        gifSources.push(myJson.data[0]["images"]["downsized"]["url"])
      );
    console.log(gifSources);
  } else {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${keyAPI}&limit=${userLimit}`
    )
      .then(res => res.json())
      .then(function(myJson) {
        for (let i = 0; i < userLimit; i++) {
          gifSources.push(myJson.data[i]["images"]["downsized"]["url"]);
        }
      });
  }

}

function displayGifs(array) {
 
    array.forEach(element => {
        gif = document.createElement("img");
        gif.src = element;
        bodyEl.appendChild(gif);
    });

}
