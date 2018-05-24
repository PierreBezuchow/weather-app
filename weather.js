class Weather {
  constructor(city, country) {
    this.apiKey = '50d167d6ed6a0cc2be9dbed798f527a6';
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, country){
    this.city = city;
    this.country = country;
  }
}