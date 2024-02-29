//Nav.jsx

import ButtonIcon from "../common/icon/ButtonIcon";

const Nav = ({
  handleSectionClick,
  handleCloseClick,
  activeSection,
  borderClass,
}) => {
  return (
    <div
      className={`grid grid-cols-12 gap-0 text-white mix-blend-difference ${borderClass}`}
    >
      <nav className="col-start-1 col-end-7 flex gap-x-[8px] ">
        <ButtonIcon
          className="rotate3d-animation"
          onClick={handleCloseClick}
          name="coeur"
          aria-label="Fermer la section"
        ></ButtonIcon>
        <button onClick={() => handleSectionClick("Index")}>Index</button>/
        <button onClick={() => handleSectionClick("Info")}>About</button>
      </nav>
      {activeSection ? (
        <ButtonIcon
          className="col-start-12 col-end-13 flex justify-end items-center"
          onClick={handleCloseClick}
          name="close"
          aria-label="Fermer"
        ></ButtonIcon>
      ) : (
        <span className="col-start-12 col-end-13 flex justify-end">2024©</span>
      )}
    </div>
  );
};

export default Nav;
