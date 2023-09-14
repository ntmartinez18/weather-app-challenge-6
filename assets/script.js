// created global variable to be accessed later
const searchBtn = document.getElementById("search-btn");
const weatherOptions = document.querySelector(".dropdown");
var userInputLat = document.getElementById("userInputLat");
var userInputLon = document.getElementById("userInputLon");
const currentWeather = document.getElementById("option2");
const futureForecast = document.getElementById("option3");
var displayData = document.querySelector("#results-container");




function getCity() {
    console.log("button clicked")
}




function getWeather() {
    console.log("weather option clicked");
    currentWeather.addEventListener("click", getCurrent);
    function getCurrent() {
        console.log("current weather displayed")
    }
    futureForecast.addEventListener("click", getFuture);
    function getFuture() {
        console.log("future weather displayed")
    }
}

// function getCurrent() {
//     console.log("current weather displayed")
// }

// function getFuture() {
//     console.log("future forecast displayed")
// }


//     // API key = "f1c5283143e97d8ae4884e8e89154970"
//     var apiUrl = "https://api.openweathermap.org/data/3.0/onecall?" + "lat={lat}" + "&lon={lon}" + "&appid=f1c5283143e97d8ae4884e8e89154970"

//     fetch(apiUrl).then(function (response) {
//         if(response.ok) {
//             response.json().then(function (data) {
//                 displayIssues(data);
//         }
// }







searchBtn.addEventListener("click", getCity);
weatherOptions.addEventListener("click", getWeather);
// currentWeather.addEventListener("click", getCurrent);
// futureForecast.addEventListener("click", getFuture);





// API key = "f1c5283143e97d8ae4884e8e89154970"
// var apiUrl = "https://api.openweathermap.org/data/3.0/onecall?" + "lat={lat}" + "&lon={lon}" + "&appid=f1c5283143e97d8ae4884e8e89154970"
