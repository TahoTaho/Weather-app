const URL = 'http://api.weatherapi.com/v1/';
const API_KEY = '0e0ae5b7be654d2eb23112554231408';
const requestMethod = 'current.json';
const requestParameter = '&q=London&aqi=no';

const locationName = document.getElementById('location-name');
const currentTemp = document.getElementById('temperature');
const weatherCondition = document.getElementById('condition');
const reelFeel = document.getElementById('reel-feel');
const windSpeed = document.getElementById('wind-speed');
const uvIndex = document.getElementById('uv-index');



function displayCurrentWeather() {
    fetch(URL + requestMethod + '?key=' + API_KEY + requestParameter)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        locationName.textContent = data.location.name;
        currentTemp.textContent = data.current.temp_c + '°C';
        weatherCondition.textContent = data.current.condition.text;

        reelFeel.textContent = 'Reel Feel: ' + data.current.feelslike_c + '°C';
        windSpeed.textContent = 'Wind: ' + data.current.wind_kph;
        uvIndex.textContent = 'UV Index: ' + data.current.uv;   
    });
}

displayCurrentWeather()












