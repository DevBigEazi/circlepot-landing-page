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
    <section className="py-20" style={{ backgroundColor: colors.background }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-5xl font-bold mb-4" style={{ color: colors.text }}>FAQ</h2>
          <p className="text-xl font-medium" style={{ color: colors.text, opacity: 0.8 }}>Common questions about CirclePot</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 rounded-2xl overflow-hidden transition-all duration-300 animate-slideUp" style={{ backgroundColor: colors.surface, borderColor: openFaq === index ? colors.primary : colors.border, animationDelay: `${index * 0.1}s` }}>
              <button
                className="flex justify-between items-center w-full p-6 text-left transition-colors hover:opacity-90"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="text-lg font-bold pr-4" style={{ color: colors.text }}>{faq.question}</span>
                <div className="shrink-0">
                  {openFaq === index ? (
                    <ChevronUp style={{ color: colors.primary }} size={24} />
                  ) : (
                    <ChevronDown style={{ color: colors.textLight }} size={24} />
                  )}
                </div>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6 pt-0">
                  <p className="leading-relaxed font-medium" style={{ color: colors.text, opacity: 0.8 }}>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
