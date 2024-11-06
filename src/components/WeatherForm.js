import React, { useState } from "react";
import styles from "../styles/WeatherForm.module.css";

const WeatherForm = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city) {
      setErrorMessage("Please enter a city.");
    } else {
      setErrorMessage(""); // Clear the error message if the input is valid
      onSearch(city); // Pass the city to the parent component
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Get Weather
      </button>

      {/* Display error message if the city is not entered */}
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </form>
  );
};

export default WeatherForm;
