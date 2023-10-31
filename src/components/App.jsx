import { GlobalStyle } from "../GlobalStyle";
import { Hero } from "./Hero/Hero";
import { HeroAPI } from "./Hero/HeroAPI";
import {MoreInfoList } from './MoreInfo/MoreInfoList.jsx';
export const App = () => {
  return (
    <div>
      <Hero/>
    
      <GlobalStyle/>
    </div>
  );
};
