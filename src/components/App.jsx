import { GlobalStyle } from "../GlobalStyle";
// import { News } from "./News/News";
import { Hero } from "./Hero/Hero";
import {Footer} from './Footer/Footer';
import Gallery from "./Gallery/Gallery";
import { WeatherForecastForWeek } from "./WeatherForecastForWeek/WeatherForecastForWeek";
import { Header } from "./Header/Header";
import { WeekForecastLocationAPI } from "./WeatherForecastForWeek/WeatherForecastLocationAPI";
import { MoreInfoList } from "./MoreInfo/MoreInfoList";
import { MoreInfoChartComponent } from "./MoreInfo/MoreInfoChartComponent";
import Weather from './WeatherCard/WeatherCard'
import { useState } from "react";

export const App = () => {
  const [cityName, setCityName] = useState('')
  const getCityName = (city) => {
    setCityName(city)
  }
  console.log(cityName);

  return (
    <div>
      <Header />
      <Hero getCityName={getCityName}/>
      <Weather cityName={cityName}/>
      {console.log(<WeatherForecastForWeek/>)}
      <WeekForecastLocationAPI theCity={'New York'}/>
      {/* <News/> */}
      <Footer/>
      <GlobalStyle/>
    </div>
  );
};

