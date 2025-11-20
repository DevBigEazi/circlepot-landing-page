import React, { useState } from 'react';
import appLogo from '../assets/full-logo.png';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { WaitlistModal } from './WaitlistModal';

export const Navigation: React.FC = () => {
  const { colors, isDark, toggleTheme } = useTheme();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b shadow-sm" style={{ backgroundColor: `${colors.surface}F2`, borderColor: colors.border }}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center gap-2 sm:gap-3">
     
          <img 
  src={appLogo} 
  alt="Circlepot logo" 
  className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto"
/>
            {/* <div className="shrink-0">
              <span className="text-xl sm:text-2xl font-bold whitespace-nowrap" style={{ color: colors.text }}>Circlepot</span>
              <p className="text-[10px] sm:text-xs font-medium whitespace-nowrap" style={{ color: colors.text, opacity: 0.7 }}>Save Together, Grow Together</p>
            </div> */}
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-400 transition-colors duration-200 shrink-0"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <FiSun className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.text }} />
              ) : (
                <FiMoon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.text }} />
              )}
            </button>
            
            <button 
              onClick={() => setIsWaitlistOpen(true)}
              className="px-3 py-1.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-white animate-pulse-slow whitespace-nowrap"
              style={{ backgroundColor: colors.primary }}
            >
              Join Waitlist
            </button>
            
            <WaitlistModal 
              isOpen={isWaitlistOpen} 
              onClose={() => setIsWaitlistOpen(false)} 
            />
          </div>
        </div>
      </div>
    </nav>
  );
};