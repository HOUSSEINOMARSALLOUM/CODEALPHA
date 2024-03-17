const weatherService = require("../services/weatherService");

const getCurrentWeather = async (req, res) => {
  try {
    const data = await weatherService.getCurrentWeather(req.query.location);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getWeatherForecast = async (req, res) => {
  try {
    const data = await weatherService.getWeatherForecast(req.query.location);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getCurrentWeather,
  getWeatherForecast,
};
