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
                return (
                    <>
                    {setLat(dataObj.lat)}
                    {console.log(lat)}
                    </>)
            });
            data.map((dataObj) => {
                return (
                    <>
                    {setLon(dataObj.lon)}
                    {console.log(lon)}
                    </>)
            });
            console.log(lat)
        })
        .then((lat) => {
            window.localStorage.setItem('Latitude', JSON.stringify(lat));
            console.log(lat)
            })
        .then((lon) => {
            window.localStorage.setItem('Longtitude', JSON.stringify(lon));
        })
        .catch((error) => {
            console.error('Помилка при отриманні даних погоди:', error);
          });

          fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=daily&appid=40207e285e43c5b8e49ba7f2599cdd4b`)
          .then((response) => response.json())
          .then(data => console.log(data))

    }
    
}, [city, lat, lon]);
return window.localStorage.setItem('lat', JSON.stringify(lat))
};


// export const WeekForecastAPI = ({city, lat, lon}) => {
//     useEffect(() => {
//         if(city){
//             fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=40.7127281&lon=-74.0060152&exclude=daily&appid=40207e285e43c5b8e49ba7f2599cdd4b`)
//             .then((response) => response.json())
//             .then(data => console.log(data))
//         }
//     }, [city, lat, lon])
// return console.log(window.localStorage.getItem(lat))
// }