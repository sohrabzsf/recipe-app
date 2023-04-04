import { useState, useEffect } from "react";
import { FaPizzaSlice, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar justify-between px-6 shadow-lg bg-neutral">
      <div>
        <FaPizzaSlice className="text-3xl text-primary mr-4" />
        <span className="text-3xl font-bold text-primary">Foodies Hub</span>
      </div>
      <div className="relative flex justify-end gap-6">
        {isMobile ? (
          <FaBars
            className="text-2xl text-primary cursor-pointer"
            onClick={handleMenuClick}
          />
        ) : (
          <>
            <Link
              to="/"
              className="text-lg font-bold text-primary hover:underline underline-offset-4"
            >
              Home
            </Link>
            <Link
              to="/findrecipes"
              className="text-lg font-bold text-primary hover:underline underline-offset-4"
            >
              Find Recipes
            </Link>
            <Link
              to="/mycollection"
              className="text-lg font-bold text-primary hover:underline underline-offset-4"
            >
              My Collection
            </Link>
            <Link
              to="/about"
              className="text-lg font-bold text-primary hover:underline underline-offset-4"
            >
              About
            </Link>
          </>
        )}
        {isMobile && showMenu && (
          <div className="absolute z-10 -top-5 -right-6 shadow-lg bg-neutral rounded-lg p-8">
            <FaTimes
              className="text-2xl text-primary cursor-pointer"
              onClick={handleMenuClick}
            />
            <Link
              to="/"
              className="block mt-4 text-lg font-bold text-primary hover:underline underline-offset-4"
              onClick={handleMenuClick}
            >
              Home
            </Link>
            <Link
              to="/findrecipes"
              className="block mt-4 text-lg font-bold text-primary whitespace-nowrap hover:underline underline-offset-4"
              onClick={handleMenuClick}
            >
              Find Recipes
            </Link>
            <Link
              to="/mycollection"
              className="block mt-4 text-lg font-bold text-primary whitespace-nowrap hover:underline underline-offset-4"
              onClick={handleMenuClick}
            >
              My Collection
            </Link>
            <Link
              to="/about"
              className="block mt-4 text-lg font-bold text-primary hover:underline underline-offset-4"
              onClick={handleMenuClick}
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
