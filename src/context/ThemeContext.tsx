import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { ThemeColors } from '../types/index';

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
    localStorage.setItem('theme-mode', dark ? 'dark' : 'light');
    setIsDark(dark);
    // Update the HTML class for Tailwind dark mode
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Toggle between dark and light theme
  const toggleTheme = () => {
    setTheme(!isDark);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme-mode');
    if (savedTheme === 'dark') {
      setTheme(true);
    } else if (savedTheme === 'light') {
      setTheme(false);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark);
    }
  }, []);

  const colors: ThemeColors = isDark ? {
    primary: '#35D07F',
    secondary: '#FBCC5C',
    accent: '#E5E7EB',
    background: '#0F172A',
    surface: '#1E293B',
    text: '#F1F5F9',
    textLight: '#94A3B8',
    border: '#334155',
    infoBg: '#1E293B',
    successBg: '#022C22',
    warningBg: '#422006',
    successBorder: '#14532D',
    warningBorder: '#713F12',
    hoverBg: '#334155'
  } : {
    primary: '#35D07F',
    secondary: '#FBCC5C',
    accent: '#2E3338',
    background: '#F8F9FA',
    surface: '#FFFFFF',
    text: '#2E3338',
    textLight: '#6B7280',
    border: '#E5E7EB',
    infoBg: '#F9FAFB',
    successBg: '#ECFDF5',
    warningBg: '#FEF9C3',
    successBorder: '#A7F3D0',
    warningBorder: '#FDE047',
    hoverBg: '#F3F4F6'
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
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
