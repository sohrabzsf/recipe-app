import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useTheme(key, dayMode, nightMode) {
  const [theme, setTheme] = useLocalStorage(key, dayMode);

  useEffect(() => {
    const html = document.documentElement;
    if (theme === dayMode) {
      html.setAttribute("data-theme", "daymode");
    } else {
      html.setAttribute("data-theme", "nightmode");
    }
  }, [theme]);

  function toggleTheme() {
    if (theme === dayMode) {
      setTheme(nightMode);
    } else {
      setTheme(dayMode);
    }
  }

  return { dayMode, theme, toggleTheme };
}

export default useTheme;
