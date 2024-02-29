//App.jsx

import { SliderVisibilityProvider } from "./components/features/slider/SliderVisibilityContext";
import Home from "./components/layout/Home";
import Project from "./components/layout/Project";

const App = () => {
  return (
    <SliderVisibilityProvider>
      <Home className="w-full h-screen fixed" />
      <Project className="w-full absolute px-[10px] bottom-[5px] md:px-[20px] md:bottom-[10px] left-0" />
    </SliderVisibilityProvider>
  );
};
export default App;
