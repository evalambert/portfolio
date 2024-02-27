// SliderVisibilityContext.jsx
import { createContext, useContext, useState } from 'react';

const SliderVisibilityContext = createContext();

export const useSliderVisibility = () => useContext(SliderVisibilityContext);

export const SliderVisibilityProvider = ({ children }) => {
  const [isSliderVisible, setIsSliderVisible] = useState(true);

  const showSlider = () => setIsSliderVisible(true);
  const hideSlider = () => setIsSliderVisible(false);

  return (
    <SliderVisibilityContext.Provider value={{ isSliderVisible, showSlider, hideSlider }}>
      {children}
    </SliderVisibilityContext.Provider>
  );
};
