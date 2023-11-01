import { GlobalStyle } from "../GlobalStyle";
import { News } from "./News/News";
import { Hero } from "./Hero/Hero";
import { HeroAPI } from "./Hero/HeroAPI";
import {MoreInfoList } from './MoreInfo/MoreInfoList.jsx';
import {Footer} from './Footer/Footer';
import { WeatherForecastForWeek } from "./WeatherForecastForWeek/WeatherForecastForWeek";
import { Header } from "./Header/Header";

export const App = () => {
  return (
    <div>
      <Header/>
      <WeatherForecastForWeek/>
      <News/>
      <Footer/>
      <GlobalStyle/>
    </div>
  );
};

