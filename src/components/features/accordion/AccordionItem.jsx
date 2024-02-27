//AccordionItem.jsx

import React, { useState, useEffect } from "react";
import SliderTwo from "../slider/SliderTwo";
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

    const animateProps = isOpen ? { height: "70vh" } : { height: 0 };

    return (
      <li className="overflow-hidden">
        <button
          aria-expanded={isOpen}
          className="w-full grid grid-cols-12 gap-0 border-t-[1px] border-black"
          onClick={onClick}
        >
          <h2 className="col-start-1 col-end-7 text-center flex gap-4">
            <span>{number}</span>
            {title}
          </h2>
          <h3 className="col-start-7 col-end-11 text-left">{type}</h3>
          <h3 className="col-start-12 col-end-13 text-right">{year}</h3>
        </button>
        <motion.article
          initial={initialProps}
          animate={animateProps}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          {isContentVisible && (
            <div className="h-full w-full flex py-3">
              <p className="w-1/2">{content}</p>
              <div className="w-1/2">
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
