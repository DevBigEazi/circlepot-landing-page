
import React from 'react';
import { Shield, Zap, Globe, Users } from 'lucide-react';
import type { ThemeColors, Currency } from '../types';

interface FeaturesShowcaseProps {
  colors: ThemeColors;
  currentCurrency: Currency;
}

export const FeaturesShowcase: React.FC<FeaturesShowcaseProps> = ({ colors, currentCurrency }) => {
  const features = [
    { icon: Shield, title: 'Secure & Transparent', desc: 'Advanced security ensures your money is safe' },
    { icon: Zap, title: 'Zero Transaction Fees', desc: 'We cover all transaction costs - save more' },
    { icon: Globe, title: 'Global Access', desc: 'Save in Digital Dollars (cUSD), spend in local currency' },
    { icon: Users, title: 'Community Driven', desc: 'Join trusted circles with trust scores' }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft">
            <h2 className="text-5xl font-bold mb-6" style={{ color: colors.text }}>
              Why Choose CirclePot?
            </h2>
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 border" style={{ backgroundColor: colors.surface, borderColor: colors.border }}>
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md" style={{ backgroundColor: colors.primary }}>
                      <feature.icon className="text-white" size={28} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: colors.text }}>{feature.title}</h3>
                    <p style={{ color: colors.text, opacity: 0.85 }}>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Card */}
          <div className="relative animate-slideInRight">
            <div className="bg-linear-to-br from-green-500 to-green-600 rounded-3xl p-8 shadow-2xl text-white">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-sm opacity-90 mb-1">Active Circle</div>
                  <div className="text-2xl font-bold">Lagos Innovators</div>
                </div>
                <div className="backdrop-blur px-3 py-1 rounded-full text-sm font-bold" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
                  Active
                </div>
              </div>
              
              <div className="backdrop-blur rounded-2xl p-6 mb-6" style={{ backgroundColor: `${colors.surface}F2`, color: colors.text }}>
                <div className="text-sm mb-2 opacity-70">Next Payout</div>
                <div className="text-4xl font-bold mb-2">$1,250</div>
                <div className="text-sm font-semibold" style={{ color: colors.primary }}>
                  ≈ {currentCurrency.symbol}1,875,000 • Nov 15, 2025
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '12', label: 'Members' },
                  { value: '8/12', label: 'Weeks' },
                  { value: '100%', label: 'On-Time' }
                ].map((stat, idx) => (
                  <div key={idx} className="backdrop-blur rounded-xl p-4 text-center" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
