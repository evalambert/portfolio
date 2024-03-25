import React from "react";
import SliderProject from "./SliderProject";

const AccordionItem = React.memo(
  React.forwardRef(({ project, isOpen, onClick }, ref) => {
    const { id, title, type, year, content, images } = project;

    return (
      <div className={`accordion__item ${isOpen ? "open" : ""}`} ref={ref}>
        <div className="accordion__header" onClick={onClick}>
          <p className="accordion__id">{id}</p>
          <p className="accordion__title">{title}</p>
          <p className="accordion__type">{type}</p>
          <p className="accordion__year">{year}</p>
        </div>
        <div className="accordion__details flex">
          <div className="content w-1/2">{content}</div>
          <div className="w-1/2">
            <SliderProject
              className="aspect-[7/5] border border-black"
              images={images}
            />
          </div>
        </div>
      </div>
    );
  })
);

AccordionItem.displayName = "AccordionItem";

export default AccordionItem;
