import { useEffect, useState } from "react";


export const HeroAPI = ()=>{

    const [weatherData, setWeatherData] = useState(null); 

useEffect(()=>{
    const a = false
   
        fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=018399e824faf2110a59974f80cc6c36')
        .then((response) => response.json())
        .then((data) => {
            setWeatherData(data);
          })
   
}, [] )

}