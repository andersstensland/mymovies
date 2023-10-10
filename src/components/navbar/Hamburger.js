import React from "react";

export const Hamburger = ({ hamburgerOpen, setHamburgerOpen }) => {
  const setMenuOverlayOpen = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className="cursor-pointer" onClick={() => setMenuOverlayOpen()}>
      <i
        className={`fa-solid fa-bars fa-xl ${hamburgerOpen ? "hidden" : ""}`}
      ></i>
      <i
        className={`fa-solid fa-times fa-xl ${!hamburgerOpen ? "hidden" : ""}`}
      ></i>
    </div>
  );
};
