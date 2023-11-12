import { useEffect, useState } from 'react'
import { moreInfoApi } from './MoreInfoAPI';
import { hourlyOwercast } from './Chart';
import { Line } from 'react-chartjs-2';
import { ChartContainer } from './MoreInfo.styled';
export const MoreInfoChartComponent = ({ city }) => {
    const [hourlyWeather, setHourlyWeather] = useState(null);
    const [options, setOptions] = useState(null);
   const [data, setData] = useState(null);
    const [ourCity, setOurCity] = useState(null)
    const [currentCity, setCurrentCity] = useState(city);
    const [prevCity, setPrevcity] = useState(null)
    
    useEffect(() => {
        console.log(prevCity);
        if (city !== prevCity) {
            setPrevcity(city)
            setCurrentCity(city)
        }

        if(!ourCity || currentCity){
    const citysJSON = localStorage.getItem('cities');
        const citys = JSON.parse(citysJSON);
            setOurCity(citys.find(oneCity => oneCity.name === city)) 
            setHourlyWeather(null)
       }
         
      if(ourCity && !hourlyWeather){
          moreInfoApi(ourCity.coord.lat, ourCity.coord.lon, setHourlyWeather)
          setOptions(null)
        }
        
      if (hourlyWeather && !options) {
         hourlyOwercast(hourlyWeather, setOptions, setData)
      }
if(currentCity){
        setCurrentCity(null)
}

}, [city, ourCity, hourlyWeather, options, currentCity])
    
   return <ChartContainer>{options && <Line options={options} data={data} />}</ChartContainer>
}