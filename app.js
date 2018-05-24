// Init Local Storage
const storage = new Storage();

// Get location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location even
document.getElementById('w-change-btn').addEventListener('click', (e) => {

  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;


  // Change location
  weather.changeLocation(city, country);

  // Set location in Local Storage
  storage.setLocationData(city, country);

  // Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});



function getWeather(){
  weather.getWeather()
    .then(results => {
      console.log(results);
      ui.paint(results);
    })
    .catch(err => console.log(err));
}