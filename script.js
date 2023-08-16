const URL = 'http://api.weatherapi.com/v1/';
const API_KEY = '0e0ae5b7be654d2eb23112554231408';
const requestMethod = 'current.json';
const requestParameter = '&q=London&aqi=no';

const locationName = document.getElementById('location-name');
const currentTemp = document.getElementById('temperature');
const weatherCondition = document.getElementById('condition');



function callAPI () {
    fetch(URL + requestMethod + '?key=' + API_KEY + requestParameter)
    .then(response => response.json())
    .then(data => {

        console.log(data);

        locationName.textContent = data.location.name;
        currentTemp.textContent = data.current.temp_c;
        weatherCondition.textContent = data.current.condition.text;
    });
}





