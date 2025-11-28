import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

console.log("API KEY:", process.env.REACT_APP_WEATHER_KEY);

function App() {
  const [city, setCity] = useState("Toronto");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch current weather
  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);

    try {
      const apiKey = process.env.REACT_APP_WEATHER_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      const tempC = (data.main.temp - 273.15).toFixed(1);

      setWeather({
        city: data.name,
        country: data.sys.country,
        temp: tempC,
        description: data.weather[0].description,
        iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        pressure: data.main.pressure,
        maxTemp: (data.main.temp_max - 273.15).toFixed(1),
        minTemp: (data.main.temp_min - 273.15).toFixed(1),
        date: new Date().toDateString(),
        day: new Date().toLocaleDateString("en-US", { weekday: "long" }),
      });

    } catch (err) {
      setError(err.message);
      setWeather(null);
    }

    setLoading(false);
  };

  // Fetch weather on page load and city change
  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  return (
    <div className="app-container">
      <h1>Weather App</h1>

      {/* PRESET CITY DROPDOWN */}
      <select
        className="preset-city-dropdown"
        onChange={(e) => {
          setCity(e.target.value);
          fetchWeather(e.target.value);
        }}
      >
        <option value="Toronto">Toronto</option>
        <option value="Montreal">Montreal</option>
        <option value="Vancouver">Vancouver</option>
        <option value="Calgary">Calgary</option>
        <option value="New York">New York</option>
        <option value="Tokyo">Tokyo</option>
        <option value="London">London</option>
      </select>

      {/* SEARCH BAR */}
      <SearchBar
        onSearch={(newCity) => {
          setCity(newCity);
          fetchWeather(newCity);
        }}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;
