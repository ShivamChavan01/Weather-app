import React, { useState } from 'react';
import './Form.css';
import { MdDelete } from 'react-icons/md';
import data from './MOCK_DATA (3).json';

const Form = ({ getWeather }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const [error, setError] = useState('');

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = data.filter((value) =>
      value.name.toLowerCase().includes(searchWord.toLowerCase())
    );
    setFilteredData(newFilter);
    setSearchWord(searchWord);
  };

  const clearAll = () => {
    setFilteredData([]);
    setSearchWord('');
    setError('');
  };

  const clickSuggestion = (value) => {
    setSearchWord(value.name);
    setFilteredData([]);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchWord.trim() === '') {
      setError('Please enter a city name');
      return;
    }
    getWeather(searchWord);
    setSearchWord('');
    setError('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <input
          type="text"
          
          value={searchWord}
          onChange={handleFilter}
          placeholder="Enter city name"
          
          />
       
          
       {searchWord && ( // Render delete icon only if searchWord is not empty
          <MdDelete id="delete-icon" onClick={clearAll} />
        )}
          
        
      </div>
      {filteredData.length !== 0 && (
        <div className="data-result">
          {filteredData.slice(0, 10).map((value, key) => (
            <div
              className="data-item"
              key={key}
              onClick={() => clickSuggestion(value)}
            >
              <p>{value.name}</p>
            </div>
          ))}
        </div>
      )}
      <button type="submit">Get Weather</button>
      {error && <p className="error-msg">{error}</p>}
    </form>
  );
};

export default Form;
