import { useState, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { projects } from "../../data/dataProject";
import AccordionItem from "./AccordionItem";
import "./styles.css";

export default function Accordion() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const accordionRefs = useRef([]);

  const handleAccordionClick = useCallback(
    (index) => {
      // Ferme l'accordion actuellement ouvert
      if (openAccordion !== null && openAccordion !== index) {
        gsap.to(
          accordionRefs.current[openAccordion].querySelector(
            ".accordion__details"
          ),
          {
            height: 0,
            duration: 0.5,
            ease: "power1.inOut",
          }
        );
      }

      // Toggle l'état de l'accordion cliqué
      if (index === openAccordion) {
        gsap.to(
          accordionRefs.current[index].querySelector(".accordion__details"),
          {
            height: 0,
            duration: 0.5,
            ease: "power1.inOut",
            onComplete: () => setOpenAccordion(null),
          }
        );
      } else {
        setOpenAccordion(index);
        gsap.fromTo(
          accordionRefs.current[index].querySelector(".accordion__details"),
          { height: 0 },
          {
            height: "auto",
            duration: 0.5,
            ease: "power1.inOut",
          }
        );
      }
    },
    [openAccordion, accordionRefs]
  );

  return (
    <div className="App">
      <div className="accordion__container ">
        {projects.map((project, index) => (
          <AccordionItem
            key={project.id}
            project={project}
            isOpen={openAccordion === index}
            onClick={() => handleAccordionClick(index)}
            ref={(el) => (accordionRefs.current[index] = el)}
          />
        ))}
      </div>
    </div>
  );
}
