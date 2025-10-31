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
    <section className="py-20" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-5xl font-bold mb-4" style={{ color: colors.text }}>How It Works</h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: colors.text, opacity: 0.8 }}>
            Four simple steps to start saving with CirclePot
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="rounded-3xl p-8 shadow-xl border-2 hover:scale-105 hover:shadow-2xl transition-all duration-300 relative overflow-hidden animate-slideUp" style={{ backgroundColor: colors.surface, borderColor: colors.border, animationDelay: `${idx * 0.1}s` }}>
              <div className="absolute top-4 right-4 text-6xl font-black opacity-5" style={{ color: step.color }}>
                {step.step}
              </div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ backgroundColor: step.color }}>
                  <step.icon className="text-white" size={32} />
                </div>
                <div className="text-2xl font-bold mb-2" style={{ color: step.color }}>{step.step}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.text }}>{step.title}</h3>
                <p style={{ color: colors.text, opacity: 0.85 }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};