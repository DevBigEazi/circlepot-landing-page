import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { ThemeColors } from "../types/index";

type ThemeContextType = {
  colors: ThemeColors;
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  // Set theme in localStorage and update state
  const setTheme = (dark: boolean) => {
    localStorage.setItem("theme-mode", dark ? "dark" : "light");
    setIsDark(dark);
    // Update the HTML class for Tailwind dark mode
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Toggle between dark and light theme
  const toggleTheme = () => {
    setTheme(!isDark);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme-mode");
    if (savedTheme === "dark") {
      setTheme(true);
    } else if (savedTheme === "light") {
      setTheme(false);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark);
    }
  }, []);

  const colors: ThemeColors = isDark
    ? {
        primary: "#5C6F2B", // Vibrant Circlepot Green
        secondary: "#DE802B", // Warm Gold
        accent: "#FFFFFF",
        background: "#0F0F11", // Softer Deep Charcoal
        surface: "#161618", // Refined Gray Surface
        text: "#D8C9A7",
        textLight: "#EEEEEE", // Muted Gray
        border: "#252529", // Subtle stroke
        infoBg: "#161618",
        successBg: "#05120A",
        warningBg: "#120D05",
        successBorder: "#0E2E1A",
        warningBorder: "#2E230E",
        hoverBg: "#1D1D1F",
      }
    : {
        primary: "#5C6F2B", // Vibrant Circlepot Green
        secondary: "#DE802B", // Warm Gold
        accent: "#1D1D1F",
        background: "#F9FBF9", // Faint Branded Tint
        surface: "#F1F5F1", // Softer Organic Surface
        text: "#1D1D1F", // Deep Onyx
        textLight: "#4B4B4F", // Better contrast than gray
        border: "#E2E6E2", // Tinted Stroke
        infoBg: "#D8C9A7",
        successBg: "#ECFDF5",
        warningBg: "#FEF9C3",
        successBorder: "#A7F3D0",
        warningBorder: "#FDE047",
        hoverBg: "#E8EBE8",
      };

  return (
    <ThemeContext.Provider value={{ colors, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
