import { useState } from "react";
import { useSliderVisibility } from "../features/slider/SliderVisibilityContext";
import Accordion from "../features/accordion/Accordion";
import { projects } from "../../data/dataProject";
import { motion, AnimatePresence } from "framer-motion";
import About from "../features/About";
import Nav from "../common/Nav";

export default function Project({ className }) {
  const { hideSlider, showSlider } = useSliderVisibility();
  const [activeSection, setActiveSection] = useState("");

  const handleSectionClick = (section) => {
    setActiveSection(activeSection === section ? "" : section);
    if (activeSection === section) {
      showSlider();
    } else {
      hideSlider();
    }
  };

  const handleCloseClick = () => {
    setActiveSection("");
    showSlider();
  };

  const backgroundClass = activeSection
    ? "bg-white transition-colors duration-100"
    : "";

  return (
    <section className={`${className} w-full px-[20px] ${backgroundClass}`}>
      <Nav
        handleSectionClick={handleSectionClick}
        handleCloseClick={handleCloseClick}
        activeSection={activeSection}
      />
      <AnimatePresence>
        {activeSection && (
          <motion.main
            key={activeSection}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              opacity: { duration: 0.5 },
              height: { duration: 0.5, delay: 0.1 },
            }}
          >
            {activeSection === "Index" && <Accordion items={projects} />}
            {activeSection === "Info" && <About />}
          </motion.main>
        )}
      </AnimatePresence>
    </section>
  );
}