import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = '18f71bc21fd04d3894e162137232911';

  const fetchWeatherData = () => {
    setLoading(true);

    axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => {
        alert('Failed to fetch weather data');
        console.error('Error fetching weather data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSearch = () => {
    fetchWeatherData();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading data...</p>}
      
      {weatherData && (
        <div className="weather-cards">
          {/* <h2>Weather in {weatherData.location.name}</h2>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Humidity: {weatherData.current.humidity}%</p>
          <p>Condition: {weatherData.current.condition.text}</p>
          <p>Wind Speed: {weatherData.current.wind_kph} km/h</p> */}
          <WeatherCard title={"Temperature"} value={`${weatherData.current.temp_c}°C`}/>
          <WeatherCard title={"Humidity"} value={`${weatherData.current.humidity}%`}/>
          <WeatherCard title={"Condition"} value={weatherData.current.condition.text}/>
          <WeatherCard title={"Wind Speed"} value={`${weatherData.current.wind_kph}kph`}/>
        </div>
      )}
    </div>
  );
};

export default Weather;
