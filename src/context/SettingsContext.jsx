// src/contexts/SettingsContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const SettingsContext = createContext();

/** Custom hook to access settings */
export const useSettings = () => useContext(SettingsContext);

export function SettingsProvider({ children }) {
  // Currency code (e.g. "USD", "EUR")
  const [currency, setCurrency] = useState("LKR");

  // Base font size for the app
  const [fontSize, setFontSize] = useState(14);

  // Theme: 'light' or 'dark'
  const [theme, setTheme] = useState(() => {
    // 1. Try stored preference
    const stored = localStorage.getItem("app-theme");
    if (stored === "light" || stored === "dark") {
      return stored;
    }
    // 2. Fallback to system preference
    return window.matchMedia?.("(prefers-color-scheme: light)").matches
      ? "dark"
      : "light";
  });

  // Whenever theme changes:
  //  • persist to localStorage
  //  • update the <html> data-theme attribute for CSS variables
  useEffect(() => {
    localStorage.setItem("app-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Toggle between light & dark
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <SettingsContext.Provider
      value={{
        currency,
        setCurrency,
        fontSize,
        setFontSize,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
