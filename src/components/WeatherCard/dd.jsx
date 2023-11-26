import Sun from './weather_sun.png';
import Reflesh from './weather_reflesh.png';
import Delete from './weather_delete.png';
import Heart from './weather_heart.png';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// styles
import { Container } from 'GlobalStyle';
import {First, City, Country, BtnContainer, Btn, Time, Second, List, Item, Dete, Day, Temp, Last, SunIcon, RefleshIcon, See, DeleteIcon, ChooseCity, Cards} from './WeatherCard.styled'


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
      <Container>
        {cities.map((city, index) => (
          <Cards>
          <div key={index}>
            <First>
              <City>{city.name}</City>
              <Country className='country'>{city.sys.country}</Country>
            </First>

            <Second>
              <Time>{formatTime(city.dt)}</Time>
              <BtnContainer>
                <Btn onClick={() => getInfo(city.name, 'hourly forecast')}>Hourly forecast</Btn>
                <Btn onClick={() => getInfo(city.name, 'weekly forecast')}>Weekly forecast</Btn>
              </BtnContainer>
            </Second>

            <List>
              <Item>
                <Dete>{formatDate(city.dt)}</Dete>
                <Day>{new Date(city.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</Day>
              </Item>
            </List>

            <div className="search-icon">
              <SunIcon src={Sun} alt="sun-icon"/>
              <Temp>{city.main.temp}°C</Temp>
            </div>

            <Last>
              <RefleshIcon src={Reflesh} alt="" onClick={() => updateWeather(index)}/>
              <Heart src={Heart} alt="heart"/>
              <See onClick={()=>getInfo(city.name, 'see more')}>See more</See>
              <DeleteIcon src={Delete} alt="" onClick={() => removeCity(index)}/>
            </Last>
          </div>
          </Cards>
        ))}
      </Container> ) : <ChooseCity>Оберіть місто</ChooseCity>}
    </>
  );
};


