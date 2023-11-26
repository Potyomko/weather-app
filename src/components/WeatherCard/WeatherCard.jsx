import Sun from './weather_sun.png';
import Cloud from './cloud (1).png'
import Rain from './rain (1).png'
import Mist from './mist (1).png'
import Snow1 from './snow (1).png'


import Reflesh from './weather_reflesh.png';
import Delete from './weather_delete.png';
import Heart from './weather_heart.png';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';
import { Container } from "./WeatherCard.styled";

export const Weather = ({cityName, getInfo}) => {
  const [cities, setCities] = useState([]);
  const [newCity, setNewCity] = useState('');
  const [wicon, setWicon] = useState(Cloud)
  const apiKey = '7221ffa7ddfb4cd84a82a2da639f1f35';
  console.log(cityName);
  
  useEffect(() => {

    const storedCities = JSON.parse(localStorage.getItem('cities'));
    console.log(storedCities);
    if (storedCities) {
      console.log(cityName);
      setCities(storedCities);
    }
  }, [cityName]);

// Функція для перетворення часу в норм формат
  const formatTime = timestamp => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

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
        ...cities[cityIndex],
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


  // if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
  //   setWicon(Sun)
  // } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
  //   setWicon(Cloud)
  // } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
  //   setWicon(Miss)
  // } else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
  //   setWicon(Mist)
  // } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
  //   setWicon(Rain)
  // } else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
  //   setWicon(Rain)
  // } else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
  //   setWicon(Snow1)
  // } else {
  //   setWicon(Sun)
  // }

  


  return (
    <>
      {cities.length > 0 ? ( 
      <div className='container'>
        {cities.map((city, index) => (
          <div className='div'>
          <div key={index}>
            <div className="first-floor">
              <p className="city">{city.name}</p>
              <p className='country'>{city.sys.country}</p>
            </div>

            <div className="second-floor">
              <h2 className='time'>{formatTime(city.dt)}</h2>
              <div className="btn_container">
              <button className="btn" onClick={() => getInfo(city.name, 'hourly forecast')}>Hourly forecast</button>
                <button className="btn" onClick={() => getInfo(city.name, 'weekly forecast')}>Weekly forecast</button>
              </div>
            </div>

            <ul className="list">
              <li className="item">
                <p className="date">{formatDate(city.dt)}</p>
                <p className="day">{new Date(city.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</p>
              </li>
            </ul>

            <div className="search-icon">
              <img className="sun" src={Sun} alt="sun-icon" />
              <h1 className='temp'>{city.main.temp}°C</h1>
            </div>

            <div className="last-floor">
              <img className="reflesh" src={Reflesh} alt="" onClick={() => updateWeather(index)}/>
              <img className="heart" src={Heart} alt="" />
              <button className="see_more" onClick={()=>getInfo(city.name, 'see more')}>See more</button>
              <img className="delete" src={Delete} alt="" onClick={() => removeCity(index)}/>
            </div>
          </div>
          </div>
        ))}
      </div> ) : <p className='choose_city'>Оберіть місто</p>}
    </>
  );
};


