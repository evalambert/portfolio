//Project.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSliderVisibility } from "../features/slider/SliderVisibilityContext";
import Accordion from "../features/accordion/Accordion";
import { projects } from "../../data/dataProject";
import About from "./About";
import Nav from "../common/Nav";

export default function Project() {
  const { hideSlider, showSlider } = useSliderVisibility();
  const [activeSection, setActiveSection] = useState("");
  const [isExiting, setIsExiting] = useState(false);

  const handleSectionClick = (section) => {
    if (activeSection === section) {
      setIsExiting(true);
      setTimeout(() => {
        setActiveSection("");
        setIsExiting(false);
        showSlider();
      }, 500);
    } else {
      setActiveSection(section);
      hideSlider();
    }
  };

  const handleCloseClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      setActiveSection("");
      setIsExiting(false);
      showSlider();
    }, 500);
  };

  useEffect(() => {
    if (!activeSection && !isExiting) {
      setIsExiting(false);
    }
  }, [activeSection, isExiting]);

  const borderClass = activeSection ? "border-t-[1px]" : "";
  const backgroundTransitionClass =
    "transition-background duration-500 ease-in-out";

  return (
    <motion.section
      key={activeSection}
      initial={isExiting ? { y: 0 } : { y: "calc(100vh - 80px)" }}
      animate={isExiting ? { y: "calc(100vh - 80px)" } : { y: 0 }}
      className={`w-full absolute px-[10px] md:px-[20px] ${
        activeSection
          ? "top-[25px] md:top-[50px] h-screen"
          : "bottom-[5px] md:bottom-[10px]"
      } ${
        isExiting || activeSection ? "bg-white" : "bg-transparent"
      } ${backgroundTransitionClass}`}
    >
      <Nav
        handleSectionClick={handleSectionClick}
        handleCloseClick={handleCloseClick}
        activeSection={activeSection}
        borderClass={borderClass}
      />
      {activeSection && (
        <main key={activeSection} className="overflow-scroll">
          {activeSection === "Index" && <Accordion items={projects} />}
          {activeSection === "Info" && <About />}
        </main>
      )}
    </motion.section>
  );
}
