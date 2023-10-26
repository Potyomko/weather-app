import { useEffect } from "react";
import { useState } from "react"

export const WeekForecastLocation = ({city}) => {
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
useEffect(() => {
    if(city){
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=3aa2b283ae00e020678bc1f53e2c9bfd`)
    .then((response) => response.json())
    .then((data) => {
            data.map((dataObj) => {
                return setLat(dataObj.lat)
            });
            data.map((dataObj) => {
                return setLon(dataObj.lon)
            });
        })
        .then((lat) => {
             window.localStorage.setItem('Latitude', JSON.stringify(lat));
            })
        .then((lon) => {
            window.localStorage.setItem('Longtitude', JSON.stringify(lon));
        })
        .catch((error) => {
            console.error('Помилка при отриманні даних погоди:', error);
          });
    }
    
}, [city]);
};

// export const WeekForecastApi = ({city}) => {
//     useEffect(() => {
//         if(city){
//             fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=40.7127281&lon=-74.0060152&appid=3aa2b283ae00e020678bc1f53e2c9bfd`)
//             .then((response) => response.json())
//             .then(data => console.log(data))
//         }
//     }, [city])
        
// };