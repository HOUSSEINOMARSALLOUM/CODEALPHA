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
      <h2>City Name</h2>
      {weatherData && (
        <>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          {/* Add more weather information as needed */}
        </>
      )}
    </div>
  );
};

export default WeatherCard;
