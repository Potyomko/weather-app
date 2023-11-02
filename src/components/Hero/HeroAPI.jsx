import { useEffect, useState } from "react";

export const HeroAPI = ({ city }) => {
  const [weather, setWeatherData] = useState([]);

  useEffect(() => {
    if (city) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=018399e824faf2110a59974f80cc6c36`)
        .then((response) => response.json())
        .then((data) => {
          setWeatherData((prevWeather) => [...prevWeather, data]);

          const citiesWeather = JSON.parse(localStorage.getItem('cities')) || [];
          citiesWeather.push(data);
          localStorage.setItem('cities', JSON.stringify(citiesWeather));
        })
        .catch((error) => {
          console.error('Помилка при отриманні даних погоди:', error);
        });
    }
  }, [city, weather]);
}