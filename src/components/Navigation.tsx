import React from 'react';
import appLogo from '../assets/app-logo.png';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export const Navigation: React.FC = () => {
  const { colors, isDark, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b shadow-sm" style={{ backgroundColor: `${colors.surface}F2`, borderColor: colors.border }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: colors.primary }}>
              <img src={appLogo} alt="CirclePot logo" height={50} width={50} />
            </div>
            <div>
              <span className="text-2xl font-bold" style={{ color: colors.text }}>CirclePot</span>
              <p className="text-xs font-medium" style={{ color: colors.text, opacity: 0.7 }}>Save Together, Grow Together</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-400 transition-colors duration-200"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <FiSun className="w-5 h-5" style={{ color: colors.text }} />
              ) : (
                <FiMoon className="w-5 h-5" style={{ color: colors.text }} />
              )}
            </button>
            
            <button 
              className="px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-white animate-pulse-slow"
              style={{ backgroundColor: colors.primary }}
            >
              <a href="http://" target="_blank" rel="noopener noreferrer">Join Waitlist</a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};