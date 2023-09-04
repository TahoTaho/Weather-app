const URL = 'http://api.weatherapi.com';
const API_KEY = '0e0ae5b7be654d2eb23112554231408';
const dateFormat = new Intl.DateTimeFormat('en-US');

function displayWeather(requestMethod, locationName, forecastDay, getAirQuality, getWeatherAlert) {
    fetch(URL + '/v1/' + requestMethod + '?key=' + API_KEY + '&q=' + locationName + '&days=' + forecastDay + '&aqi=' + getAirQuality + '&alerts=' +  getWeatherAlert)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        displayCurrentWeather(data);
        diplayTodaysForecast(data);
        displayAirConditions(data);
        displayWeeklyForecast(data);
    });
}

function displayCurrentWeather(forecastData) { 
    const locationName = document.getElementById('location-name');
    const currentTemp = document.getElementById('temperature');
    const weatherCond = document.getElementById('condition');

    locationName.textContent = forecastData.location.name;
    currentTemp.textContent = forecastData.current.temp_c + '°C';
    weatherCond.textContent = forecastData.current.condition.text;
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

function displayAirConditions(forecastData) {
    const tempFelt = document.getElementById('temp-felt');
    const windSpeed = document.getElementById('wind-speed');
    const uvIndex = document.getElementById('uv-index');
    const humidity = document.getElementById('humidity');

    tempFelt.textContent = 'Temperature Felt: ' + forecastData.current.feelslike_c + '°C';
    windSpeed.textContent = 'Wind: ' + forecastData.current.wind_kph + ' km/h';
    uvIndex.textContent = 'UV Index: ' + forecastData.current.uv; 
    humidity.textContent = 'Humidity: ' + forecastData.current.humidity;  
}

function displayWeeklyForecast(forecastData) {
    displayDayOfWeek(forecastData);
    displayConditionOfDay(forecastData);
    displayAvgTemperatureOfDay(forecastData);
}

function displayDayOfWeek(forecastData) {
    const day1 = document.getElementById('day-1');
    const day2 = document.getElementById('day-2');
    const day3 = document.getElementById('day-3');
    const day4 = document.getElementById('day-4');
    const day5 = document.getElementById('day-5');
    const day6 = document.getElementById('day-6');
    const day7 = document.getElementById('day-7');

    day1.textContent = getDay(forecastData.forecast.forecastday[0].date);
    day2.textContent = getDay(forecastData.forecast.forecastday[1].date);
    day3.textContent = getDay(forecastData.forecast.forecastday[2].date);
}

function displayConditionOfDay(forecastData) {
    const day1Cond = document.getElementById('day-1-condition');
    const day2Cond = document.getElementById('day-2-condition');
    const day3Cond = document.getElementById('day-3-condition');
    const day4Cond = document.getElementById('day-4-condition');
    const day5Cond = document.getElementById('day-5-condition');
    const day6Cond = document.getElementById('day-6-condition');
    const day7Cond = document.getElementById('day-7-condition');

    day1Cond.textContent = forecastData.forecast.forecastday[0].day.condition.text;
    day2Cond.textContent = forecastData.forecast.forecastday[1].day.condition.text;
    day3Cond.textContent = forecastData.forecast.forecastday[2].day.condition.text;
}

function displayAvgTemperatureOfDay(forecastData) {
    const day1Temp = document.getElementById('day-1-temperature');
    const day2Temp = document.getElementById('day-2-temperature');
    const day3Temp = document.getElementById('day-3-temperature');
    const day4Temp = document.getElementById('day-4-temperature');
    const day5Temp = document.getElementById('day-5-temperature');
    const day6Temp = document.getElementById('day-6-temperature');
    const day7Temp = document.getElementById('day-7-temperature');

    day1Temp.textContent = forecastData.forecast.forecastday[0].day.avgtemp_c + '°C';
    day2Temp.textContent = forecastData.forecast.forecastday[1].day.avgtemp_c + '°C';
    day3Temp.textContent = forecastData.forecast.forecastday[2].day.avgtemp_c + '°C';
}

function getDay(date) {
    const convDate = new Date(date).getDay();
    switch (convDate) {
        case 0: return 'Sunday';
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
    }
}

function experiment() {
    for (let i = 0; i <= 6; i++) {
        const day = document.getElementById('day-' + i + '-temperature');
    }
    //Turn displayAvgTemperatureOfDay fucntion to a for loop
}

displayWeather('forecast.json', 'London', '7','no','no');

















