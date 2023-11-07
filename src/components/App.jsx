import { GlobalStyle } from "../GlobalStyle";
import { Hero } from "./Hero/Hero";
import { HeroAPI } from "./Hero/HeroAPI";
import {Footer} from './Footer/Footer';
import Gallery from "./Gallery/Gallery";

export const App = () => {
  return (
    <div>
      <Hero/>
      <Gallery />
      <Footer/>
      <GlobalStyle/>
    </div>
  );
};
