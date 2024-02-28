//App.jsx

import { SliderVisibilityProvider } from "./components/features/slider/SliderVisibilityContext";
import Home from "./components/layout/Home";
import Project from "./components/layout/Project";

const App = () => {
  return (
    <SliderVisibilityProvider>
      <Home className="fixed w-full h-screen" />
      <Project className="absolute bottom-[10px] left-0" />
    </SliderVisibilityProvider>
  );
};
export default App;
