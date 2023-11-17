import Sun from './weather_sun.png';
import Reflesh from './weather_reflesh.png';
import Delete from './weather_delete.png';
import Heart from './weather_heart.png';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = ({cityName}) => {
  const [cities, setCities] = useState([]);
  const [newCity, setNewCity] = useState('');
  const apiKey = '7221ffa7ddfb4cd84a82a2da639f1f35';
  console.log(cityName);

  useEffect(() => {
    console.log(cityName);
    const storedCities = JSON.parse(localStorage.getItem('cities'));
    if (storedCities) {
      setCities(storedCities);
    }
  }, [cityName]);

  // useEffect(() => {
  //   localStorage.setItem('cities', JSON.stringify(cities));
  // }, [cities]);

  
// // ============================================================================================
  // const addCity = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${apiKey}`
  //     );
  //     const additionalInfo = await axios.get(
  //       `https://restcountries.com/v2/alpha/${response.data.sys.country}`
  //     );
  //     const newCityData = {
  //       name: response.data.name,
  //       temperature: response.data.main.temp,
  //       country: additionalInfo.data.name,
  //       time: new Date().toLocaleTimeString(),
  //       day: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
  //       date: new Date().toLocaleDateString('en-US'),
  //     };
  //     setCities([...cities, newCityData]);
  //     setNewCity('');
  //   } catch (error) {
  //     console.error('Error adding city:', error);
  //   }
  // };
// ============================================================================================
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
      {/* <input type="text" value={newCity} onChange={e => setNewCity(e.target.value)} placeholder="Введіть назву міста"/>
      <button onClick={addCity}>Додати місто</button> */}
      {cities.length > 0 ? ( 
      <div className="container">
        {cities.map((city, index) => (
          <div key={index}>
            <div className="first-floor">
              <p className="city">{city.name}</p>
              <p>{city.country}</p>
            </div>

            <div className="second-floor">
              <h2>{city.time}</h2>
              <button className="btn">Hourly forecast</button>
            </div>

            <ul className="list">
              <li className="item">
                <p className="date">{city.date}</p>
                <p className="day">{city.day}</p>
              </li>
            </ul>

            <div className="search-icon">
              <img src={Sun} alt="sun-icon" />
              <h1>{city.temperature}°C</h1>
            </div>

            <div className="last-floor">
              <img className="one" src={Reflesh} alt="" onClick={() => updateWeather(index)}/>
              <img className="two" src={Heart} alt="" />
              <button className="btn-1">See more</button>
              <img className="three" src={Delete} alt="" onClick={() => removeCity(index)}/>
            </div>
          </div>
        ))}
      </div> ) : <p>Оберіть місто</p>}
    </>
  );
};

export default Weather;
