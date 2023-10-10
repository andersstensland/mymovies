import { useState } from "react";
import { Link } from "react-router-dom";
import { Hamburger } from "./Hamburger";
import { MenuOverlay } from "./MenuOverlay";
import { SearchComponent } from "./SearchComponent";

export const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <nav className="bg-transparent">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link to="/" className="text-white text-4xl font-semibold">
            <h1>MyMovies</h1>
          </Link>
          <Link to="/MovieList" className="text-white hover:text-gray-200 ml-4">
            All Movies
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="hidden sm:flex space-x-4">
            <li>
              <Link to="" className="text-white hover:text-gray-200">
                <SearchComponent />
              </Link>
            </li>
            <li>
              <Link to="/Login" className="text-white hover:text-gray-200">
                <i className="fa-solid fa-user text-3xl"></i>
              </Link>
            </li>
          </ul>
          <div className="text-white sm:hidden">
            <Hamburger
              hamburgerOpen={hamburgerOpen}
              setHamburgerOpen={setHamburgerOpen}
            />
          </div>
        </div>
      </div>
      {hamburgerOpen && (
        <MenuOverlay
          hamburgerOpen={hamburgerOpen}
          setHamburgerOpen={setHamburgerOpen}
        />
      )}
    </nav>
  );
};
