import { Li } from "./WeatherForecastForWeek.styled";
import { P } from "./WeatherForecastForWeek.styled";
import { Ul } from "./WeatherForecastForWeek.styled";
import { Heading } from "./WeatherForecastForWeek.styled";
import { formatDate } from "./WeatherForecastLocationAPI";

export const WeatherForecastForWeek = ({theWeather}) => {
    
    const firstDayData = theWeather.daily[0]
    const secondDayData = theWeather.daily[1]
    const thirdDayData = theWeather.daily[2]
    const fourthDayData = theWeather.daily[3]
    const fifthDayData = theWeather.daily[4]
    const sixthDayData = theWeather.daily[5]
    const seventhDayData = theWeather.daily[6]
    const eighthDayData = theWeather.daily[7]

return(
        <>
        {console.log(theWeather)}
        {console.log(formatDate(firstDayData.dt))}
        {/* <p>{theWeather.lat}</p>
        {console.log(theWeather.timezone)}
        {console.log(theWeather.daily[0])} */}
        {/* {console.log(firstDayData.temp.day)}  */}
        
        <Ul>
            <Heading>8-day forecast</Heading>
             <Li>
                <P>{formatDate(firstDayData.dt)}</P>
                <P>Temperature: {(firstDayData.temp.day - 273.15).toFixed(2)} / {(firstDayData.temp.night - 273.15).toFixed(2)} °C </P>
                <P>Weather: {firstDayData.weather.map(oneWeather => {return oneWeather.description})}</P>
            </Li>
             <Li>
                <P>{formatDate(secondDayData.dt)}</P>
                <P>Temperature: {(secondDayData.temp.day - 273.15).toFixed(2)} / {(secondDayData.temp.night - 273.15).toFixed(2)} °C </P>
                <P>Weather: {secondDayData.weather.map(oneWeather => {return oneWeather.description})}</P>
            </Li>
            <Li>
                <P>{formatDate(thirdDayData.dt)}</P>
                <P>Temperature: {(thirdDayData.temp.day - 273.15).toFixed(2)} / {(thirdDayData.temp.night - 273.15).toFixed(2)} °C </P>
                <P>Weather: {thirdDayData.weather.map(oneWeather => {return oneWeather.description})}</P>
            </Li>
            <Li>
                <P>{formatDate(fourthDayData.dt)}</P>
                <P>Temperature: {(fourthDayData.temp.day - 273.15).toFixed(2)} / {(fourthDayData.temp.night - 273.15).toFixed(2)} °C </P>
                <P>Weather: {fourthDayData.weather.map(oneWeather => {return oneWeather.description})}</P>
            </Li>
            <Li>
                <P>{formatDate(fifthDayData.dt)}</P>
                <P>Temperature: {(fifthDayData.temp.day - 273.15).toFixed(2)} / {(fifthDayData.temp.night - 273.15).toFixed(2)} °C </P>
                <P>Weather: {fifthDayData.weather.map(oneWeather => {return oneWeather.description})}</P>
            </Li>
            <Li>
                <P>{formatDate(sixthDayData.dt)}</P>
                <P>Temperature: {(sixthDayData.temp.day - 273.15).toFixed(2)} / {(sixthDayData.temp.night - 273.15).toFixed(2)} °C </P>
                <P>Weather: {sixthDayData.weather.map(oneWeather => {return oneWeather.description})}</P>
            </Li>
            <Li>
                <P>{formatDate(seventhDayData.dt)}</P>
                <P>Temperature: {(seventhDayData.temp.day - 273.15).toFixed(2)} / {(seventhDayData.temp.night - 273.15).toFixed(2)} °C </P>
                <P>Weather: {seventhDayData.weather.map(oneWeather => {return oneWeather.description})}</P>
            </Li>
            <Li>
                <P>{formatDate(eighthDayData.dt)}</P>
                <P>Temperature: {(eighthDayData.temp.day - 273.15).toFixed(2)} / {(eighthDayData.temp.night - 273.15).toFixed(2)} °C </P>
                <P>Weather: {eighthDayData.weather.map(oneWeather => {return oneWeather.description})}</P>
            </Li>
       </Ul>
         </>
    );
    
};