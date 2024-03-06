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
    href,
    ville,
    isOpen,
    onClick,
  }) => {
    const [isContentVisible, setIsContentVisible] = useState(isOpen);
    // Propriétés d'animation basées sur l'état ouvert/fermé
    const animateProps = isOpen
      ? { maxHeight: "100vh" }
      : { maxHeight: "0px" };

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
          initial={{ maxHeight: "0px"}}
          animate={animateProps}
          transition={{ duration: 0.5, ease: "linear" }}
          style={{ overflow: "hidden" }}
        >
          {isContentVisible && (
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

// import React, { useState, useEffect, useRef } from "react";
// import SliderTwo from "../slider/SliderProject";
// import { motion } from "framer-motion";

// const AccordionItem = React.memo(
//   ({
//     number,
//     type,
//     title,
//     images,
//     year,
//     content,
//     client,
//     href,
//     ville,
//     isOpen,
//     onClick,
//   }) => {
//     const contentRef = useRef(null); // Référence pour mesurer la hauteur du contenu
//     const [contentHeight, setContentHeight] = useState(0); // État pour stocker la hauteur du contenu
//     const [isContentVisible, setIsContentVisible] = useState(isOpen);

//     useEffect(() => {
//       let timeoutId;
//       if (isOpen) {
//         setIsContentVisible(true);
//         // Mise à jour de la hauteur du contenu quand il devient visible
//         setContentHeight(contentRef.current.offsetHeight);
//       } else {
//         timeoutId = setTimeout(() => {
//           setIsContentVisible(false);
//         }, 300);
//       }
//       return () => clearTimeout(timeoutId);
//     }, [isOpen]);

//     // Animation pour ouvrir/fermer basée sur la hauteur mesurée du contenu
//     const animateProps = isOpen ? { height: contentHeight } : { height: 0 };

//     // S'assurer que la hauteur du contenu est mise à jour lorsque le contenu change
//     useEffect(() => {
//       if (isContentVisible && contentRef.current) {
//         setContentHeight(contentRef.current.offsetHeight);
//       }
//     }, [content, images, isContentVisible]);

//     return (
//       <li className="overflow-hidden">
//         <button
//           aria-expanded={isOpen}
//           className="w-full grid grid-cols-4 border-t-[1px] border-black"
//           onClick={onClick} // Gestionnaire de clic pour ouvrir/fermer
//         >
//           <div className="col-span-3 md:col-span-2 grid grid-cols-[20px_1fr] gap-2 md:gap-3">
//             <h2 className="">{number}</h2>
//             <h2 className="text-left truncate overflow-hidden">{title}</h2>
//           </div>
//           <div className="md:col-span-2 grid grid-cols-[1fr_auto] md:gap-4">
//             <h3 className="text-left truncate overflow-hidden hidden md:block">
//               {type}
//             </h3>
//             <h3 className="text-right truncate overflow-hidden">{year}</h3>
//           </div>
//         </button>
//         <motion.article
//           initial={{ height: 0 }}
//           animate={animateProps}
//           transition={{ duration: 0.3, ease: "linear" }}
//         >
//           {/* Nous rendons le contenu visible immédiatement à l'ouverture pour mesurer sa hauteur */}
//           <div ref={contentRef} className={`${isContentVisible ? '' : 'hidden'}`}>
//           <div className="content-work h-full w-full flex flex-col md:flex-row gap-4 py-3">
//               <div className="md:w-1/2 flex flex-col gap-4">
//                 <p>{content}</p>

//                 <p>
//                   <a className="border-b border-black" href={href}>
//                     {client}
//                   </a>
//                   {`, ${ville}`}
//                 </p>
//               </div>

//               <div className="md:w-1/2">
//                 {images && Array.isArray(images) && (
//                   <SliderTwo images={images} />
//                 )}
//               </div>
//             </div>
//           </div>
//         </motion.article>
//       </li>
//     );
//   }
// );

// AccordionItem.displayName = "AccordionItem";

// export default AccordionItem;

/* import React, { useState, useEffect, useRef } from "react";
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
    href,
    ville,
    isOpen,
    onClick,
  }) => {
    const contentRef = useRef(null); // Référence au contenu pour mesurer et observer la hauteur
    const [contentHeight, setContentHeight] = useState(0); // Stocke la hauteur actuelle du contenu
    const [isContentVisible, setIsContentVisible] = useState(isOpen);

    // Mettre à jour la hauteur du contenu de manière dynamique
    useEffect(() => {
      const contentElement = contentRef.current;
      if (contentElement) {
        const updateHeight = () => {
          setContentHeight(contentElement.offsetHeight); // Mise à jour de la hauteur avec la hauteur actuelle du contenu
        };

        updateHeight(); // Mise à jour initiale

        const resizeObserver = new ResizeObserver(() => {
          updateHeight(); // Mise à jour lors de changements de la taille
        });
        
        resizeObserver.observe(contentElement); // Commencer à observer

        return () => {
          resizeObserver.unobserve(contentElement); // Arrêter d'observer lors du nettoyage
        };
      }
    }, []); // Exécuté une fois au montage

    // Gestion de la visibilité avec un délai pour l'animation
    useEffect(() => {
      let timeoutId;
      if (isOpen) {
        setIsContentVisible(true);
      } else {
        timeoutId = setTimeout(() => {
          setIsContentVisible(false);
        }, 300); // Délai pour permettre l'animation de fermeture
      }
      return () => clearTimeout(timeoutId);
    }, [isOpen]);

    // Propriétés d'animation pour `motion.article`
    const animateProps = isOpen ? { height: contentHeight } : { height: 0 };

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
          initial={{ height: 0 }}
          animate={animateProps}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <div ref={contentRef} className={`${isContentVisible ? 'block' : 'hidden'}`}>
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
          </div>
        </motion.article>
      </li>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

export default AccordionItem; */
