import { useState, useRef } from "react";
import { gsap } from "gsap";
import { projects } from "../../data/dataProject";
import NewSliderProject from "./NewSliderProject";
import "./styles.css";

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

  // ++++ Fonction formatage texte souligné ++++
  function formatText(content) {
    // Séparer le contenu en utilisant une regex qui capture le texte à souligner
    const regex = /(\[\[(.*?)\]\])/g;
    let parts = [];
    let lastIndex = 0;

    // Itérer sur toutes les correspondances de la regex pour construire le tableau de parties
    content.replace(regex, (match, p1, p2, offset) => {
      // Ajouter le texte avant le match
      parts.push(content.substring(lastIndex, offset));
      // Ajouter le texte souligné comme un élément React
      parts.push(
        <span className="border-b border-black" key={offset}>
          {p2}
        </span>
      );
      lastIndex = offset + match.length;
    });

    // Ajouter le reste du contenu après le dernier match
    if (lastIndex < content.length) {
      parts.push(content.substring(lastIndex));
    }

    // Rendre le tableau d'éléments React
    return <>{parts}</>;
  }

  return (
    <div className="accordion__container border border-red-300">
      {projects.map((project, index) => (
        <div
          className={`accordion__item ${openAccordion === index ? "open" : ""}`}
          ref={(el) => (accordionRefs.current[index] = el)}
          key={project.id}
        >
          <button
            className="accordion__header w-full grid grid-cols-4 border-t-[1px] border-black"
            onClick={() => handleAccordionClick(index)}
          >
            <div className="col-span-3 md:col-span-2 grid grid-cols-[20px_1fr] gap-2 md:gap-3">
              <h2 className="accordion__id">{project.id}</h2>
              <h2 className="accordion__title text-left truncate overflow-hidden">
                {project.title}
              </h2>
            </div>
            <div className="md:col-span-2 grid grid-cols-[1fr_auto] md:gap-4">
              <h3 className="accordion__type text-left truncate overflow-hidden hidden md:block">
                {project.type}
              </h3>
              <h3 className="accordion__year text-right truncate overflow-hidden">
                {project.year}
              </h3>
            </div>
          </button>

          <div className="accordion__details flex flex-col md:flex-row">
            <div className="content__work__text md:w-1/2 flex flex-col gap-3 py-3 pr-3">
              <p>{formatText(project.content)}</p>
              <p>
                <a href={project.href} target="_blank" rel="noreferrer">
                  {project.lien}
                </a>
              </p>
            </div>
            <div className="content__work__image md:w-1/2 pb-3 md:py-3">
              <NewSliderProject
                className="aspect-[7/5]"
                images={project.images}
                isOpen={openAccordion === index}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
