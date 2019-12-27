const weather = document.querySelector(".js-weather"); 
const API_KEY = 'ac27f0706e5fbbf635dd287d9c3a9ee6';
const UPPER_CASE_API_KEY = API_KEY.toUpperCase();
const COORDS = 'coords';

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(responce) {
        return responce.json();
    }).then(function(json) {
        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `${temp} @ ${place}`
    })
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const lat = position.coords.latitude,
        lng = position.coords.longitude;
        coordsObj = {
            lat,
            lng
        };
    saveCoords(coordsObj);
    getWeather(lat, lng);
}

function handleGeoError(position) {
    console.log("Can't access geo location.");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.lat, parsedCoords.lng);
    }
}

function init() {
    loadCoords();
}

init();