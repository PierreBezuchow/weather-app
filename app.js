// Init weather object
const weather = new Weather('new york', 'us');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//weather.changeLocation('zielona góra', 'pl');

function getWeather(){
  weather.getWeather()
    .then(results => {
      console.log(results);
    })
    .catch(err => console.log(err));
}