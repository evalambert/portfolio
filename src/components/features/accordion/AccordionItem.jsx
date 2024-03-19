//AccordionItem.jsx

import React, { useState, useEffect } from "react";
import SliderTwo from "../slider/SliderProject";
import { motion } from "framer-motion";

const AccordionItem = React.memo(
  ({
    number,
    type,
    lien,
    href,
    title,
    images,
    year,
    content,
    isOpen,
    onClick,
  }) => {
    const initialProps = { height: 0 };
    const [isContentVisible, setIsContentVisible] = useState(isOpen);

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

      return () => clearTimeout(timeoutId);
    }, [isOpen]);

    const [contentHeight, setContentHeight] = useState("calc(100vh - 320px)");

    useEffect(() => {
      const updateHeight = () => {
        if (
          window.matchMedia("(max-width: 1720px) and (max-height: 600px)")
            .matches
        ) {
          setContentHeight("calc(100vh - 270px)");
        } else if (
          window.matchMedia("(max-width: 375px) and (max-height: 667px)")
            .matches // iphone XR
        ) {
          setContentHeight("calc(100vh - 290px)");
        } else if (
          window.matchMedia("(max-width: 414px) and (max-height: 896px)")
            .matches // iphone XR
        ) {
          setContentHeight("calc(100vh - 500px)");
        } else if (
          window.matchMedia("(max-width: 390px) and (max-height: 844px)")
            .matches // iphone 12 pro 
        ) {
          setContentHeight("calc(100vh - 450px)");
        } else if (
          window.matchMedia("(max-width: 430px) and (max-height: 932px)")
            .matches // iphone 14 pro max
        ) {
          setContentHeight("calc(100vh - 530px)");
        } else if (
          window.matchMedia("(max-width: 360px) and (max-height: 740px)")
            .matches // samesun s8
        ) {
          setContentHeight("calc(100vh - 370px)");
        } else if (
          window.matchMedia("(max-width: 412px) and (max-height: 915px)")
            .matches
        ) {
          setContentHeight("calc(100vh - 500px)"); // samsung galaxy ultra
        } else if (
          window.matchMedia("(max-width: 768px) and (max-height: 1024px)")
            .matches // Ipad mini
        ) {
          setContentHeight("calc(100vh - 740px)");
        } else if (
          window.matchMedia("(max-width: 820px) and (max-height: 1180px)")
            .matches // Ipad air
        ) {
          setContentHeight("calc(100vh - 880px)");
        } else if (
          window.matchMedia("(max-width: 1024px) and (max-height: 1366px)")
            .matches // Ipad pro
        ) {
          setContentHeight("calc(100vh - 980px)");
        } else {
          setContentHeight("calc(100vh - 320px)");
        }
      };

      window.addEventListener("resize", updateHeight);
      updateHeight();

      return () => window.removeEventListener("resize", updateHeight);
    }, []);

    const animateProps = isOpen ? { height: contentHeight } : { height: 0 };

    // ++++ Fonction formatage texte souligné ++++
    function formatText(content) {
      const regex = /(\[\[(.*?)\]\])/g;
      let parts = [];
      let lastIndex = 0;

      content.replace(regex, (match, p1, p2, offset) => {
        parts.push(content.substring(lastIndex, offset));
        parts.push(
          <span className="border-b border-black" key={offset}>
            {p2}
          </span>
        );
        lastIndex = offset + match.length;
      });

      if (lastIndex < content.length) {
        parts.push(content.substring(lastIndex));
      }

      return <>{parts}</>;
    }

    return (
      <li className="overflow-hidden bg-white">
        <button
          aria-expanded={isOpen}
          className="w-full grid grid-cols-4 border-t-[1px] border-black"
          onClick={onClick}
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
          initial={initialProps}
          animate={animateProps}
          transition={{ duration: 0.3, ease: "linear" }}
          className="overflow-scroll md:overflow-hidden bg-white"
        >
          {isContentVisible && (
            <div className="content-work h-full w-full flex flex-col md:flex-row gap-4 py-3">
              <div className="md:w-1/2 flex flex-col gap-4">
                <p>{formatText(content)}</p>
                <p>
                  <a href={href} target="_blank" rel="noreferrer">
                    {lien}
                  </a>
                </p>
              </div>
              <div className="md:w-1/2 md:overflow-hidden">
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
