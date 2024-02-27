//App.jsx
import { useState } from "react";
import { SliderVisibilityProvider } from "./components/features/slider/SliderVisibilityContext";

import Home from "./components/layout/Home";
import Project from "./components/layout/Project";

const App = () => {
  const [showSlider, setShowSlider] = useState(true);

  return (
    <SliderVisibilityProvider>
      <Home className="fixed w-full h-screen" showSlider={showSlider} />
      <Project
        className="absolute bottom-[10px] left-0"
        setShowSlider={setShowSlider}
      />
    </SliderVisibilityProvider>
  );
};

export default App;
