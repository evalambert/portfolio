
/*
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.swiper-slide {
  width: 100%;
  display: flex;
}
img.vertical {
  width: auto;
}

img.horizontal {
  width: 100%;
} 

.right{
  justify-content: flex-end;
}
.left{
  justify-content: flex-start;
}
.center{
  justify-content: flex-start;
}
 */



/*  {activeSection === 'Info' && <Accordion items={infos} />} */


//////////////////////////////////

/* import { useState } from 'react';

const Accordion = ({ title, content, onClick, isOpen }) => {
  return (
    <div>
      <button onClick={onClick}>{title}</button>
      {isOpen && <div>{content}</div>}
    </div>
  );
};

const App = () => {
  const [activeSection, setActiveSection] = useState('');
  const [openProjectId, setOpenProjectId] = useState(null);

  const projects = [
    { id: 1, name: 'Projet 1', content: 'Contenu projet 1' },
    { id: 2, name: 'Projet 2', content: 'Contenu projet 2' },
  ];

  const infos = [
    'Info',
  ];

  const handleSectionClick = (section) => {
    setActiveSection(activeSection === section ? '' : section);
    // Réinitialiser l'accordéon ouvert lors du changement de section
    setOpenProjectId(null);
  };

  const toggleProject = (id) => {
    setOpenProjectId(openProjectId === id ? null : id);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={() => handleSectionClick('Index')}>Index</button>
        <button onClick={() => handleSectionClick('Info')}>Info</button>
      </div>
      {activeSection === 'Index' && (
        projects.map((project) => (
          <Accordion 
            key={project.id} 
            title={project.name} 
            content={<p>{project.content}</p>}
            onClick={() => toggleProject(project.id)}
            isOpen={openProjectId === project.id}
          />
        ))
      )}
      {activeSection === 'Info' && (
        // Affichage des infos comme précédemment, ou appliquer une logique similaire si nécessaire
        infos.map((info, index) => (
          <Accordion key={index} title={`Info ${index + 1}`} content={<p>{info}</p>} />
        ))
      )}
    </div>
  );
};

export default App;
 */
////////////////////////////////:

/* 

import { useState } from 'react';

const Accordion = ({ title, content, onClick, isOpen }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <button onClick={onClick} style={{ width: '100%' }}>{title}</button>
      {isOpen && <div style={{ width: '100%' }}>{content}</div>}
    </div>
  );
};

const App = () => {
  const [activeSection, setActiveSection] = useState('');
  const [openProjectId, setOpenProjectId] = useState(null);

  const projects = [
    { id: 1, name: 'Projet 1', content: 'Contenu projet 1' },
    { id: 2, name: 'Projet 2', content: 'Contenu projet 2' },
  ];

  const infos = [
    'Info',
  ];

  const handleSectionClick = (section) => {
    setActiveSection(activeSection === section ? '' : section);
    setOpenProjectId(null);
  };

  const toggleProject = (id) => {
    setOpenProjectId(openProjectId === id ? null : id);
  };

  return (
    <div style={{ position: 'fixed', bottom: 0, width: '100%', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '10px' }}>
        <button onClick={() => handleSectionClick('Index')}>Index</button>
        <button onClick={() => handleSectionClick('Info')}>Info</button>
      </div>
      <div style={{ maxHeight: '50vh', overflow: 'auto', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
        {activeSection === 'Index' && (
          projects.map((project) => (
            <Accordion 
              key={project.id} 
              title={project.name} 
              content={<p>{project.content}</p>}
              onClick={() => toggleProject(project.id)}
              isOpen={openProjectId === project.id}
            />
          ))
        )}
        {activeSection === 'Info' && (
          infos.map((info, index) => (
            <Accordion key={index} title={`Info ${index + 1}`} content={<p>{info}</p>} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
 */
/* 
const Accordion = ({ title, content, onClick, isOpen }) => {
  // Style pour le contenu de l'accordéon avec transition
  const contentStyle = {
    maxHeight: isOpen ? '1000px' : '0', // Assurez-vous que 1000px est suffisant pour couvrir votre contenu
    overflow: 'hidden',
    transition: 'max-height 0.3s ease-in-out', // Ajustez la durée et le type d'animation selon les besoins
    backgroundColor: '#f9f9f9', // Un fond pour mieux visualiser l'animation
    padding: isOpen ? '10px' : '0 10px', // Ajoutez du padding uniquement quand l'accordéon est ouvert
    boxSizing: 'border-box', // Assure que le padding est inclus dans la hauteur
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <button onClick={onClick} style={{ width: '100%' }}>{title}</button>
      <div style={contentStyle}>
        {isOpen && <div>{content}</div>}
      </div>
    </div>
  );
};
 */

















/* 



//AccordionItem.jsx
import React from "react";

const AccordionItem = React.memo(({ title, className, content, isOpen, onClick }) => {
  const animationClass = isOpen ? "accordion-content open" : "accordion-content";
  const baseClass = "border-t-[1px] w-full border-black col-start-1 col-end-7 flex gap-4";

  return (
    <li>
      <button
        className={`${baseClass} ${className}`}
        onClick={onClick}
      >
        {title}
      </button>
      <article className={animationClass}>
        {content}
      </article>
    </li>
  );
});

AccordionItem.displayName = "AccordionItem";

export default AccordionItem;





 */


/* //AccordionItem.jsx
import React from "react";

const AccordionItem = React.memo(({ title, content, isOpen, onClick }) => {
  return (
    <li>
      <button className="border-t-[1px] w-full border-black col-start-1 col-end-7 flex gap-4" onClick={onClick}>{title}</button>
      <article>{isOpen && <div>{content}</div>}</article>
    </li>
  );
});

// Définir explicitement un .displayName pour le composant quand React.memo est utilisé
AccordionItem.displayName = "AccordionItem";

export default AccordionItem;

 */
