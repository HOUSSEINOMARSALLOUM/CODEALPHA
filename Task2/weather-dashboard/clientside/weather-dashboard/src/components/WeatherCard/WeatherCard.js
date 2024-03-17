import React, { useState, useEffect } from "react";
import "./WeatherCard.css";

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/weather/current?location=Lebanon")
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("Error fetching weather data:", error));
  }, []);

  return (
    <div className="weather-card">
      <h2 className="weather-card__city-name">City Name</h2>
      {weatherData && (
        <>
          <p className="weather-card__temperature">
            Temperature: {weatherData.main.temp} °C
          </p>
          <p className="weather-card__description">
            Description: {weatherData.weather[0].description}
          </p>
          <p className="weather-card__humidity">
            Humidity: {weatherData.main.humidity}%
          </p>
          <p className="weather-card__wind-speed">
            Wind Speed: {weatherData.wind.speed} m/s
          </p>
          <p className="weather-card__feels-like">
            Feels Like: {weatherData.main.feels_like} °C
          </p>
          <p className="weather-card__pressure">
            Pressure: {weatherData.main.pressure} hPa
          </p>
          {/* Add more weather information as needed */}
        </>
      )}
    </div>
  );
};

export default WeatherCard;
