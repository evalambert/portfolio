// Accordion.js
import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ items }) => {
  const [openItemId, setOpenItemId] = useState(null);

/*   const toggleItem = useCallback(
    (id) => {
      setOpenItemId(openItemId === id ? null : id);
    },
    [openItemId]
  );
 */
  
  const toggleItem = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <ul>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          number={item.id}
          type={item.type}
          year={item.year}
          images={item.images}
          title={item.title}
          content={item.content}
          lien={item.lien}
          href={item.href}
          ville={item.ville}
          client={item.client}
          isOpen={openItemId === item.id}
          onClick={() => toggleItem(item.id)}
        />
      ))}
    </ul>
  );
};

export default Accordion;
