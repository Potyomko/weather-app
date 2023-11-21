import { GlobalStyle } from "../GlobalStyle";
import { News } from "./News/News";
import { Hero } from "./Hero/Hero";
// import { HeroAPI } from "./Hero/HeroAPI";
// import {MoreInfoList } from './MoreInfo/MoreInfoList.jsx';
import { SomeInfo } from "./SomeInfo/SomeInfo";
import {Footer} from './Footer/Footer';
import Gallery from "./Gallery/Gallery";
import { WeatherForecastForWeek } from "./WeatherForecastForWeek/WeatherForecastForWeek";
import { Header } from "./Header/Header";
import { WeekForecastLocationAPI } from "./WeatherForecastForWeek/WeatherForecastLocationAPI";
import { MoreInfoList } from "./MoreInfo/MoreInfoList";
import { MoreInfoChartComponent } from "./MoreInfo/MoreInfoChartComponent";

export const App = () => {
  return (
    <div>
      <Header />
<<<<<<< Updated upstream
      <Hero />
      <SomeInfo />
=======
      <Hero getCityName={getCityName}/>
      <Weather cityName={cityName}/>
>>>>>>> Stashed changes
      {/* {console.log(<WeatherForecastForWeek/>)} */}
      {/* <WeekForecastLocationAPI theCity={'Kyiv'}/> */}
      <SomeInfo />
      <News/>
      <Footer/>
      <GlobalStyle/>
    </div>
  );
};

