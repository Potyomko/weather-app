import { GlobalStyle } from "../GlobalStyle";
import { Hero } from "./Hero/Hero";
import { HeroAPI } from "./Hero/HeroAPI";
import { News } from "./News/News";
export const App = () => {
  return (
    <div>
      <Hero/>
      <News/>
      <GlobalStyle/>
    </div>
  );
};
