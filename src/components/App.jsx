import { useState } from "react";
import { GlobalStyle } from "../GlobalStyle";
import { News } from "./News/News";
import { Hero } from "./Hero/Hero";
import { SomeInfo } from "./SomeInfo/SomeInfo";
import { Weather } from '../components/WeatherCard/WeatherCard'
import {Footer} from './Footer/Footer';
import { WeatherForecastForWeek } from "./WeatherForecastForWeek/WeatherForecastForWeek";
import { Header } from "./Header/Header";
import { WhoWeAre } from "./WhoWeAre/WhoWeAre";
import { HeroAPI } from "./Hero/HeroAPI";

export const App = () => {
  const [cityName, setCityName] = useState('')
  const getCityName = (city) => {
    setCityName(city)
  }
  return (
    <div>
      <Header />
      <Hero getCityName={getCityName}/>
      {/* <HeroAPI cityName={cityName}/> */}
      <SomeInfo cityName={cityName}/>
      <News/>
      <WhoWeAre/>
      <Footer/>
      <GlobalStyle/>
    </div>
  );
};