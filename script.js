const locationName = document.getElementById('location-name');
const currentTemp = document.getElementById('temperature');
const weatherCond = document.getElementById('condition');
const reelFeel = document.getElementById('reel-feel');
const windSpeed = document.getElementById('wind-speed');
const uvIndex = document.getElementById('uv-index');
const chanceOfRain = document.getElementById('chance-of-rain');

const condIn6AM = document.getElementById('condition-6:00AM');
const tempIn6AM = document.getElementById('temperature-6:00AM');

const condIn9AM = document.getElementById('condition-9:00AM');
const tempIn9AM = document.getElementById('temperature-9:00AM');

const condIn12PM = document.getElementById('condition-12:00PM');
const tempIn12PM = document.getElementById('temperature-12:00PM');

const condIn3PM = document.getElementById('condition-3:00PM');
const tempIn3PM = document.getElementById('temperature-3:00PM');

const condIn6PM = document.getElementById('condition-6:00PM');
const tempIn6PM = document.getElementById('temperature-6:00PM');

const condIn9PM = document.getElementById('condition-9:00PM');
const tempIn9PM = document.getElementById('temperature-9:00PM');

const URL = 'http://api.weatherapi.com/v1/';
const API_KEY = '0e0ae5b7be654d2eb23112554231408';

function displayCurrentWeather(requestMethod, requestParameter) {
    fetch(URL + requestMethod + '?key=' + API_KEY + requestParameter)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        locationName.textContent = data.location.name;
        currentTemp.textContent = data.current.temp_c + '°C';
        weatherCond.textContent = data.current.condition.text;

        condIn6AM.textContent = data.forecast.forecastday[0].hour[6].condition.text;
        tempIn6AM.textContent = data.forecast.forecastday[0].hour[6].temp_c + '°';

        condIn9AM.textContent = data.forecast.forecastday[0].hour[9].condition.text;
        tempIn9AM.textContent = data.forecast.forecastday[0].hour[9].temp_c + '°';

        condIn12PM.textContent = data.forecast.forecastday[0].hour[12].condition.text;
        tempIn12PM.textContent = data.forecast.forecastday[0].hour[12].temp_c + '°';

        condIn3PM.textContent = data.forecast.forecastday[0].hour[15].condition.text;
        tempIn3PM.textContent = data.forecast.forecastday[0].hour[15].temp_c + '°';

        condIn6PM.textContent = data.forecast.forecastday[0].hour[18].condition.text;
        tempIn6PM.textContent = data.forecast.forecastday[0].hour[18].temp_c + '°';

        condIn9PM.textContent = data.forecast.forecastday[0].hour[21].condition.text;
        tempIn9PM.textContent = data.forecast.forecastday[0].hour[21].temp_c + '°';

        reelFeel.textContent = 'Reel Feel: ' + data.current.feelslike_c + '°C';
        windSpeed.textContent = 'Wind: ' + data.current.wind_kph + ' km/h';
        chanceOfRain.textContent = 'Chance of Rain: ' + data.forecast.forecastday[0].day.daily_chance_of_rain;
        uvIndex.textContent = 'UV Index: ' + data.current.uv;   
    });
}

displayCurrentWeather('forecast.json', '&q=London&days=1&aqi=no&alerts=no');















