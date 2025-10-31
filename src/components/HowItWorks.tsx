import React from 'react';
import { Banknote, Coins, Users, Wallet } from 'lucide-react';
import type { ThemeColors } from '../types';

interface HowItWorksProps {
  colors: ThemeColors;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ colors }) => {
  const steps = [
    {
      step: "01",
      title: "Deposit Local Currency",
      description: "Bank transfer, mobile money, or cards",
      icon: Banknote,
      color: colors.primary
    },
    {
      step: "02",
      title: "Auto-Convert to Digital Dollars",
      description: "Secure cUSD storage",
      icon: Coins,
      color: colors.secondary
    },
    {
      step: "03",
      title: "Join Savings Circles",
      description: "Save with trusted community groups",
      icon: Users,
      color: colors.accent
    },
    {
      step: "04",
      title: "Withdraw Locally",
      description: "Direct to bank or mobile money",
      icon: Wallet,
      color: colors.primary
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-10 sm:mb-16 animate-fadeIn px-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: colors.text }}>How It Works</h2>
          <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto" style={{ color: colors.text, opacity: 0.8 }}>
            Four simple steps to start saving with CirclePot
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 px-2 sm:px-0">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-lg sm:shadow-xl border hover:scale-[1.02] sm:hover:scale-105 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 relative overflow-hidden animate-slideUp" 
              style={{ 
                backgroundColor: colors.surface, 
                borderColor: colors.border, 
                animationDelay: `${idx * 0.1}s` 
              }}
            >
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-4xl sm:text-5xl lg:text-6xl font-black opacity-5" style={{ color: step.color }}>
                {step.step}
              </div>
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-md sm:shadow-lg" style={{ backgroundColor: step.color }}>
                  <step.icon className="text-white" size={24} />
                </div>
                <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2" style={{ color: step.color }}>{step.step}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: colors.text }}>{step.title}</h3>
                <p className="text-sm sm:text-base" style={{ color: colors.text, opacity: 0.85 }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};