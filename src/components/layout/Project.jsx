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

  // Gère les clics sur les sections: ouvre/ferme les projets et montre/cache le slider.
  const handleSectionClick = (section) => {
    if (activeSection === section) {
      // Si la section cliquée est déjà active, commence l'animation de sortie.
      setIsExiting(true);
      setTimeout(() => {
        // Après l'animation, réinitialise les états et montre le slider.
        setActiveSection("");
        setIsExiting(false);
        showSlider();
      }, 500); // Assure que la durée correspond à celle de l'animation.
    } else {
      // Si une nouvelle section est cliquée, l'active et cache le slider.
      setActiveSection(section);
      hideSlider();
    }
  };

  // Gère la fermeture des projets et montre le slider, similaire à handleSectionClick pour la même section.
  const handleCloseClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      setActiveSection("");
      setIsExiting(false);
      showSlider();
    }, 500);
  };

  // Effet pour s'assurer que l'état isExiting est correctement géré lorsqu'aucune section n'est active.
  useEffect(() => {
    if (!activeSection && !isExiting) {
      setIsExiting(false);
    }
  }, [activeSection, isExiting]);

  // Classes conditionnelles pour gérer les bordures et transitions de fond.
  const borderClass = activeSection ? "border-t-[1px]" : "";
  const backgroundTransitionClass = "transition-background duration-500 ease-in-out";

  // La section rendue contient la navigation et le contenu de la section active.
  // Utilisation de Framer Motion pour les animations de transition.
  return (
    <motion.section
      key={activeSection} // Clé unique pour le re-rendu lors du changement de section.
      initial={isExiting ? { y: 0 } : { y: "calc(100vh - 80px)" }} // Position initiale.
      animate={isExiting ? { y: "calc(100vh - 80px)" } : { y: 0 }} // Animation de sortie ou d'entrée.
      className={`w-full absolute px-[10px] md:px-[20px] ${
        activeSection ? "top-[25px] md:top-[50px] h-screen" : "bottom-[5px] md:bottom-[10px]"
      } ${isExiting || activeSection ? "bg-white" : "bg-transparent"} ${backgroundTransitionClass}`}
    >
      {/* Navigation avec gestionnaires d'événements pour ouvrir/fermer les sections. */}
      <Nav
        handleSectionClick={handleSectionClick}
        handleCloseClick={handleCloseClick}
        activeSection={activeSection}
        borderClass={borderClass}
      />
      {/* Contenu de la section active, affiche l'accordéon de projets ou la page À propos. */}
      {activeSection && (
        <main key={activeSection} className="overflow-scroll">
          {activeSection === "Index" && <Accordion items={projects} />}
          {activeSection === "Info" && <About />}
        </main>
      )}
    </motion.section>
  );
}
