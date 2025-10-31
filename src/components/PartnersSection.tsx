import React from 'react';
import { Building } from 'lucide-react';
import type { ThemeColors } from '../types';
import { partners } from '../data/constants';

interface PartnersSectionProps {
  colors: ThemeColors;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ colors }) => {
  return (
    <section className="py-20" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-5xl font-bold mb-6" style={{ color: colors.text }}>Trusted Partners</h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: colors.text, opacity: 0.8 }}>
            Seamless on/off-ramp through established payment providers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, idx) => (
            <div key={idx} className="rounded-2xl p-6 border-2 hover:scale-105 hover:shadow-xl transition-all duration-300 animate-slideUp" style={{ backgroundColor: colors.surface, borderColor: colors.border, animationDelay: `${idx * 0.1}s` }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: colors.primary }}>
                  <Building className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: colors.text }}>{partner.name}</h3>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mt-1" style={{ backgroundColor: 'rgba(91, 167, 91, 0.1)', color: colors.primary }}>
                    {partner.region}
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-bold mb-2" style={{ color: colors.text }}>Payment Methods:</div>
                  <div className="flex flex-wrap gap-2">
                    {partner.methods.map((method, i) => (
                      <span key={i} className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: colors.infoBg, color: colors.text, opacity: 0.8 }}>
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-sm font-medium" style={{ color: colors.text, opacity: 0.75 }}>
                  <strong style={{ color: colors.text }}>Coverage:</strong> {partner.countries.join(', ')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
