//AccordionItem.jsx

import React, { useState, useEffect } from "react";
import SliderTwo from "../slider/SliderProject";
import { motion } from "framer-motion";

const AccordionItem = React.memo(
  ({
    number,
    type,
    title,
    images,
    year,
    content,
    client,
    lien,
    href,
    ville,
    isOpen,
    onClick,
  }) => {
    const initialProps = { height: 0 };
    const [isContentVisible, setIsContentVisible] = useState(isOpen);

    // Effet pour gérer l'ouverture/fermeture avec un délai
    useEffect(() => {
      let timeoutId;
      if (isOpen) {
        setIsContentVisible(true); // Rendre le contenu visible immédiatement si ouvert
      } else {
        // Délai 1 seconde pour cacher le contenu après l'animation
        timeoutId = setTimeout(() => {
          setIsContentVisible(false);
        }, 300);
      }

      // Nettoyage en cas de démontage du composant ou de changement de isOpen
      return () => clearTimeout(timeoutId);
    }, [isOpen]);

    const contentHeight = `calc(90vh - 280px)`;

    // Propriétés d'animation basées sur l'état ouvert/fermé
    const animateProps = isOpen ? { height: contentHeight } : { height: 0 };

    return (
      <li className="overflow-hidden">
        <button
          aria-expanded={isOpen}
          className="w-full grid grid-cols-4 border-t-[1px] border-black"
          onClick={onClick} // Gestionnaire de clic pour ouvrir/fermer
        >
          <div className="col-span-3 md:col-span-2 grid grid-cols-[20px_1fr] gap-2 md:gap-3">
            <h2 className="">{number}</h2>
            <h2 className="text-left truncate overflow-hidden">{title}</h2>
          </div>
          <div className="md:col-span-2 grid grid-cols-[1fr_auto] md:gap-4">
            <h3 className="text-left truncate overflow-hidden hidden md:block">
              {type}
            </h3>
            <h3 className="text-right truncate overflow-hidden">{year}</h3>
          </div>
        </button>
        <motion.article
          initial={initialProps} // Propriétés initiales pour l'animation
          animate={animateProps} // Animation à la hauteur spécifiée
          transition={{ duration: 0.3, ease: "linear" }}
          className="overflow-scroll"
        >
          {isContentVisible && ( // Afficher le contenu si visible
            <div className="content-work h-full w-full flex flex-col md:flex-row gap-4 py-3">
              <div className="md:w-1/2 flex flex-col gap-4">
                <p>{content}</p>

                <p>
                  <a className="border-b border-black" href={href}>
                    {client}
                  </a>
                  {`, ${ville}`}
                </p>
              </div>

              <div className="md:w-1/2">
                {images && Array.isArray(images) && (
                  <SliderTwo images={images} />
                )}
              </div>
            </div>
          )}
        </motion.article>
      </li>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

export default AccordionItem;
