// created global variable to be accessed later
const searchBtn = document.getElementById("search-btn");
const weatherOptions = document.querySelector(".dropdown");
const inputElement = document.getElementById("userInput");
var displayData = document.querySelector("#results-container");
var displayDataFiveDay = document.querySelector("#results-container-fiveday");
var searchHistory = document.getElementById("#history-container");

let userInput = 'las vegas';




function getCity() {
    console.log("button clicked")

    var apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + userInput + "&appid=f1c5283143e97d8ae4884e8e89154970"
    fetch (apiUrl) 
        .then(function (response){
            return response.json()
        }) 
        .then(function (data){
            console.log(data)
            console.log(data[0].lat)
            console.log(data[0].lon)
            getWeather(data[0].lat, data[0].lon)
            getFiveDay(data[0].lat, data[0].lon)
        })
}




function getWeather(lat, lon) {
    console.log("weather displayed")

    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=f1c5283143e97d8ae4884e8e89154970&units=imperial"
    fetch(apiUrl)
    .then(function (response){
        return response.json()
    })
    .then(function (data){
        console.log(data)
        console.log(data.main.temp)
        var temp = document.createElement("p")
        temp.textContent = "temp" + data.main.temp
        var humidity = document.createElement("p")
        humidity.textContent = "humidity" + data.main.humidity
        var windSpeed = document.createElement("p")
        windSpeed.textContent = "wind: " + data.wind.speed
        displayData.append(temp, humidity, windSpeed)
    })



    // saveSearch()

}

function getFiveDay(lat, lon) {
    console.log("weather displayed")

    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=f1c5283143e97d8ae4884e8e89154970&units=imperial"
    fetch(apiUrl)
    .then(function (response){
        return response.json()
    })
    .then(function (data){
        console.log(data)
        for (var i = 0; i < data.list.length; i += 8) {
        console.log(data.list[i].main.temp)
        var temp = document.createElement("p")
        temp.textContent = "temp: " + data.list[i].main.temp
        var humidity = document.createElement("p")
        humidity.textContent = "humidity: " + data.list[i].main.humidity
        var windSpeed = document.createElement("p")
        windSpeed.textContent = "wind: " + data.list[i].wind.speed
        displayDataFiveDay.append(temp, humidity, windSpeed)
        }
    })



    // saveSearch()

}



function saveSearch() {
    console.log("city")
    // var searchHistory = document.createElement("li");
    // searchHistory.classList = "list";
}




searchBtn.addEventListener("click", getCity);
inputElement.addEventListener("input", function (event) {
    userInput = event.target.value;
});






// API key = "f1c5283143e97d8ae4884e8e89154970"

// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

// var apiUrl = "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid=f1c5283143e97d8ae4884e8e89154970"


