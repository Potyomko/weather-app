import { useState } from "react";
import { GlobalStyle } from "../GlobalStyle";
import { News } from "./News/News";
import { Hero } from "./Hero/Hero";
import { SomeInfo } from "./SomeInfo/SomeInfo";
// import { Weather } from '../components/WeatherCard/WeatherCard'
import {Footer} from './Footer/Footer';
import { WeatherForecastForWeek } from "./WeatherForecastForWeek/WeatherForecastForWeek";
// import { Header } from "./Header/Header";
import { WhoWeAre } from "./WhoWeAre/WhoWeAre";

export const App = () => {
  const [cityName, setCityName] = useState('')
  const getCityName = (city) => {
    setCityName(city)
  }
  return (
    <div>
      {/* <Header /> */}
      <Hero getCityName={getCityName}/>
      {/* <Weather cityName={cityName}/> */}
      {console.log(<WeatherForecastForWeek/>)}
      <SomeInfo cityName={cityName}/>
      {console.log(<WeatherForecastForWeek/>)}
      <News/>
      <WhoWeAre/>
      <Footer/>
      <GlobalStyle/>
    </div>
  );
};