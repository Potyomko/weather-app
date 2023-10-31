import { GlobalStyle } from "../GlobalStyle";
import { Hero } from "./Hero/Hero";
import { HeroAPI } from "./Hero/HeroAPI";
import {Footer} from './Footer/Footer';
import { WeatherForecastForWeek } from "./WeatherForecastForWeek/WeatherForecastForWeek";

export const App = () => {
  return (
    <div>
      <Hero/>
      <WeatherForecastForWeek/>
      <Footer/>
      <GlobalStyle/>
    </div>
  );
};
