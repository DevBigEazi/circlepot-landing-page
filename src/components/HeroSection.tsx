import React from 'react';
import { Zap, Users, TrendingUp, Globe } from 'lucide-react';
import type { ThemeColors, Currency } from '../types/index';
import { currencies } from '../data/constants';

interface HeroSectionProps {
  colors: ThemeColors;
  selectedCurrency: string;
  setSelectedCurrency: (code: string) => void;
  currentCurrency: Currency;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  colors,
  selectedCurrency,
  setSelectedCurrency,
  currentCurrency
}) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10" style={{ backgroundColor: colors.primary }}></div>
        <div className="absolute top-60 -left-20 w-60 h-60 rounded-full opacity-10" style={{ backgroundColor: colors.secondary }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
        <div className="text-center mb-12 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 border-2 animate-slideUp" style={{ backgroundColor: 'rgba(53, 208, 127, 0.1)', borderColor: colors.primary }}>
            <Zap size={18} style={{ color: colors.primary }} />
            <span className="font-semibold text-sm" style={{ color: colors.primary }}>
              Secure Digital Savings • Web3 Products With Web2 UX 
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight animate-slideUp delay-100" style={{ color: colors.text }}>
            Save Globally,
            <br />
            <span style={{ color: colors.primary }}>Spend Locally</span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-slideUp delay-200" style={{ color: colors.text, opacity: 0.8 }}>
            Deposit in 35+ currencies, save in Digital Dollars (cUSD), withdraw anywhere. 
            Community savings meets modern technology.
          </p>
        </div>

        {/* Currency Selector */}
        <div className="max-w-4xl mx-auto mb-12 animate-scaleIn delay-300">
          <div className="rounded-3xl shadow-2xl p-8 border" style={{ backgroundColor: colors.surface, borderColor: colors.border }}>
            <label className="block text-center text-lg font-bold mb-6" style={{ color: colors.text }}>
              🌍 Choose Your Currency
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-6">
              {Object.entries(currencies).map(([code, currency]) => (
                <button
                  key={code}
                  onClick={() => setSelectedCurrency(code)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl font-bold transition-all duration-300 ${
                    selectedCurrency === code ? 'shadow-lg scale-105' : 'hover:scale-105'
                  }`}
                  style={{
                    backgroundColor: selectedCurrency === code ? colors.primary : colors.infoBg,
                    color: selectedCurrency === code ? 'white' : colors.text,
                    border: `2px solid ${selectedCurrency === code ? colors.primary : colors.border}`
                  }}
                >
                  <span className="text-3xl">{currency.flag}</span>
                  <span className="text-sm">{code}</span>
                </button>
              ))}
            </div>
            <div className="text-center">
              <p className="text-sm mb-4 font-medium" style={{ color: colors.text, opacity: 0.75 }}>
                Selected: <strong style={{ color: colors.text }}>{currentCurrency.name}</strong>
              </p>
              <button 
                className="w-full sm:w-auto px-12 py-4 rounded-full font-bold text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 text-lg"
                style={{ backgroundColor: colors.primary }}
              >
                Start Saving in {selectedCurrency} →
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto animate-slideUp delay-400">
          {[
            { value: '10K+', label: 'Active Users', icon: Users },
            { value: '$2M+', label: 'Total Saved', icon: TrendingUp },
            { value: '35+', label: 'Currencies', icon: Globe }
          ].map((stat, idx) => (
            <div key={idx} className="rounded-2xl p-6 text-center shadow-lg border hover:scale-105 hover:shadow-xl transition-all duration-300" style={{ backgroundColor: colors.surface, borderColor: colors.border }}>
              <stat.icon className="mx-auto mb-3" size={32} style={{ color: colors.primary }} />
              <div className="text-3xl font-bold mb-1" style={{ color: colors.text }}>{stat.value}</div>
              <div className="text-sm font-medium" style={{ color: colors.text, opacity: 0.75 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
