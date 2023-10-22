import { GlobalStyle } from "../GlobalStyle";
import { HeroAPI } from "./Hero/HeroAPI";
export const App = () => {
  return (
    <div>
      <HeroAPI/>
      <GlobalStyle/>
    </div>
  );
};
