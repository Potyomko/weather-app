import { GlobalStyle } from "../GlobalStyle";
import { Hero } from "./Hero/Hero";
import { HeroAPI } from "./Hero/HeroAPI";
import {Footer} from './Footer/Footer';

export const App = () => {
  return (
    <div>
      <Hero/>
      <Footer/>
      <GlobalStyle/>
    </div>
  );
};
