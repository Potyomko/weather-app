import { Li } from "./WeatherForecastForWeek.styled";
import { P } from "./WeatherForecastForWeek.styled";
import { Ul } from "./WeatherForecastForWeek.styled";
import { Heading, WeeklyContainer, Temperature } from "./WeatherForecastForWeek.styled";
import { formatDate } from "./WeatherForecastLocationAPI";
import { Container } from "GlobalStyle";


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
        {/* {console.log(firstDayData.temp.day)}  http://openweathermap.org/img/w/" + iconcode + ".png*/}
<Container>
<WeeklyContainer>
            <Heading>8-day forecast</Heading>
        <Ul>

             <Li>
                <P>{formatDate(firstDayData.dt)}</P>
                <Temperature>
                    <P>Temp: {(firstDayData.temp.day - 273.15).toFixed(2)} / {(firstDayData.temp.night - 273.15).toFixed(2)} °C</P> </Temperature>
                <P>{firstDayData.weather.map(oneWeather => {return oneWeather.description})}</P>
            </Li>
             <Li>
                    <P>{formatDate(secondDayData.dt)}</P>
                    <Temperature> <P>Temp: {(secondDayData.temp.day - 273.15).toFixed(2)} / {(secondDayData.temp.night - 273.15).toFixed(2)} °C </P></Temperature>
               
                <P>{secondDayData.weather.map(oneWeather => {return oneWeather.description})}</P>
            </Li>
            <Li>
                    <P>{formatDate(thirdDayData.dt)}</P>
                    <Temperature>                <P>Temp: {(thirdDayData.temp.day - 273.15).toFixed(2)} / {(thirdDayData.temp.night - 273.15).toFixed(2)} °C </P></Temperature>

                <P>{thirdDayData.weather.map(oneWeather => {return oneWeather.description})}</P>
            </Li>
            <Li>
                    <P>{formatDate(fourthDayData.dt)}</P>
                    <Temperature>
                                        <P>Temp: {(fourthDayData.temp.day - 273.15).toFixed(2)} / {(fourthDayData.temp.night - 273.15).toFixed(2)} °C </P>
                    </Temperature>

                <P>{fourthDayData.weather.map(oneWeather => {return oneWeather.description})}</P>
            </Li>
            <Li>
                    <P>{formatDate(fifthDayData.dt)}</P>
                    <Temperature>
                         <P>Temp: {(fifthDayData.temp.day - 273.15).toFixed(2)} / {(fifthDayData.temp.night - 273.15).toFixed(2)} °C </P>
                       </Temperature>
               
                <P>{fifthDayData.weather.map(oneWeather => {return oneWeather.description})}</P>
            </Li>
            <Li>
                    <P>{formatDate(sixthDayData.dt)}</P>
                    <Temperature>
                                        <P>Temp: {(sixthDayData.temp.day - 273.15).toFixed(2)} / {(sixthDayData.temp.night - 273.15).toFixed(2)} °C </P>
                    </Temperature>

                <P>{sixthDayData.weather.map(oneWeather => {return oneWeather.description})}</P>
            </Li>
            <Li>
                    <P>{formatDate(seventhDayData.dt)}</P>
                    <Temperature>
                                        <P>Temp: {(seventhDayData.temp.day - 273.15).toFixed(2)} / {(seventhDayData.temp.night - 273.15).toFixed(2)} °C </P>
                    </Temperature>

                <P>{seventhDayData.weather.map(oneWeather => {return oneWeather.description})}</P>
            </Li>
            <Li>
                    <P>{formatDate(eighthDayData.dt)}</P>
                    <Temperature>
                                        <P>Temp: {(eighthDayData.temp.day - 273.15).toFixed(2)} / {(eighthDayData.temp.night - 273.15).toFixed(2)} °C </P>
                    </Temperature>

                <P>{eighthDayData.weather.map(oneWeather => {return oneWeather.description})}</P>
            </Li>
            </Ul>
            </WeeklyContainer>
        </Container>
         </>
    );
    
};