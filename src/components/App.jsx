import { GlobalStyle } from "../GlobalStyle";
import { News } from "./News/News";
import { Hero } from "./Hero/Hero";
import { HeroAPI } from "./Hero/HeroAPI";
import {Footer} from './Footer/Footer';
import { WeatherForecastForWeek } from "./WeatherForecastForWeek/WeatherForecastForWeek";

export const App = () => {
  return (
    <div>
      <Hero/>
      <News/>
      <Footer/>
      <GlobalStyle/>
    </div>
  );
};

