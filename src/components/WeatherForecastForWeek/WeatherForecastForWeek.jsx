import { useEffect } from "react";
import { useState } from "react";

export const WeatherForecastForWeek = () => {
    // const [lat, setLat] = useState('');
    // const [lon, setLon] = useState('');
    // const [weather, setWeather] = useState('');

    const weatherData = window.localStorage.getItem('Weather');
    const myWeather = JSON.parse(weatherData);
    // myWeather.map((oneWeather) => {
    //     return <p>{oneWeather.lat}</p>
    // })
    return(
        <>
        <ul>
            <h2>Current forecast</h2>
            <li>Temperature: {(myWeather.current.temp - 273.15).toFixed(2)} °C</li>
            {/* <li>Weather: {myWeather.current.weather.map(theWeather => {return theWeather.main})}</li> */}
            <li>Weather: {myWeather.current.weather.map(theWeather => {return theWeather.description})}</li>
       </ul>
         </>
    )
    
};