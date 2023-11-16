import { Li } from "./WeatherForecastForWeek.styled";
import { P } from "./WeatherForecastForWeek.styled";

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
        {/* <p>{theWeather.lat}</p>
        {console.log(theWeather.timezone)}
        {console.log(theWeather.daily[0])} */}
        {/* {console.log(firstDayData.temp.day)}  */}
        
        <ul>
            <h2>8-day forecast</h2>
            {/* {console.log(myWeather)} */}
             <Li>
                <P>First day of week:</P>
                <p>Temperature: {(firstDayData.temp.day - 273.15).toFixed(2)} / {(firstDayData.temp.night - 273.15).toFixed(2)} °C</p>
                <p>Weather: {firstDayData.weather.map(oneWeather => {return oneWeather.description})}</p>
            </Li>
             <Li>
                <P>Second day of week:</P>
                <p>Temperature: {(secondDayData.temp.day - 273.15).toFixed(2)} / {(secondDayData.temp.night - 273.15).toFixed(2)}</p>
                <p>Weather: {secondDayData.weather.map(oneWeather => {return oneWeather.description})}</p>
            </Li>
            <Li>
                <P>Third day of week:</P>
                <p>Temperature: {(thirdDayData.temp.day - 273.15).toFixed(2)} / {(thirdDayData.temp.night - 273.15).toFixed(2)}</p>
                <p>Weather: {thirdDayData.weather.map(oneWeather => {return oneWeather.description})}</p>
            </Li>
            <Li>
                <P>Fourth day of week:</P>
                <p>Temperature: {(fourthDayData.temp.day - 273.15).toFixed(2)} / {(fourthDayData.temp.night - 273.15).toFixed(2)}</p>
                <p>Weather: {fourthDayData.weather.map(oneWeather => {return oneWeather.description})}</p>
            </Li>
            <Li>
                <P>Fifth day of week:</P>
                <p>Temperature: {(fifthDayData.temp.day - 273.15).toFixed(2)} / {(fifthDayData.temp.night - 273.15).toFixed(2)}</p>
                <p>Weather: {fifthDayData.weather.map(oneWeather => {return oneWeather.description})}</p>
            </Li>
            <Li>
                <P>Sixth day of week:</P>
                <p>Temperature: {(sixthDayData.temp.day - 273.15).toFixed(2)} / {(sixthDayData.temp.night - 273.15).toFixed(2)}</p>
                <p>Weather: {sixthDayData.weather.map(oneWeather => {return oneWeather.description})}</p>
            </Li>
            <Li>
                <P>Seventh day of week:</P>
                <p>Temperature: {(seventhDayData.temp.day - 273.15).toFixed(2)} / {(seventhDayData.temp.night - 273.15).toFixed(2)}</p>
                <p>Weather: {seventhDayData.weather.map(oneWeather => {return oneWeather.description})}</p>
            </Li>
       </ul>
         </>
    );
    
};