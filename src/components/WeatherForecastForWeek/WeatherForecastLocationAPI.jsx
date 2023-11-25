import { useEffect } from "react";
import { useState } from "react";
import { WeatherForecastForWeek } from "./WeatherForecastForWeek";

export const WeekForecastLocationAPI = ({theCity}) => {
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [weather, setWeather] = useState(''); 
    const [cityName, setCityName] = useState('');

useEffect(() => {
    console.log('theCity: ', theCity)
    
    if(theCity){
        const myCity = JSON.parse(window.localStorage.getItem('cities')).find(oneCity => oneCity.name.toLowerCase() === theCity.toLowerCase())
        console.log(JSON.parse(window.localStorage.getItem('cities')));
        setLat(myCity.coord.lat)
        setLon(myCity.coord.lon)
        if(lat && lon && theCity){
            fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=40207e285e43c5b8e49ba7f2599cdd4b`)
        .then((response) => response.json())  
        .then(data => setWeather(data))
        }
        
        console.log(myCity)
    }
        console.log(lat)
        console.log(lon)
    }
    , [theCity, lat, lon]);
return(
    <>
    {console.log(weather)}
    {weather && <WeatherForecastForWeek theWeather={weather}/>}
    </>
)
}