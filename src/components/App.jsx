import { GlobalStyle } from "../GlobalStyle";
import { News } from "./News/News";
import { Hero } from "./Hero/Hero";
import { HeroAPI } from "./Hero/HeroAPI";
export const App = () => {
  return (
    <div>
      <Hero />
      <News/>

      <GlobalStyle/>
    </div>
  );
};
