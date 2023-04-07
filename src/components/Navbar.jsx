import { Link } from "react-router-dom";
import { FaPizzaSlice, FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import useResponsiveNavbar from "../hooks/useResponsiveNavbar";
import useTheme from "../hooks/useTheme";

function Navbar() {
  const { isMobile, showMenu, handleMenuClick } = useResponsiveNavbar();
  const { dayMode, theme, toggleTheme } = useTheme(
    "theme",
    "daymode",
    "nightmode"
  );

  return (
    <nav className="navbar justify-between px-6 shadow-lg bg-neutral">
      <div>
        <FaPizzaSlice className="text-3xl text-primary mr-4" />
        <span className="text-3xl font-bold text-primary">Foodies Hub</span>
      </div>
      <div className="relative">
        <button
          onClick={toggleTheme}
          className="btn btn-sm btn-circle btn-primary text-xl text-neutral mr-6"
        >
          {theme === dayMode ? <FaMoon /> : <FaSun />}
        </button>
        {isMobile ? (
          <button onClick={handleMenuClick} className="text-2xl text-primary">
            <FaBars />
          </button>
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
          <ul className="absolute flex flex-col gap-6 p-8 z-10 top-12 -right-6 shadow-lg rounded-bl-2xl bg-neutral">
            <li>
              <Link
                to="/"
                className="text-lg font-bold text-primary hover:underline underline-offset-4"
                onClick={handleMenuClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/findrecipes"
                className="text-lg font-bold text-primary whitespace-nowrap hover:underline underline-offset-4"
                onClick={handleMenuClick}
              >
                Find Recipes
              </Link>
            </li>
            <li>
              <Link
                to="/mycollection"
                className="text-lg font-bold text-primary whitespace-nowrap hover:underline underline-offset-4"
                onClick={handleMenuClick}
              >
                My Collection
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-lg font-bold text-primary hover:underline underline-offset-4"
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
