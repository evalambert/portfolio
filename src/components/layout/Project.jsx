import { useState, useEffect } from "react";
import { useSliderVisibility } from "../features/slider/SliderVisibilityContext";
import Accordion from "../features/accordion/Accordion";
import { projects } from "../../data/dataProject";
import { motion, AnimatePresence } from "framer-motion";
import About from "./About";
import Nav from "../common/Nav";

export default function Project({ className }) {
  const { hideSlider, showSlider } = useSliderVisibility();
  const [activeSection, setActiveSection] = useState("");
  const [isExiting, setIsExiting] = useState(false); // Suivre si une sortie est en cours

  //  ———> Open Projects + Hide sliderHome
  const handleSectionClick = (section) => {
    if (activeSection === section) {
      setActiveSection("");
      setIsExiting(true);
      showSlider();
    } else {
      setActiveSection(section);
      hideSlider();
    }
  };

  // ———> Close Projects + Show sliderHome
  const handleCloseClick = () => {
    setActiveSection("");
    setIsExiting(true); // Commence l'animation de sortie
    showSlider();
  };

  const borderClass = activeSection ? "border-t-[1px]" : "";

  useEffect(() => {
    if (!activeSection) {
      // Si aucune section active, attendre la fin de l'animation pour réinitialiser
      const timer = setTimeout(() => {
        setIsExiting(false);
      }, 200); // Durée totale animation + délai
      return () => clearTimeout(timer);
    }
  }, [activeSection]);

  const backgroundTransitionClass =
    "transition-background duration-500 ease-in-out";

  return (
    <section
      className={`${className} ${
        isExiting || activeSection ? "bg-white" : "bg-transparent"
      } ${backgroundTransitionClass}`}
    >
      <Nav
        handleSectionClick={handleSectionClick}
        handleCloseClick={handleCloseClick}
        activeSection={activeSection}
        borderClass={borderClass}
      />
      <AnimatePresence onExitComplete={() => setIsExiting(false)}>
        {" "}
        {/* Réinitialisation de isExiting à la fin de l'animation de sortie */}
        {activeSection && (
          <motion.main
            key={activeSection}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{
              height: { duration: 0.5, delay: 0.1 },
            }}
            className="overflow-hidden"
          >
            {activeSection === "Index" && <Accordion items={projects} />}
            {activeSection === "Info" && <About />}
          </motion.main>
        )}
      </AnimatePresence>
    </section>
  );
}
