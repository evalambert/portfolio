//App.jsx

import Accordion from "./components/NewAccordion/NewAccordion";

/* import { SliderVisibilityProvider } from "./components/features/slider/SliderVisibilityContext";
import Home from "./components/layout/Home";
import Project from "./components/layout/Project";
 */
const App = () => {
  return (
    <Accordion />
   /*  <SliderVisibilityProvider>
      <Home className="w-screen h-screen fixed" />
      <Project />
    </SliderVisibilityProvider> */
  );
};
export default App;
