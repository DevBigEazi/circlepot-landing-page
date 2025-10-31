import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { ThemeColors } from '../types';
import { faqs } from '../data/constants';

interface FAQSectionProps {
  colors: ThemeColors;
  openFaq: number | null;
  setOpenFaq: (index: number | null) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ colors, openFaq, setOpenFaq }) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: colors.background }}>
      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-12 animate-fadeIn px-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4" style={{ color: colors.text }}>FAQ</h2>
          <p className="text-base sm:text-lg lg:text-xl font-medium" style={{ color: colors.text, opacity: 0.8 }}>Common questions about CirclePot</p>
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-2 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 animate-slideUp" 
              style={{ 
                backgroundColor: colors.surface, 
                borderColor: openFaq === index ? colors.primary : colors.border, 
                animationDelay: `${index * 0.05}s` 
              }}
            >
              <button
                className="flex justify-between items-center w-full p-4 sm:p-5 md:p-6 text-left transition-colors hover:opacity-90"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                aria-expanded={openFaq === index}
                aria-controls={`faq-${index}`}
              >
                <span className="text-base sm:text-lg font-bold pr-3 sm:pr-4" style={{ color: colors.text }}>{faq.question}</span>
                <div className="shrink-0">
                  {openFaq === index ? (
                    <ChevronUp style={{ color: colors.primary }} size={20} className="w-5 h-5" />
                  ) : (
                    <ChevronDown style={{ color: colors.textLight }} size={20} className="w-5 h-5" />
                  )}
                </div>
              </button>
              {openFaq === index && (
                <div id={`faq-${index}`} className="px-4 sm:px-6 pb-5 sm:pb-6 pt-0">
                  <p className="text-sm sm:text-base leading-relaxed font-medium" style={{ color: colors.text, opacity: 0.8 }}>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
