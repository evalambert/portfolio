//AccordionItem.jsx

import React, { useState, useEffect } from "react";
import SliderTwo from "../slider/SliderProject";
import { motion } from "framer-motion";

const AccordionItem = React.memo(
  ({ number, type, title, images, year, content, isOpen, onClick }) => {
    const initialProps = { height: 0 };
    const [isContentVisible, setIsContentVisible] = useState(isOpen);

    useEffect(() => {
      let timeoutId;
      if (isOpen) {
        setIsContentVisible(true);
      } else {
        // Déclencher un délai pour cacher le contenu après l'animation
        timeoutId = setTimeout(() => {
          setIsContentVisible(false);
        }, 1000); // Attendre 1 seconde avant de cacher le contenu
      }

      return () => clearTimeout(timeoutId);
    }, [isOpen]);

    const animateProps = isOpen ? { height: "63vh" } : { height: 0 };

    return (
      <li className="overflow-hidden">
        <button
          aria-expanded={isOpen}
          className="w-full grid grid-cols-4 border-t-[1px] border-black"
          onClick={onClick}
        >
          <div className="col-span-2 grid grid-cols-[20px_1fr] gap-2 md:gap-3">
            <h2 className="">{number}</h2>
            <h2 className="text-left truncate overflow-hidden">{title}</h2>
          </div>
          <div className="col-span-2 grid grid-cols-[1fr_auto] gap-4">
            <h3 className="text-left truncate overflow-hidden">{type}</h3>
            <h3 className="text-right truncate overflow-hidden">{year}</h3>
          </div>
        </button>
        <motion.article
          initial={initialProps}
          animate={animateProps}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          {isContentVisible && (
            <div className="h-full w-full flex flex-col md:flex-row gap-4 py-3">
              <p className="md:w-1/2">{content}</p>
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
