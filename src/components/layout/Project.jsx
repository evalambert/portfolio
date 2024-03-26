import { useState, useEffect } from "react";
import { useSliderVisibility } from "../features/slider/SliderVisibilityContext";
import Accordion from "../features/accordion/Accordion";
import About from "./About";
import Nav from "../common/Nav";
import "./Project.css";

export default function Project() {
  const { hideSlider, showSlider } = useSliderVisibility();
  const [activeSection, setActiveSection] = useState("");
  const [displayedSection, setDisplayedSection] = useState("");
  const [isExiting, setIsExiting] = useState(false);

  // ++++ Retardement suppression du contenu ++++
  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        setIsExiting(false);
        setDisplayedSection("");
      }, 500); // = durée de l'animation de sortie
      return () => clearTimeout(timer);
    } else if (activeSection) {
      setDisplayedSection(activeSection);
    }
  }, [activeSection, isExiting]);

  // ++++ Ouverture/Fermeture About/Index et gestion du sliderProject ++++
  const handleSectionClick = (section) => {
    if (activeSection === section) {
      setActiveSection("");
      setIsExiting(true);
      showSlider();
    } else {
      setActiveSection(section);
      setIsExiting(false);
      hideSlider();
    }
  };

  // ++++ Fermeture explicite About/Index ++++
  const handleCloseClick = () => {
    setActiveSection("");
    setIsExiting(true);
    showSlider();
  };

  const borderClass = activeSection ? "border-t-[1px]" : "";
  const topClass = activeSection ? "open" : "";

  return (
    <div className="w-screen h-screen">
      <section className={`wrapper-section ${topClass}`}>
        <Nav
          handleSectionClick={handleSectionClick}
          handleCloseClick={handleCloseClick}
          activeSection={activeSection}
          borderClass={borderClass}
        />
        <main className="overflow-scroll">
          {displayedSection === "index" && <Accordion />}
          {displayedSection === "about" && <About />}
        </main>
      </section>
    </div>
  );
}
