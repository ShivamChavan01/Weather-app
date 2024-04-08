import React from 'react';
import './Weather.css';

const WeatherInfo = ({ weatherData }) => {
  const { city, temperature, description, icon } = weatherData;

  return (
    <div className="weather-info">
      <h2 className="city">{city}</h2>
      <div className="weather-details">
        <div>
          <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={description} />
          <p>{description}</p>
        </div>
        <p className="temperature">{temperature}°C</p>
      </div>
    </div>
  );
};

export default WeatherInfo;
