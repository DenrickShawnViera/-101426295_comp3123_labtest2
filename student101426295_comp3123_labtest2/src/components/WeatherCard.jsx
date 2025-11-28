import React from "react";
import "./WeatherCard.css";

function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="weather-wrapper">
      
      {/* LEFT PANEL */}
      <div className="left-panel">
        <h2 className="left-day">{weather.day}</h2>
        <p className="left-date">{weather.date}</p>
        <p className="left-location">{weather.city}, {weather.country}</p>

        <div className="left-icon-circle"></div>

        <h1 className="left-temp">{weather.temp}°C</h1>
        <p className="left-desc">{weather.description}</p>
      </div>

      {/* RIGHT GLASS PANEL */}
      <div className="glass-panel">
        
        {/* City Switcher (Dropdown) */}
        <select className="city-dropdown">
          <option>{weather.city} - {weather.country}</option>
        </select>

        {/* FORECAST STRIP (Static placeholder for now) */}
        <div className="forecast-strip">
          {[ 
            {day: "Fri", temp: "29°C"},
            {day: "Sat", temp: "29°C"},
            {day: "Sun", temp: "27°C"},
            {day: "Mon", temp: "27°C"},
            {day: "Tue", temp: "28°C"},
            {day: "Wed", temp: "28°C"},
            {day: "Thu", temp: "29°C"},
          ].map((d, i) => (
            <div key={i} className="forecast-item">
              <div className="forecast-icon"></div>
              <p>{d.day}</p>
              <p className="forecast-temp">{d.temp}</p>
            </div>
          ))}
        </div>

        {/* WEATHER STATS */}
        <div className="stats-box">
          <p><b>UV Index</b> <span className="value">8 (Very High)</span></p>
          <p><b>HUMIDITY</b> <span className="value">{weather.humidity}%</span></p>
          <p><b>WIND</b> <span className="value">{weather.wind} km/h</span></p>
          <p><b>{weather.city} - Population</b> <span className="value">23,355,000</span></p>
        </div>

      </div>
    </div>
  );
}

export default WeatherCard;
