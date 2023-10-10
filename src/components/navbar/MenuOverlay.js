import React from "react";
import { SearchComponent } from "./SearchComponent";
import { Link } from "react-router-dom";

export const MenuOverlay = ({ hamburgerOpen, setHamburgerOpen }) => {
  const closeMenuOverlay = () => {
    setHamburgerOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 ${
        hamburgerOpen ? "" : "hidden"
      }`}
    >
      <nav className="fixed top-0 left-0 w-full px-10 h-screen pt-8 bg-black transform transition-all duration-100">
        <div className="flex justify-end">
          <button className="text-white" onClick={closeMenuOverlay}>
            <i className="fa-solid fa-times fa-lg"></i>
          </button>
        </div>
        //TODO: Add menu items here and fix tailwind classes
        <ul className="flex flex-col items-center gap-4">
          <li>
            <Link to="/Home" className="text-white hover:text-gray-200 py-2">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Login" className="text-white hover:text-gray-200 py-2">
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/Register"
              className="text-white hover:text-gray-200 py-2"
            >
              Register
            </Link>
          </li>
          <li>
            <SearchComponent />
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </nav>
    </div>
  );
};
