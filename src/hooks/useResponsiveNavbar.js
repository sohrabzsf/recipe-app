import { useState, useEffect } from "react";

function useResponsiveNavbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showMenu, setShowMenu] = useState(false);

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

  return { isMobile, showMenu, handleMenuClick };
}

export default useResponsiveNavbar;
