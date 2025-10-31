import React, { useState, useEffect } from 'react';
import { useThemeColors } from '../hooks/useThemeColors';
import { Navigation } from '../components/Navigation';


export const Home: React.FC = () => {
  const { colors } = useThemeColors();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
        .animate-slideUp { animation: slideUp 0.8s ease-out; }
        .animate-slideInLeft { animation: slideInLeft 0.8s ease-out; }
        .animate-slideInRight { animation: slideInRight 0.8s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.6s ease-out; }
        .animate-pulse-slow { animation: pulse 3s ease-in-out infinite; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .animate-on-scroll { opacity: 0; transform: translateY(50px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
        .animate-on-scroll.animate-visible { opacity: 1; transform: translateY(0); }
      `}</style>

      <Navigation colors={colors} />
    </div>
  );
};

export default Home;