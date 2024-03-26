import "./styles.css";
import { useState, useRef } from "react";
import gsap from "gsap";
import { projects } from "../../data/dataProject";
import NewSliderProject from "./NewSliderProject";

export default function NewAccordion() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const accordionRefs = useRef([]);

  const handleAccordionClick = (index) => {
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
      console.log(openAccordion);
    } else {
      if (openAccordion !== null) {
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
  };
  return (
    <div className="App">
      <div className="accordion__container">
        {projects.map((project, index) => (
          <div
            className={`accordion__item  ${
              openAccordion === index ? "open" : ""
            }`}
            ref={(el) => (accordionRefs.current[index] = el)}
            key={project.id}
          >
            <div
              className="accordion__header"
              onClick={() => handleAccordionClick(index)}
            >
              <p className="accordion__id">{project.id}</p>
              <p className="accordion__title">{project.title}</p>
              <p className="accordion__type">{project.type}</p>
              <p className="accordion__year">{project.year}</p>
            </div>

            <div className="accordion__details flex">
              <div className="content w-1/2">{project.content}</div>
              <div className="w-1/2">
                <NewSliderProject className="aspect-[7/5] border border-black" images={project.images} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}