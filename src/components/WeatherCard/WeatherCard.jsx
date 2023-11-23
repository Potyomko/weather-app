import Sun from './weather_sun.png';
import Reflesh from './weather_reflesh.png';
import Delete from './weather_delete.png';
import Heart from './weather_heart.png';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

export const Weather = ({cityName, getInfo}) => {
  const [cities, setCities] = useState([]);
  const [newCity, setNewCity] = useState('');
  const apiKey = '7221ffa7ddfb4cd84a82a2da639f1f35';
  console.log(cityName);
  
  useEffect(() => {

    const storedCities = JSON.parse(localStorage.getItem('cities'));
    console.log(storedCities);
    if (storedCities) {
      console.log(cityName);
      // setCities(storedCities);
    }
  }, [cityName]);

// Функція для перетворення часу в норм формат
  const formatTime = timestamp => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };


  // Функція для форматування дати в норм формат
// const formatDate = timestamp => {
//   const date = new Date(timestamp * 1000);
//   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//   return date.toLocaleDateString('en-US', options);
// };

const formatDate = timestamp => {
  const date = new Date(timestamp * 1000);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

  const removeCity = cityIndex => {
    const newCities = [...cities];
    newCities.splice(cityIndex, 1);
    setCities(newCities);
  };

  const updateWeather = async cityIndex => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cities[cityIndex].name}&appid=${apiKey}`
      );
      const additionalInfo = await axios.get(
        `https://restcountries.com/v2/alpha/${response.data.sys.country}`
      );
      const updatedCityData = {
        name: response.data.name,
        temperature: response.data.main.temp,
        country: additionalInfo.data.name,
        time: new Date().toLocaleTimeString(),
        day: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
        date: new Date().toLocaleDateString('en-US'),
      };
      
      const newCities = [...cities];
      newCities[cityIndex] = updatedCityData;
      setCities(newCities);
    } catch (error) {
      console.error('Error updating weather:', error);
    }
  };

  return (
    <>
      {cities.length > 0 ? ( 
      <div className="container">
        {cities.map((city, index) => (
          <div key={index}>
            <div className="first-floor">
              <p className="city">{city.name}</p>
              <p>{city.country}</p>
            </div>

            <div className="second-floor">
              <h2>{formatTime(city.dt)}</h2>
              <button className="btn" onClick={getInfo(city.name, 'hourly forecast')}>Hourly forecast</button>
              <button className="btn" onClick={getInfo(city.name, 'weekly forecast')}>Weekly forecast</button>
            </div>

            <ul className="list">
              <li className="item">
                <p className="date">{formatDate(city.dt)}</p>
                <p className="day">{new Date(city.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</p>
              </li>
            </ul>

            <div className="search-icon">
              <img src={Sun} alt="sun-icon" />
              <h1>{city.temp}°C</h1>
            </div>

            <div className="last-floor">
              <img className="one" src={Reflesh} alt="" onClick={() => updateWeather(index)}/>
              <img className="two" src={Heart} alt="" />
              <button className="btn-1" onClick={getInfo(city.name, 'see more')}>See more</button>
              <img className="three" src={Delete} alt="" onClick={() => removeCity(index)}/>
            </div>
          </div>
        ))}
      </div> ) : <p>Оберіть місто</p>}
    </>
  );
};


