const apiKey = "71c735d4f2cf841c0af89d021c79e2a0"; // Replace with your OpenWeatherMap API key
const cityName = "Kasur,pakistan"; // Replace with the city and country you want to search for

// Step 1: Make the current weather API request
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=en`;

fetch(weatherUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Weather API HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((weatherData) => {
    console.log("Weather Data:", weatherData);
    displayWeather(weatherData);
  })
  .catch((error) => console.error("Error fetching weather data:", error));

// Function to display the weather data on your page
function displayWeather(data) {
  const weatherInfoDiv = document.getElementById("weather-info");
  const current = data.main;
  const weather = data.weather[0];
  const iconUrl = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

  weatherInfoDiv.innerHTML = `
        <h2>Current Weather in ${data.name}</h2>
        <img src="${iconUrl}" alt="${weather.description}">
        <p>Temperature: ${current.temp}°C</p>
        <p>Condition: ${weather.description}</p>
        <p>Humidity: ${current.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;

  weatherInfoDiv.classList.add("visible");
}
