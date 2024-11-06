// src/App.js
import React, { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";
import "./App.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setError(null);
    setWeatherData(null);

    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
      );
      const data = await response.json();

      // Simulated weather data based on city for simplicity
      const mockWeatherData = {
        city: city,
        temperature: data.current.temperature_2m,
        windSpeed: data.current.wind_speed_10m,
        condition: "Clear",
      };

      setWeatherData(mockWeatherData);
    } catch (error) {
      setError("Failed to fetch weather data. Please try again.");
    }
  };

  return (
    <div className="App">
      <h1>Weather Now</h1>
      <WeatherForm onSearch={fetchWeather} />
      <WeatherDisplay weatherData={weatherData} error={error} />
    </div>
  );
};

export default App;
