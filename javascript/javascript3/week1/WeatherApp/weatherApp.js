console.log("I'm up!")

const keyApi = "7152c37d25eab14794cf968cf52cf5d7" 

let weatherInfo = {};

let userLocationEl = document.querySelector(".user-location");

let submitButtonEl = document.querySelector(".submit-location");

let informationTable = document.querySelector(".information-table");

let main = document.querySelector("main")

let body = document.querySelector("body")

submitButtonEl.addEventListener("click", fetchData);

let renderData = function renderingData(weatherData){
        if(weatherData.cod === "400"){
                errorInfo = document.createElement("p");
                main.appendChild(errorInfo);
                errorInfo.classList = "error"
                informationTable.innerText = "Please enter your city.";
        } else if(weatherData.cod === "404"){
                errorInfo = document.createElement("p");
                main.appendChild(errorInfo);
                errorInfo.classList = "error"
                informationTable.innerText = "Please make sure you entered a valid location.";
        } else{
                weatherInfo.city = weatherData.name;
                weatherInfo.temperature = `${weatherData.main.temp} Celsius`;
                weatherInfo.iconCode = weatherData.weather[0].icon;
                weatherInfo.description = weatherData.weather[0].description;
                weatherInfo["wind speed"] = weatherData.wind.speed;
                unixSunset = unixTimeConverter(weatherData.sys.sunrise);
                unixSunrise = unixTimeConverter(weatherData.sys.sunset);
                weatherInfo.sunrise = `${unixSunset} AM`;
                weatherInfo.sunset = `${unixSunrise} PM`;
                createInfoTable(weatherInfo);
        }
}

function fetchData(e, userLocation){
        e.preventDefault();
        userLocation = userLocationEl.value;

	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&units=metric&appid=${keyApi}`)
	        .then (res => res.json())
                .then (renderData)
                .catch(error => informationTable.innerText = "Something went wrong. Please try again!")
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
                        icon.alt = "icon has a weather symbol illustrating sky condition"
                        icon.classList = "weather-icon";
                        tableEl.appendChild(itemName);
                        itemName.appendChild(icon);
                } else { 
                        tableEl.appendChild(itemName);
                        itemValue = document.createElement("td");
                        itemValue.innerText = weatherInfo[item];
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


