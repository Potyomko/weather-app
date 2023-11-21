import { useEffect } from "react";
import { useState } from "react";
import { WeatherForecastForWeek } from "./WeatherForecastForWeek";

export const WeekForecastLocationAPI = ({theCity}) => {
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [weather, setWeather] = useState(''); 
    const [cityName, setCityName] = useState('');
// useEffect(() => {
//     if('New York'){
//         const myCity = JSON.parse(window.localStorage.getItem('cities')).find(oneCity => oneCity.name === theCity)
//         setLat(myCity.coord.lat)
//         setLon(myCity.coord.lon)
//         if(lat && lon && theCity){
//             fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=40207e285e43c5b8e49ba7f2599cdd4b`)
//         .then((response) => response.json())  
//         .then(data => setWeather(data))
//         }
useEffect(() => {
    if(theCity){
        const myCity = JSON.parse(window.localStorage.getItem('cities')).find(oneCity => oneCity.name === theCity)
        setLat(myCity.coord.lat)
        setLon(myCity.coord.lon)
        if(lat && lon && theCity){
            fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=40207e285e43c5b8e49ba7f2599cdd4b`)
        .then((response) => response.json())  
        .then(data => setWeather(data))
        }
        
        console.log(myCity)
        
        console.log(lat)
        console.log(lon)
    }
    
}, [theCity, lat, lon]);
return(
    <>
    {console.log(weather)}
    {/* {window.localStorage.setItem('Latitude', JSON.stringify.lat)}
    {window.localStorage.setItem('Longtitude', JSON.stringify.lon)} */}
    {/* {weather && <WeatherForecastForWeek theWeather={weather}/>} */}
    {/* {cityName && <p>{cityName.name}</p>} */}
    </>
)
};
