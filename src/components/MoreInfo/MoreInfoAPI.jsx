import {useState} from 'react'

export function moreInfoApi(lat, lon, setting) {
  // const [hourlyWeNeed, setHourlyWeNeed] = useState(null)
  // let we = 0
   return fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=40207e285e43c5b8e49ba7f2599cdd4b`)
      .then(rez=> rez.json())
    .then(res =>  setting(res.hourly.slice(0, 12)))
  .catch(err => err)
  
   
    
  // return hourlyWeNeed
  // console.log(lat)
  //  console.log(lon)
  
    
    // const prom = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=40207e285e43c5b8e49ba7f2599cdd4b`)
    // const rez = await prom.json()
    // const hourly = rez.hourly
    // return hourly.slice(0, 20)
}