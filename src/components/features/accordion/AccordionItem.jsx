import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import SliderTwo from "../slider/SliderProject";
import "./style.css";

const AccordionItem = React.memo(
  ({
    number,
    title,
    type,
    year,
    content,
    lien,
    href,
    images,
    isOpen,
    onClick,
  }) => {
    const formatText = (text) => {
      return text.split(/\[\[(.*?)\]\]/g).map((part, index) =>
        index % 2 === 1 ? (
          <span key={index} className="border-b border-black">
            {part}
          </span>
        ) : (
          part
        )
      );
    };

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
            <h3 className="text-left truncate overflow-hidden hidden md:block">
              {type}
            </h3>
            <h3 className="text-right truncate overflow-hidden">{year}</h3>
          </div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.article
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="content-work h-full w-full flex flex-col md:flex-row md:gap-4 py-3">
                <div className="md:w-1/2 flex flex-col gap-4">
                  <p>{formatText(content)}</p>
                  <p>
                    <a href={href} target="_blank" rel="noreferrer">
                      {lien}
                    </a>
                  </p>
                </div>
                <div className="md:w-1/2">
                  {images && Array.isArray(images) && (
                    <SliderTwo images={images} />
                  )}
                </div>
              </div>
            </motion.article>
          )}
        </AnimatePresence>
      </li>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

export default AccordionItem;

/* import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SliderTwo from "../slider/SliderProject";
import "./style.css";

const AccordionItem = React.memo(
  ({
    number,
    title,
    type,
    year,
    content,
    lien,
    href,
    images,
    isOpen,
    onClick,
  }) => {

    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef(null); 

    useEffect(() => {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          setContentHeight(entry.contentRect.height);
        }
      });

      if (contentRef.current) {
        resizeObserver.observe(contentRef.current);
      }

      return () => resizeObserver.disconnect();
    }, [isOpen]);

    useEffect(() => {
      const checkHeightAfterLoad = () => {
        if (isOpen && contentRef.current) {
          setContentHeight(contentRef.current.scrollHeight);
        }
      };

      // S'abonner à l'événement 'load' de la fenêtre pour ajuster la hauteur après le chargement complet de la page
      window.addEventListener('load', checkHeightAfterLoad);

      // Nettoyage de l'effet
      return () => window.removeEventListener('load', checkHeightAfterLoad);
    }, [isOpen]);
   

    const formatText = (text) => {
      return text.split(/\[\[(.*?)\]\]/g).map((part, index) =>
        index % 2 === 1 ? (
          <span key={index} className="border-b border-black">
            {part}
          </span>
        ) : (
          part
        )
      );
    };

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
            <h3 className="text-left truncate overflow-hidden hidden md:block">
              {type}
            </h3>
            <h3 className="text-right truncate overflow-hidden">{year}</h3>
          </div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${contentHeight}px` }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div ref={contentRef}>
                <div className="content-work h-full w-full flex flex-col md:flex-row gap-4 py-3">
                  <div className="md:w-1/2 flex flex-col gap-4">
                    <p>{formatText(content)}</p>
                    <p>
                      <a href={href} target="_blank" rel="noreferrer">
                        {lien}
                      </a>
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    {images && Array.isArray(images) && (
                      <SliderTwo images={images} />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </li>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

export default AccordionItem; */
