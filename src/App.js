import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import WeatherInfo from './components/WeatherInfo';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleGetWeather = async (city) => {
    try {
      const apiKey = 'be435edec375e71b9b48a137eb114444';
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      if (!response.ok) {
        throw new Error('Weather data not found');
      }
      const data = await response.json();
      setWeatherData({
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
      });
      setError(null);
    } catch (error) {
      setWeatherData(null);
      setError('Weather data not found');
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Weather Application</h1>
      <Form getWeather={handleGetWeather} />
      {error && <p className="error-msg">{error}</p>}
      {weatherData && <WeatherInfo weatherData={weatherData} />}
    </div>
  );
};

export default App;
