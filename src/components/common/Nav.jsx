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
      className={`grid grid-cols-4 text-white mix-blend-difference ${borderClass}`}
    >
      <nav className="col-span-2 grid grid-cols-[20px_1fr] gap-2 md:gap-3">
        <ButtonIcon
          className="rotate3d-animation flex justify-center items-center"
          onClick={handleCloseClick}
          name="coeur"
          aria-label="fermer section"
        ></ButtonIcon>
        <div className="flex gap-2">
          <button onClick={() => handleSectionClick("index")}>Index</button>/
          <button onClick={() => handleSectionClick("about")}>About</button>
        </div>
      </nav>
      {activeSection ? (
        <ButtonIcon
          className="col-span-2 flex justify-end items-center"
          onClick={handleCloseClick}
          name="close"
          aria-label="fermer nav"
        ></ButtonIcon>
      ) : (
        <span className="col-span-2 flex justify-end">2024©</span>
      )}
    </div>
  );
};

export default Nav;