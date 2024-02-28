//Home.jsx
import { useState, useEffect } from "react";
import { useSliderVisibility } from "../features/slider/SliderVisibilityContext";
import Header from "./Header";
import SliderHome from "../features/slider/SliderHome";

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
      <SliderHome isSliderVisible={showSlider} />
    </section>
  );
}
