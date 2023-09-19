// created global variable to be accessed later
const searchBtn = document.getElementById("search-btn");
const weatherOptions = document.querySelector(".dropdown");
const inputElement = document.getElementById("userInput");
var displayData = document.querySelector("#results-container");
var displayDataFiveDay = document.querySelector("#results-container-fiveday");
var searchHistory = document.getElementById("history-container");
var userInput;
var thermometerIcon = document.querySelector("#thermometer")
var cloudIcon = document.querySelector("#cloud")
var sunIcon = document.querySelector("#sun")





// created function to get latitude and longitude of user's city input
function getCity() {
    console.log("button clicked")

    var apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + userInput + "&appid=f1c5283143e97d8ae4884e8e89154970"
    fetch(apiUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            console.log(data[0].lat)
            console.log(data[0].lon)
            getWeather(data[0].lat, data[0].lon)
            getFiveDay(data[0].lat, data[0].lon)
            saveSearch()
            getCurrentDate()
            displayIcons()
        })
}

// created function to get current weather conditions
function getWeather(lat, lon) {
    console.log("weather displayed")

    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=f1c5283143e97d8ae4884e8e89154970&units=imperial"
    fetch(apiUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            console.log(data.main.temp)
            var temp = document.createElement("p")
            temp.textContent = "temp: " + data.main.temp + "°F"
            var humidity = document.createElement("p")
            humidity.textContent = "humidity: " + data.main.humidity + "%"
            var windSpeed = document.createElement("p")
            windSpeed.textContent = "wind: " + data.wind.speed + "mph"
            displayData.append(temp, humidity, windSpeed)
        })
}

// created function to get the five day weather forecast and date
function getFiveDay(lat, lon) {
    console.log("weather displayed")

    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=f1c5283143e97d8ae4884e8e89154970&units=imperial"
    fetch(apiUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            for (var i = 0; i < data.list.length; i += 8) {
                console.log(data.list[i].main.temp)
                var temp = document.createElement("p")
                temp.textContent = "temp: " + data.list[i].main.temp + "°F"
                var humidity = document.createElement("p")
                humidity.textContent = "humidity: " + data.list[i].main.humidity + "%"
                var windSpeed = document.createElement("p")
                windSpeed.textContent = "wind: " + data.list[i].wind.speed + "mph"
                const dtTxt = data.list[i+1].dt_txt;
                const formattedDate = new Date(dtTxt).toLocaleString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                })
                displayDataFiveDay.append(formattedDate, temp, humidity, windSpeed)
            }
        })
}

// created a function to save user search history to local storage to be accessed again
function saveSearch() {
    var userInput = document.getElementById("userInput");
    console.log(userInput.value);
    var city = document.createElement("li");
    city.textContent = userInput.value;
    localStorage.setItem("city", userInput.value);
    localStorage.getItem("city");
    searchHistory.appendChild(city);
}

// created function to get the current date and display it to the browser
function getCurrentDate() {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const formattedDate = `${month}/${day}/${year}`;
    console.log(formattedDate);
    displayData.append(formattedDate);
}


function displayIcons() {
    console.log("images displayed")
    thermometerIcon.classList.replace("hide", "show")
    cloudIcon.classList.replace("hide", "show")
    sunIcon.classList.replace("hide", "show")
}

// added click event listener for search button and search history element to trigger the getCity function
searchBtn.addEventListener("click", getCity);
searchHistory.addEventListener("click", getCity);
inputElement.addEventListener("input", function (event) {
    userInput = event.target.value;
});


// API key = "f1c5283143e97d8ae4884e8e89154970"

// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

// var apiUrl = "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid=f1c5283143e97d8ae4884e8e89154970"