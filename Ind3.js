function getWeather() {
    const city = document.getElementById("city-input").value;
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById("weather-info").innerHTML = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                `;
            } else {
                document.getElementById("weather-info").innerHTML = `<p>City not found!</p>`;
            }
        })
        .catch(error => console.error("Error fetching weather data:", error));
}
