import { useEffect } from "react";
import { useState } from "react"

export const WeekForecastLocationAPI = ({city}) => {
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
useEffect(() => {
    if(city){
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=40207e285e43c5b8e49ba7f2599cdd4b`)
        .then((response) => response.json())
        .then((data) => {
            data.map((dataObj) => {
                return setLat(dataObj.lat)
            });
            data.map((dataObj) => {
                return setLon(dataObj.lon)
            });
        })
        .catch((error) => {
            console.error('Помилка при отриманні даних погоди:', error);
          });

        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=40207e285e43c5b8e49ba7f2599cdd4b`)
        .then((response) => response.json())  
        .then(data => window.localStorage.setItem('Weather', JSON.stringify(data)))

    }
    
}, [city, lat, lon]);
return(
    <>
    {window.localStorage.setItem('Latitude', JSON.stringify.lat)}
    {window.localStorage.setItem('Longtitude', JSON.stringify.lon)}
    </>
)
};
