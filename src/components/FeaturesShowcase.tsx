
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
    { icon: Zap, title: 'Easy To Use, Zero Fees', desc: 'We cover all transaction costs - save more' },
    { icon: Globe, title: 'Save From Anywhere', desc: 'Save in Digital Stablecoins (cUSD), spend in local currency' },
    { icon: Users, title: 'Community Driven', desc: 'Join or create circles and save with friends and family or like-minded people globally' }
  ];

  return (
    <section id='features' className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="animate-slideInLeft">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2 sm:px-0" style={{ color: colors.text }}>
              Why Choose Circlepot?
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300 border" 
                  style={{ 
                    backgroundColor: colors.surface, 
                    borderColor: colors.border,
                    animationDelay: `${idx * 0.05}s`
                  }}
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm sm:shadow-md" style={{ backgroundColor: colors.primary }}>
                      <feature.icon className="text-white" size={20} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2" style={{ color: colors.text }}>{feature.title}</h3>
                    <p className="text-sm sm:text-base" style={{ color: colors.text, opacity: 0.85 }}>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Card */}
          <div className="relative animate-slideInRight">
            <div className="bg-linear-to-br from-green-500 to-green-600 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl sm:shadow-2xl text-white">
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <div>
                  <div className="text-xs sm:text-sm opacity-90 mb-0.5 sm:mb-1">Active Circle</div>
                  <div className="text-xl sm:text-2xl font-bold">Lagos Innovators</div>
                </div>
                <div className="backdrop-blur px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
                  Active
                </div>
              </div>
              
              <div className="backdrop-blur rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 mb-4 sm:mb-6" style={{ backgroundColor: `${colors.surface}F2`, color: colors.text }}>
                <div className="text-xs sm:text-sm mb-1 sm:mb-2 opacity-70">Next Payout</div>
                <div className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">$1,250</div>
                <div className="text-xs sm:text-sm font-semibold" style={{ color: colors.primary }}>
                  ≈ {currentCurrency.symbol}1,875,000 • Nov 15, 2025
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                {[
                  { value: '12', label: 'Members' },
                  { value: '8/12', label: 'Weeks' },
                  { value: '100%', label: 'On-Time' }
                ].map((stat, idx) => (
                  <div 
                    key={idx} 
                    className="backdrop-blur rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-center" 
                    style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                  >
                    <div className="text-xl sm:text-2xl font-bold">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs opacity-90">{stat.label}</div>
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
