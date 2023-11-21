import { useState } from "react";
import { GlobalStyle } from "../GlobalStyle";
import { News } from "./News/News";
import { Hero } from "./Hero/Hero";
// import { HeroAPI } from "./Hero/HeroAPI";
// import {MoreInfoList } from './MoreInfo/MoreInfoList.jsx';
import { SomeInfo } from "./SomeInfo/SomeInfo";
import {Weather} from '../components/'
import {Footer} from './Footer/Footer';
import Gallery from "./Gallery/Gallery";
import { WeatherForecastForWeek } from "./WeatherForecastForWeek/WeatherForecastForWeek";
import { Header } from "./Header/Header";
import { WeekForecastLocationAPI } from "./WeatherForecastForWeek/WeatherForecastLocationAPI";
import { MoreInfoList } from "./MoreInfo/MoreInfoList";
import { MoreInfoChartComponent } from "./MoreInfo/MoreInfoChartComponent";
import Weather from './WeatherCard/WeatherCard'
import { useState } from "react";
import { WhoWeAre } from "./WhoWeAre/WhoWeAre";

export const App = () => {
  const [cityName, setCityName] = useState('')
  const getCityName = (city) => {
    setCityName(city)
  }
  return (
  console.log(cityName);
    <div>
      <Header />
      <Hero getCityName={getCityName}/>
      <Weather cityName={cityName}/>
      {console.log(<WeatherForecastForWeek/>)}
      {/* {console.log(<WeatherForecastForWeek/>)} */}
      {/* <WeekForecastLocationAPI theCity={'Kyiv'}/> */}
      <SomeInfo />
      {console.log(<WeatherForecastForWeek/>)}
      {/* <WeekForecastLocationAPI theCity={'New York'}/> */}
      <News/>
      {/* <Gallery /> */}
      <WhoWeAre/>
      <Footer/>
      <GlobalStyle/>
    </div>
  );
};