import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { ThemeColors } from '../types';

interface CTASectionProps {
  colors: ThemeColors;
}

export const CTASection: React.FC<CTASectionProps> = ({ colors }) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: colors.primary }}></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full" style={{ backgroundColor: colors.secondary }}></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full" style={{ backgroundColor: colors.accent }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-5 lg:px-6 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 animate-slideUp px-2">
          Ready to Start Saving?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto animate-slideUp delay-100 px-3">
          Join thousands saving smarter with advanced security and local currency convenience.
        </p>
        <button 
          className="px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 bg-white rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-300 hover:scale-105 sm:hover:scale-110 inline-flex items-center gap-2 sm:gap-3 animate-scaleIn delay-200"
          style={{ color: colors.primary }}
        >
          Get Started Free
          <ArrowRight size={20} className="w-5 h-5" />
        </button>
        <div className="mt-6 sm:mt-8 text-white/80 text-xs sm:text-sm">
          <span className="block sm:inline">✓ Free forever</span> • <span className="block sm:inline">35+ currencies</span> • <span className="block sm:inline">Zero fees</span>
        </div>
      </div>
    </section>
  );
};