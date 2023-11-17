import { useEffect, useState } from 'react'
import { moreInfoApi } from './MoreInfoAPI';
import { hourlyOwercast } from './Chart';
import { Line } from 'react-chartjs-2';
import { ChartContainer } from './MoreInfo.styled';
import { Container } from 'GlobalStyle';

export const MoreInfoChartComponent = ({ city }) => {
    const [hourlyWeather, setHourlyWeather] = useState(null);
    const [options, setOptions] = useState(null);
   const [data, setData] = useState(null);
    const [ourCity, setOurCity] = useState(null)
    
    useEffect(() => {
       
        if (!ourCity) {       
    const citysJSON = localStorage.getItem('cities');
        const citys = JSON.parse(citysJSON);
            setOurCity(citys.find(oneCity => oneCity.name === city)) 
       }
         
      if(ourCity && !hourlyWeather){
          moreInfoApi(ourCity.coord.lat, ourCity.coord.lon, setHourlyWeather)
        }
        
      if (hourlyWeather && !options) {
         hourlyOwercast(hourlyWeather, setOptions, setData)
      }

}, [city, ourCity, hourlyWeather, options])
    
    return <Container>
        <ChartContainer>{options && <Line options={options} data={data} />}</ChartContainer>
        </Container>
}