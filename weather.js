const weatherContainer = document.getElementById('weather-container');
const form = document.getElementById('weather-form');
const locationInput = document.getElementById('location-input');
const weather = document.getElementById('display');
const box = document.getElementById('box');

// Function to fetch weather data for a given location
async function fetchWeatherData(location) {
  const apiKey = 'b4416ba92aa2fd249c548b575358bf02';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Function to display weather data on the page
function displayWeatherData(location, weatherData) {
  const weatherCard = document.createElement('div');
  weatherCard.classList.add('weather-card');
  weather.classList.remove("hidden");
  weatherContainer.classList.remove("hidden");
  box.classList.remove("hidden");

    const locationName = document.createElement('h2');
  locationName.textContent = location;

  const temperature = document.createElement('p');
  temperature.textContent = `Temperature: ${weatherData.main.temp} °C`;

  const description = document.createElement('p');
  description.textContent = `Description: ${weatherData.weather[0].description}`;

  weatherCard.appendChild(locationName);
  weatherCard.appendChild(temperature);
  weatherCard.appendChild(description);

  weatherContainer.appendChild(weatherCard);
 

  
}

// Function to handle form submission
async function handleSubmit(event) {
  event.preventDefault();
  const inputLocation = locationInput.value;
  const weatherData = await fetchWeatherData(inputLocation);
  displayWeatherData(inputLocation, weatherData);
  locationInput.value = '';
}

form.addEventListener('submit', handleSubmit);
