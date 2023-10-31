import { useEffect, useState } from "react";

export const HeroAPI = ({ city }) => {
  const [weather, setWeatherData] = useState([]);

  
    
  useEffect(() => {

    

    if (city) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=018399e824faf2110a59974f80cc6c36`)
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(prev=>[...prev, data]);
          window.localStorage.setItem('cities', JSON.stringify(weather));
         
        })
        .catch((error) => {
          console.error('Помилка при отриманні даних погоди:', error);
        });
    }
  }, [city]);
}