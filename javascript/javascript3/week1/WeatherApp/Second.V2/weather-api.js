console.log("I'm up!")

const keyApi = "7152c37d25eab14794cf968cf52cf5d7" 
let weatherInfo = {};

let userLocationEl = document.querySelector(".user-location");

let submitButtonEl = document.querySelector(".submit-location");

let informationTable = document.querySelector(".information-table");

let main = document.querySelector("main")

let body = document.querySelector("body")

submitButtonEl.addEventListener("click", fetchData);


function fetchData(e, userLocation){
        e.preventDefault();
        userLocation = userLocationEl.value;

        if(userLocation === ""){
                errorInfo = document.createElement("p");
                main.appendChild(errorInfo);
                errorInfo.classList = "error"
                informationTable.innerText = "Please enter your city!";
        } else { 
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${keyApi}`)
                        .then (res => res.json())
                        .then (city => weatherInfo.city = city.name)
                        .catch(error => informationTable.innerText = "Something went wrong. Please make sure you entered a valid location!")
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&units=metric&appid=${keyApi}`)
                        .then (res => res.json())
                        .then (temperature => weatherInfo.temp = temperature.main.temp)
                        .catch(error => informationTable.innerText = "Something went wrong. Please make sure you entered a valid location!")
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${keyApi}`)
                        .then (res => res.json())
                        .then (clouds => weatherInfo.cloud = clouds.weather[0].description)
                        .catch(error => informationTable.innerText = "Something went wrong. Please make sure you entered a valid location!")
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${keyApi}`)
                        .then (res => res.json())
                        .then (icon => weatherInfo.iconCode = icon.weather[0].icon)
                        .catch(error => informationTable.innerText = "Something went wrong. Please make sure you entered a valid location!")
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${keyApi}`)
                        .then (res => res.json())
                        .then (windSpeed => weatherInfo.wind= windSpeed.wind.speed)
                        .catch(error => informationTable.innerText = "Something went wrong. Please make sure you entered a valid location!")
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${keyApi}`)
                        .then (res => res.json())
                        .then (whenSunrise => weatherInfo.sunrise = unixTimeConverter(whenSunrise.sys.sunrise))
                        .catch(error => informationTable.innerText = "Something went wrong. Please make sure you entered a valid location!")
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${keyApi}`)
                        .then (res => res.json())
                        .then (whenSunset => weatherInfo.sunset = unixTimeConverter(whenSunset.sys.sunset))
                        .catch(error => informationTable.innerText = "Something went wrong. Please make sure you entered a valid location!")
                        
                createInfoTable(weatherInfo);
                } 
        

}


function createInfoTable(object) {

        Object.keys(object).forEach(function(item){
                tableEl = document.createElement("table");
                informationTable.appendChild(tableEl);
                itemName = document.createElement("tr");
                itemName.innerText = item;
                if(itemName.innerText == "iconCode"){
                        icon = document.createElement("img");
                        itemName = document.createElement("tr");
                        itemName.innerText = "sky";
                        icon.src = `http://openweathermap.org/img/wn/${object[item]}.png`;
                        icon.alt = "icon has a weather symbol depending on temperature"
                        icon.classList = "weather-icon";
                        tableEl.appendChild(itemName);
                        itemName.appendChild(icon);
                } else { 
                        tableEl.appendChild(itemName);
                        itemValue = document.createElement("td");
                        itemValue.innerText = object[item];
                        itemName.appendChild(itemValue);     
                }
        })

}


function unixTimeConverter(unixTime) {
        dateObj = new Date(unixTime * 1000); 
        utcString = dateObj.toUTCString(); 
        time = utcString.slice(-11, -7);
        return time;
}





