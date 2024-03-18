//Accordion.jsx
import { useState, useCallback } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ items }) => {
  // État pour garder une trace de l'élément de l'accordéon actuellement ouvert.
  // 'null' signifie qu'aucun élément n'est ouvert.
  const [openItemId, setOpenItemId] = useState(null);

  // Fonction de basculement pour ouvrir/fermer un élément de l'accordéon.
  // Utilise useCallback pour mémoriser la fonction et éviter des recalculs inutiles.
  const toggleItem = useCallback(
    (id) => {
      // Si l'élément cliqué est déjà ouvert, ferme-le. Sinon, ouvre-le.
      setOpenItemId(openItemId === id ? null : id);
    },
    [openItemId] // La dépendance openItemId assure que la fonction est mise à jour si l'état change.
  );

  // Rendu de la liste des éléments de l'accordéon en utilisant la prop 'items'.
  return (
    <ul>
      {items.map((item) => (
        <AccordionItem
          key={item.id} 
          number={item.id} // Identifiant de l'élément, utilisé pour gérer l'ouverture/fermeture.
          type={item.type} 
          year={item.year} 
          images={item.images} 
          title={item.title}
          content={item.content} 
          lien={item.lien} 
          href={item.href} 
          ville={item.ville} 
          client={item.client} 
          isOpen={openItemId === item.id} // Prop pour contrôler si l'élément doit être ouvert ou fermé.
          onClick={() => toggleItem(item.id)} // Gestionnaire d'événements pour ouvrir/fermer l'élément.
        />
      ))}
    </ul>
  );
};

export default Accordion;
