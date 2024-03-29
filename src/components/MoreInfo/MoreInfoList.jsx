import { useEffect, useState } from 'react'
import { MoreInfoItem } from './MoreInfoItem';
import { WiThermometer, WiHumidity, WiBarometer } from "react-icons/wi";
import { MdAir, MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { InfoList, InfoItem } from './MoreInfo.styled';
import { Container } from 'GlobalStyle';

export const MoreInfoList = ({city}) => {

  const [weather, setWeather] = useState([])

  useEffect(() => {
      
    const citysJSON = localStorage.getItem('cities');
    const citys = JSON.parse(citysJSON);
    citys.map(oneCity => {
      if (oneCity.name === city) {
         setInfo(oneCity)
      }
      
      return oneCity
    });  
}, [city])

  const setInfo = (info) => {

    const visibility = info.visibility > 300 ? 'Unlimited' : 'Limited';
    const visibilityIcon = info.visibility > 300 ? MdOutlineVisibility : MdOutlineVisibilityOff;

    setWeather([
      { name: 'Feels like', value:` ${info.main.feels_like}℃`, icon: WiThermometer },
      { name: 'Max ℃', value: `${info.main.temp_max}℃`, icon: null,  name2: 'Min ℃', value2: `${info.main.temp_min}℃` },
      { name: 'Humidity', value: `${info.main.humidity}%`, icon: WiHumidity },
      { name: 'Pressure ', value:` ${info.main.pressure} Pa`, icon: WiBarometer },
      { name: 'Wind speed', value: `${info.wind.speed} m/s`, icon: MdAir },
      { name: 'Visibility', value: visibility, icon: visibilityIcon },
 ])

  }

  return <Container><InfoList>
    {weather.map((item) => {
      return <InfoItem  key={item.name} icon={item.icon ? 0 : 1}>
      <MoreInfoItem
        infoName={item.name}
        mainInfo={item.value}
      icon={item.icon}/>
        {!item.icon && <MoreInfoItem
          infoName={item.name2}
          mainInfo={item.value2}
          icon={item.icon} />}
    </InfoItem>
    })}
  </InfoList>
    </Container>
}

// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// console.log(info.coord);
// '' = null