const axios = require("axios");
require("dotenv").config();
const apiKey = process.env.WEATHER_API_KEY;

const getCurrentWeather = async (location) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  const response = await axios.get(apiUrl);
  return response.data;
};

const getWeatherForecast = async (location) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`;
  const response = await axios.get(apiUrl);
  return response.data;
};

module.exports = {
  getCurrentWeather,
  getWeatherForecast,
};
