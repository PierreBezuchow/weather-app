class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    let iconUrl = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
   
    

    this.location.textContent = weather.name;
    this.desc.textContent = `${weather.weather[0].description}`;
    this.icon.setAttribute ('src', iconUrl);
    this.string.textContent = `${(weather.main.temp - 272.12).toFixed(1)} \u00B0C`;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/s`;
    console.log(this.icon);
  }

  
}