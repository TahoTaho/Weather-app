const URL = 'http://api.weatherapi.com/v1/';
const API_KEY = '0e0ae5b7be654d2eb23112554231408';
const apiMethod = 'current.json';

function callAPI () {
    fetch(URL + apiMethod + '?key=' + API_KEY + '&q=London&aqi=no');
}

function callAPI2 () {
    fetch('http://api.weatherapi.com/v1/current.json?key=0e0ae5b7be654d2eb23112554231408&q=London&aqi=no')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        let temp = data.current.temp_c;
        console.log(temp);

        let placeLocation = data.location.country;
        console.log(placeLocation);~
    })
}

console.log(callAPI());

callAPI2();

