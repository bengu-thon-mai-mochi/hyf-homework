const keyAPI = "higcc0zUp9wTE7QGwWNxJKy1ne0dtmzX";

let gifSources = [];

let userInputEl = document.querySelector(".search-input");
let limitInputEl = document.querySelector(".limit-input");
let buttonEl = document.querySelector("button");
let bodyEl = document.querySelector("body");

buttonEl.addEventListener("click", fetchImages);

let displayGifs = function (array) {
  array.forEach(element => {
      gif = document.createElement("img");
      gif.src = element;
      bodyEl.appendChild(gif);
  });
}

let renderData = function (image){
  for (let i = 0; i < image.data.length; i++) {
    gifSources.push(image.data[i]["images"]["downsized"]["url"]);
  }
  displayGifs(gifSources);
}

function fetchImages(e, userInput, userLimit){
  e.preventDefault();

  userInput = userInputEl.value;
  userLimit = limitInputEl.value;

  fetch(`http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${keyAPI}&limit=${userLimit}`)
      .then (res => res.json())
      .then (renderData)
                     
}