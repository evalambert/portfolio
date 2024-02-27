//Home.jsx
import { useState, useEffect } from "react";
import { useSliderVisibility } from "../features/slider/SliderVisibilityContext";
import Header from "./Header";
import Slider from "../features/slider/Slider";

export default function Home({ className }) {
  const { isSliderVisible } = useSliderVisibility();
  const [internalShowSlider, setInternalShowSlider] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInternalShowSlider(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const showSlider = internalShowSlider && isSliderVisible;

  return (
    <section className={`${className}`}>
      <Header />
      {showSlider && <Slider />}
    </section>
  );
}
