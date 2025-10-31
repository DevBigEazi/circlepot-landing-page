import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { ThemeColors } from '../types';

interface CTASectionProps {
  colors: ThemeColors;
}

export const CTASection: React.FC<CTASectionProps> = ({ colors }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: colors.primary }}></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{ backgroundColor: colors.secondary }}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full" style={{ backgroundColor: colors.accent }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 animate-slideUp">
          Ready to Start Saving?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-slideUp delay-100">
          Join thousands saving smarter with advanced security and local currency convenience.
        </p>
        <button 
          className="px-16 py-5 bg-white rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 inline-flex items-center gap-3 animate-scaleIn delay-200"
          style={{ color: colors.primary }}
        >
          Get Started Free
          <ArrowRight size={24} />
        </button>
        <div className="mt-8 text-white/80 text-sm">
          ✓ Free forever  •  ✓ 35+ currencies  •  ✓ Zero transaction fees
        </div>
      </div>
    </section>
  );
};