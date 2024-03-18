//AccordionItem/jsx
import React from "react";
import SliderTwo from "../slider/SliderProject";
import { motion } from "framer-motion";

// Utilisation de React.memo pour optimiser les performances en évitant des re-rendus inutiles
const AccordionItem = React.memo(({
  // Déstructuration des props passées au composant
  number, type, lien, href, title, images, year, content, isOpen, onClick,
}) => {

  // Propriétés d'animation pour le composant, variant selon que l'item est ouvert ou fermé
  const animateProps = isOpen ? { maxHeight: "1000px" } : { maxHeight: "0px" };

  // Fonction pour formater le texte avec des parties soulignées basées sur une syntaxe spécifique
  function formatText(content) {
    const regex = /(\[\[(.*?)\]\])/g; // Expression régulière pour identifier le texte à formater
    let parts = [];
    let lastIndex = 0;

    // Remplacement du texte correspondant à l'expression régulière par des éléments span avec une bordure
    content.replace(regex, (match, p1, p2, offset) => {
      parts.push(content.substring(lastIndex, offset));
      parts.push(
        <span className="border-b border-black" key={offset}>
          {p2}
        </span>
      );
      lastIndex = offset + match.length;
    });

    // Ajout du reste du texte après la dernière correspondance
    if (lastIndex < content.length) {
      parts.push(content.substring(lastIndex));
    }

    // Retourne le contenu formaté comme un fragment React
    return <>{parts}</>;
  }

  // Rendu du composant
  return (
    <li className="overflow-hidden">
      <button
        aria-expanded={isOpen}
        className="w-full grid grid-cols-4 border-t-[1px] border-black"
        onClick={onClick}
      >
        <div className="col-span-3 md:col-span-2 grid grid-cols-[20px_1fr] gap-2 md:gap-3">
          <h2>{number}</h2>
          <h2 className="text-left truncate overflow-hidden">{title}</h2>
        </div>
        <div className="md:col-span-2 grid grid-cols-[1fr_auto] md:gap-4">
          <h3 className="text-left truncate overflow-hidden hidden md:block">{type}</h3>
          <h3 className="text-right truncate overflow-hidden">{year}</h3>
        </div>
      </button>
      <motion.article
        initial={{ maxHeight: "0px" }}
        animate={animateProps} // Applique l'animation de hauteur
        transition={{ duration: 0.3, ease: "linear" }}
        className="overflow-hidden"
      >
        <div className="content-work h-full w-full flex flex-col md:flex-row gap-4 py-3">
          <div className="md:w-1/2 flex flex-col gap-4">
            <p>{formatText(content)}</p>
            <p>
              <a
                className="border-b border-black"
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                {lien}
              </a>
            </p>
          </div>
          <div className="md:w-1/2">
            {/* Affichage des images via le composant SliderTwo si 'images' est un tableau */}
            {images && Array.isArray(images) && (
              <SliderTwo images={images} />
            )}
          </div>
        </div>
      </motion.article>
    </li>
  );
});

// Définition du nom d'affichage pour le débogage
AccordionItem.displayName = "AccordionItem";

// Exportation du composant pour une utilisation ailleurs
export default AccordionItem;
