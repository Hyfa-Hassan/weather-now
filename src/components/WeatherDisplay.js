// src/components/WeatherDisplay.js
import React from "react";
import styles from "../styles/WeatherDisplay.module.css";

const WeatherDisplay = ({ weatherData, error }) => {
  if (error) {
    return <p className={styles.error}>Error: {error}</p>;
  }

  if (!weatherData) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h2>Weather in {weatherData.city}</h2>
      <p>Temperature: {weatherData.temperature}°C</p>
      <p>Wind Speed: {weatherData.windSpeed} km/h</p>
      <p>Condition: {weatherData.condition}</p>
    </div>
  );
};

export default WeatherDisplay;
