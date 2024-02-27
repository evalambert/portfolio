//Project.jsx
import { useState } from "react";
import { useSliderVisibility } from "../features/slider/SliderVisibilityContext";
import Accordion from "../features/accordion/Accordion";
import ButtonIcon from "../common/icon/ButtonIcon";
import { projects, infos } from "../../data/dataProject";
import { motion, AnimatePresence } from "framer-motion";
import About from "../features/About";

export default function Project({ className }) {
  const { hideSlider, showSlider } = useSliderVisibility();
  const [activeSection, setActiveSection] = useState("");

  const handleSectionClick = (section) => {
    if (activeSection === section) {
      showSlider();
    } else {
      hideSlider();
    }
    setActiveSection(activeSection === section ? "" : section);
  };

  const handleCloseClick = () => {
    setActiveSection("");
    showSlider();
  };

  const backgroundClass = activeSection
    ? "bg-white transition-colors duration-100"
    : "";
  const borderClass = activeSection ? "border-t-[1px]" : "";

  return (
    <section className={`${className} ${backgroundClass} w-full px-[20px]`}>
      <div
        className={`grid grid-cols-12 gap-0 text-white mix-blend-difference ${borderClass}`}
      >
        <nav className="col-start-1 col-end-7 flex gap-x-[8px]">
          <ButtonIcon
            className="rotate3d-animation"
            onClick={handleCloseClick}
            name="coeur"
          ></ButtonIcon>
          <button onClick={() => handleSectionClick("Index")}>Index</button>/
          <button onClick={() => handleSectionClick("Info")}>Info</button>
        </nav>
        {activeSection ? (
          <ButtonIcon
            className="col-start-12 col-end-13 flex justify-end items-center"
            onClick={handleCloseClick}
            name="close"
          ></ButtonIcon>
        ) : (
          <span className="col-start-12 col-end-13 flex justify-end">2024</span>
        )}
      </div>

      <AnimatePresence>
        {activeSection && (
          <motion.main
            key={activeSection} // Important Pour AnimatePresence détecte changement
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              opacity: { duration: 0.5 },
              height: { duration: 0.5, delay: 0.1 },
            }}
          >
            {activeSection === "Index" && <Accordion items={projects} />}
            {activeSection === "Info" && <About/> }
          </motion.main>
        )}
      </AnimatePresence>
    </section>
  );
}

{/* <p>{infos[0].content}</p> */}