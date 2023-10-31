import { useEffect, useState } from 'react'
import { moreInfoApi } from './MoreInfoAPI';
import { MoreInfoItem } from './MoreInfoItem';
import { WiThermometer, WiHumidity, WiBarometer, WiStrongWind, } from "react-icons/wi";
import { MdAir, MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

export const MoreInfoList = ({city}) => {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [hourlyWeather, setHourlyWeather] = useState(null);
  const [weather, setWeather] = useState([])

    useEffect(() => {
        const infoJSON = localStorage.getItem(city)
      const info = JSON.parse(infoJSON)
      const fatchData = async () =>{
        setInfo(info)
      
      }

      fatchData()
      if(lat){
      moreInfoApi(lat, lon, setHourlyWeather)}
  
    
}, [city, lat, lon])

  const setInfo = (info) => {
    setWeather([
      { name: 'Feels like', value: info.main.feels_like, icon: WiThermometer },
      { name: 'Max', value: info.main.temp_max, icon: null },
      { name: 'Min', value: info.main.temp_min, icon: null },
      { name: 'Humidity', value: info.main.humidity, icon: WiHumidity },
      { name: 'Pressure ', value: info.main.pressure, icon: WiBarometer },
      { name: 'Wind speed', value: info.wind.speed, icon: MdAir },
      { name: 'Visibilit', value: info.visibility, icon: MdOutlineVisibility },
 ])
    
      setLat(info.coord.lat)
      setLon(info.coord.lon)


  }

  return <><ul>
    {weather.map((item) => {
      return <MoreInfoItem
      key={item.name}
        infoName={item.name}
        mainInfo={item.value}
      icon={item.icon}/>
    
    })}
  </ul>
    // {hourlyWeather && <ul>{hourlyWeather.map((hour) => {
    //   return <p key={hour.dt}>{hour.dt}</p>
    // })}</ul>}
    
    
    </>
}

// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// console.log(info.coord);
// '' = null