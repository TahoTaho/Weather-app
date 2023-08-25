const URL = 'http://api.weatherapi.com';
const API_KEY = '0e0ae5b7be654d2eb23112554231408';

function displayWeather(requestMethod, requestParameter) {
    fetch(URL + '/v1/' + requestMethod + '?key=' + API_KEY + requestParameter)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        displayCurrentWeather(data);
        diplayTodaysForecast(data);
        displayAirConditions(data);
    });
}

function displayCurrentWeather(currentWeatherData) { 
    const locationName = document.getElementById('location-name');
    const currentTemp = document.getElementById('temperature');
    const weatherCond = document.getElementById('condition');

    locationName.textContent = currentWeatherData.location.name;
    currentTemp.textContent = currentWeatherData.current.temp_c + '°C';
    weatherCond.textContent = currentWeatherData.current.condition.text;
}

function diplayTodaysForecast(forecastData) {
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

    condIn6AM.textContent = forecastData.forecast.forecastday[0].hour[6].condition.text;
    tempIn6AM.textContent = forecastData.forecast.forecastday[0].hour[6].temp_c + '°';
    
    condIn9AM.textContent = forecastData.forecast.forecastday[0].hour[9].condition.text;
    tempIn9AM.textContent = forecastData.forecast.forecastday[0].hour[9].temp_c + '°';

    condIn12PM.textContent = forecastData.forecast.forecastday[0].hour[12].condition.text;
    tempIn12PM.textContent = forecastData.forecast.forecastday[0].hour[12].temp_c + '°';

    condIn3PM.textContent = forecastData.forecast.forecastday[0].hour[15].condition.text;
    tempIn3PM.textContent = forecastData.forecast.forecastday[0].hour[15].temp_c + '°';

    condIn6PM.textContent = forecastData.forecast.forecastday[0].hour[18].condition.text;
    tempIn6PM.textContent = forecastData.forecast.forecastday[0].hour[18].temp_c + '°';

    condIn9PM.textContent = forecastData.forecast.forecastday[0].hour[21].condition.text;
    tempIn9PM.textContent = forecastData.forecast.forecastday[0].hour[21].temp_c + '°';
}

function displayAirConditions(airConditionData) {
    const reelFeel = document.getElementById('reel-feel');
    const windSpeed = document.getElementById('wind-speed');
    const uvIndex = document.getElementById('uv-index');
    const chanceOfRain = document.getElementById('chance-of-rain');

    reelFeel.textContent = 'Reel Feel: ' + airConditionData.current.feelslike_c + '°C';
    windSpeed.textContent = 'Wind: ' + airConditionData.current.wind_kph + ' km/h';
    chanceOfRain.textContent = 'Chance of Rain: ' + airConditionData.forecast.forecastday[0].day.daily_chance_of_rain;
    uvIndex.textContent = 'UV Index: ' + airConditionData.current.uv;   
}


displayWeather('forecast.json', '&q=London&days=7&aqi=no&alerts=no');











