import { useState, useEffect } from 'react';
import type { ThemeColors } from '../types/index';

export const useThemeColors = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme-mode');
    if (savedTheme === 'dark') {
      setIsDark(true);
    } else if (savedTheme === 'light') {
      setIsDark(false);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
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

  return { colors, isDark, setIsDark };
};