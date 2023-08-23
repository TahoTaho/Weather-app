const URL = 'http://api.weatherapi.com/v1/';
const API_KEY = '0e0ae5b7be654d2eb23112554231408';


const locationName = document.getElementById('location-name');
const currentTemp = document.getElementById('temperature');
const weatherCondition = document.getElementById('condition');
const reelFeel = document.getElementById('reel-feel');
const windSpeed = document.getElementById('wind-speed');
const uvIndex = document.getElementById('uv-index');
const chanceOfRain = document.getElementById('chance-of-rain');



function displayCurrentWeather(requestMethod, requestParameter) {
    fetch(URL + requestMethod + '?key=' + API_KEY + requestParameter)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        locationName.textContent = data.location.name;
        currentTemp.textContent = data.current.temp_c + '°C';
        weatherCondition.textContent = data.current.condition.text;

        reelFeel.textContent = 'Reel Feel: ' + data.current.feelslike_c + '°C';
        windSpeed.textContent = 'Wind: ' + data.current.wind_kph + ' km/h';
        chanceOfRain.textContent = 'Chance of Rain: ' + data.forecast.forecastday[0].day.daily_chance_of_rain;
        uvIndex.textContent = 'UV Index: ' + data.current.uv;   
    });
}

displayCurrentWeather('forecast.json', '&q=London&days=1&aqi=no&alerts=no');

function displayForecastToday(requestMethod, requestParameter) {
    fetch(URL + requestMethod + '?key=' + API_KEY + requestParameter)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
    });
}

//displayForecastToday('forecast.json', '&q=London&days=1&aqi=no&alerts=no');














