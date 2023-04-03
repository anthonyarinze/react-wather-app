import React, { useState } from "react";
import axios from "axios";
const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

const Weather: React.FC = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState<any>(null);

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
      );
      setWeather(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {(weather.main.temp - 273.15).toFixed()}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
