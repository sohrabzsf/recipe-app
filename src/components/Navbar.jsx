import { Link } from "react-router-dom";
import { FaPizzaSlice, FaBars, FaTimes } from "react-icons/fa";
import useResponsiveNavbar from "../hooks/useResponsiveNavbar";

function Navbar() {
  const { isMobile, showMenu, handleMenuClick } = useResponsiveNavbar();

  return (
    <nav className="navbar justify-between px-6 shadow-lg bg-neutral">
      <div>
        <FaPizzaSlice className="text-3xl text-primary mr-4" />
        <span className="text-3xl font-bold text-primary">Foodies Hub</span>
      </div>
      <div className="relative">
        {isMobile ? (
          <FaBars
            className="text-2xl text-primary cursor-pointer"
            onClick={handleMenuClick}
          />
        ) : (
          <ul className="flex justify-end gap-6">
            <li>
              <Link
                to="/"
                className="text-lg font-bold text-primary hover:underline underline-offset-4"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/findrecipes"
                className="text-lg font-bold text-primary hover:underline underline-offset-4"
              >
                Find Recipes
              </Link>
            </li>
            <li>
              <Link
                to="/mycollection"
                className="text-lg font-bold text-primary hover:underline underline-offset-4"
              >
                My Collection
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-lg font-bold text-primary hover:underline underline-offset-4"
              >
                About
              </Link>
            </li>
          </ul>
        )}
        {isMobile && showMenu && (
          <ul className="absolute z-10 -top-5 -right-6 shadow-lg bg-neutral rounded-lg p-8">
            <li>
              <FaTimes
                className="text-2xl text-primary cursor-pointer"
                onClick={handleMenuClick}
              />
            </li>
            <li>
              <Link
                to="/"
                className="block mt-4 text-lg font-bold text-primary hover:underline underline-offset-4"
                onClick={handleMenuClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/findrecipes"
                className="block mt-4 text-lg font-bold text-primary whitespace-nowrap hover:underline underline-offset-4"
                onClick={handleMenuClick}
              >
                Find Recipes
              </Link>
            </li>
            <li>
              <Link
                to="/mycollection"
                className="block mt-4 text-lg font-bold text-primary whitespace-nowrap hover:underline underline-offset-4"
                onClick={handleMenuClick}
              >
                My Collection
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block mt-4 text-lg font-bold text-primary hover:underline underline-offset-4"
                onClick={handleMenuClick}
              >
                About
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
