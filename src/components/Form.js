import React, { useState } from 'react';
import './Form.css';

const Form = ({ getWeather }) => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === '') {
      setError('Please enter a city name');
      return;
    }
    getWeather(city);
    setCity('');
    setError('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Get Weather</button>
      {error && <p className="error-msg">{error}</p>}
    </form>
  );
};

export default Form;
